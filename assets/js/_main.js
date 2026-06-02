/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// Determine the expected state of the theme toggle, which can be "dark", "light", or
// "system". Default is "system".
let determineThemeSetting = () => {
  let themeSetting = localStorage.getItem("theme");
  return (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") ? "system" : themeSetting;
};

// Determine the computed theme, which can be "dark" or "light". If the theme setting is
// "system", the computed theme is determined based on the user's system preference.
let determineComputedTheme = () => {
  let themeSetting = determineThemeSetting();
  if (themeSetting != "system") {
    return themeSetting;
  }
  return (userPref && userPref("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
};

// detect OS/browser preference
const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Set the theme on page load or when explicitly called
let setTheme = (theme) => {
  const use_theme =
    theme ||
    localStorage.getItem("theme") ||
    $("html").attr("data-theme") ||
    browserPref;

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
  }
};

// Toggle the theme manually
var toggleTheme = () => {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", new_theme);
  setTheme(new_theme);
};

let determineLang = () => {
  const lang = localStorage.getItem("lang");
  return lang === "zh" ? "zh" : "en";
};

let updateNavLabels = (lang) => {
  $("a[data-title-en][data-title-zh]").each(function () {
    const label = lang === "zh" ? $(this).data("title-zh") : $(this).data("title-en");
    $(this).text(label);
  });
};

let setLang = (lang) => {
  const useLang = lang === "zh" ? "zh" : "en";
  localStorage.setItem("lang", useLang);
  $("html").attr("data-lang", useLang);
  $("html").attr("lang", useLang);
  updateNavLabels(useLang);
};

window.positionLangToggle = () => {
  const langToggle = document.querySelector("#lang-toggle");
  const nav = document.querySelector(".greedy-nav");
  const content = document.querySelector("#main .page__content, #main .archive");
  if (!langToggle || !nav || !content) {
    return;
  }

  const navRect = nav.getBoundingClientRect();
  const contentRect = content.getBoundingClientRect();
  let rightOffset = navRect.right - contentRect.right;

  const hamburger = document.querySelector(".greedy-nav__toggle:not(.hidden)");
  if (hamburger) {
    const hamburgerRect = hamburger.getBoundingClientRect();
    const minOffset = navRect.right - hamburgerRect.left + 8;
    rightOffset = Math.max(rightOffset, minOffset);
  }

  langToggle.style.right = `${Math.max(0, rightOffset)}px`;
};

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      import("./theme.js").then(({ plotlyDarkLayout, plotlyLightLayout }) => {
        plotlyElements.forEach((elem) => {
          // Parse the Plotly JSON data and hide it
          var jsonData = JSON.parse(elem.textContent);
          elem.parentElement.classList.add("hidden");

          // Add the Plotly node
          let chartElement = document.createElement("div");
          elem.parentElement.after(chartElement);

          // Set the theme for the plot and render it
          const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
          if (jsonData.layout) {
            jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
          } else {
            jsonData.layout = { template: theme };
          }
          Plotly.react(chartElement, jsonData.data, jsonData.layout);
        });
      });
    }
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // If the user hasn't chosen a theme, follow the OS preference
  setTheme();
  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener("change", (e) => {
          if (!localStorage.getItem("theme")) {
            setTheme(e.matches ? "dark" : "light");
          }
        });

  // Enable the language toggle
  setLang(determineLang());
  window.positionLangToggle();
  $(window).on("load", window.positionLangToggle);
  $("#lang-toggle .lang-switch").on("click", function () {
    setLang(determineLang() === "zh" ? "en" : "zh");
  });

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
  });

});

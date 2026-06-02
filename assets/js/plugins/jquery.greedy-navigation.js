/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav .greedy-nav__toggle');
var $langToggle = $('#lang-toggle');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  if (typeof window.positionLangToggle === "function") {
    window.positionLangToggle();
  }

  var langToggleReserve = 0;
  if ($langToggle.length) {
    var navRect = $nav[0].getBoundingClientRect();
    var langRect = $langToggle[0].getBoundingClientRect();
    langToggleReserve = navRect.right - langRect.left + 8;
  }
  var toggleBtnWidth = $btn.hasClass('hidden') ? 0 : $btn.outerWidth(true);
  var availableSpace = $nav.width() - langToggleReserve - toggleBtnWidth;

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      toggleBtnWidth = $btn.hasClass('hidden') ? 0 : $btn.outerWidth(true);
      if ($langToggle.length) {
        var navRect = $nav[0].getBoundingClientRect();
        var langRect = $langToggle[0].getBoundingClientRect();
        langToggleReserve = navRect.right - langRect.left + 8;
      }
      availableSpace = $nav.width() - langToggleReserve - toggleBtnWidth;

      // Show the dropdown btn
      $btn.removeClass("hidden");
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // update masthead height and the body/sidebar top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
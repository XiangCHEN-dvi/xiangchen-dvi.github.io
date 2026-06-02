---
layout: archive
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="lang-en" markdown="1">

# Researcher at Zhongguancun Academy
My current research interests include:
- 3D geometric representations for AI, data-driven and physics-driven hybrid modeling, and their applications in 2C (world models) and 2B (CAD/CAE) scenarios, including surrogate simulators, generative models, and inverse design (3D reconstruction, PDE-constrained optimization)
- Scientific foundation models, multi-modal models for STEM
- Physics of AI

# 2017–2025, Huawei Noah's Ark Lab
My research focused on using AI and optimization algorithms for data-driven modeling, simulation, optimization, and control. The outcomes have been widely deployed across Huawei business units, including ICT, CBG, HiSilicon, Computing, Car, etc.

From an application perspective, our research targets can be broadly categorized into two types:
- Complex industrial systems: sensing, modeling, parameter optimization, and optimal control for cellular networks, data center networks, optical communication and sensing, home environments, computing clusters, power grids, etc. These systems often lack mechanistic models, or mechanistic models are only qualitatively accurate. We typically model them with strongly data-driven approaches embedded with domain expertise.
- Simple physical systems: surrogate simulation and inverse design in domains such as antennas, structures, materials, and circuits. Mechanistic models align well with real systems. We can use the language of numerical computation to integrate mechanistic and data-driven models.

From a research perspective, we proposed the first learning-based end-to-end PDE mesh movement optimization method, and designed the first end-to-end differentiable quantum transport simulator capable of handling semiconductor device optimization problems with tens of thousands of degrees of freedom. My overall understanding of Deep Learning for Science:

<table>
  <thead>
    <tr>
      <th style="text-align: center;"></th>
      <th></th>
      <th style="text-align: center;">Atomic Scale<br>(physics, chemistry, materials, biology)</th>
      <th style="text-align: center;">Continuum Scale (PDE)<br>(EM/mechanical waves, structures, fluids, heat)</th>
      <th style="text-align: center;">Component/System Scale<br>(circuits, robotics, etc.)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center;" rowspan="3"><b>Direct Problems</b></td>
      <td><b>AI-based numerical solvers</b><br>Pros: can solve problems intractable for traditional methods<br>Cons: no guaranteed accuracy or convergence</td>
      <td style="text-align: center;">PauliNet<br>FermiNet</td>
      <td style="text-align: center;">PINN<br>Deep Ritz</td>
      <td></td>
    </tr>
    <tr>
      <td><b>AI-based surrogate simulators</b><br>Pros: orders-of-magnitude speedup<br>Cons: no guaranteed accuracy</td>
      <td style="text-align: center;">AlphaFold<br>DeePMD<br>Graphormer</td>
      <td style="text-align: center;">FNO<br>DeepONet<br>MeshGraphNet</td>
      <td style="text-align: center;">NeuralODE<br>DeLan<br>HamiltonianNN</td>
    </tr>
    <tr>
      <td><b>AI-assisted traditional solvers</b><br>Pros: compatible with existing workflows<br>Cons: relatively marginal gains</td>
      <td></td>
      <td style="text-align: center;">M2N<br>MgNet</td>
      <td style="text-align: center;">HyperSolver</td>
    </tr>
    <tr>
      <td style="text-align: center;" rowspan="2"><b>Inverse Problems</b></td>
      <td><b>Differentiable physics models</b><br>Pros: no data or training required; forward numerics remain strictly correct<br>Cons: forward simulation is not accelerated</td>
      <td style="text-align: center;">jax-md<br>DQC</td>
      <td style="text-align: center;">jax-cfd<br>PhiFlow</td>
      <td style="text-align: center;">brax<br>lcp-physics</td>
    </tr>
    <tr>
      <td><b>Inverse operators / generative models</b><br>Pros: obtain inverse solutions extremely efficiently<br>Cons: no guaranteed correctness</td>
      <td style="text-align: center;">GeoDiff<br>MatterGen<br>RFdiffusion</td>
      <td style="text-align: center;">NIO<br>PDE-Net</td>
      <td></td>
    </tr>
  </tbody>
</table>

# 2008–2017, B.S. and Ph.D., Department of Electronic Engineering, Tsinghua University

</div>

<div class="lang-zh" markdown="1">

# 现任北京中关村学院研究员
目前的研究兴趣包括：
- 面向 AI 的三维几何表征、数据驱动与物理驱动混合建模，及其在2C（世界模型）与2B（CAD/CAE）场景中的应用，包括代理仿真器、生成模型与逆向设计（三维重建、PDE约束优化）
- 科学基础模型、面向 STEM 的多模态模型
- Physics of AI

# 2017-2025年，曾就职于华为诺亚方舟实验室
主要研究如何利用人工智能与优化算法进行数据驱动的建模、仿真、优化与控制，相关成果已在华为通信、终端、芯片、计算、车等业务场景广泛落地。

从应用角度，我们的研究对象大致可以分为两类：
- 复杂工业系统：蜂窝网络、数据中心网络、光通信光传感、家庭环境、计算集群、电网等系统的感知、建模、参数优化与最优控制。没有机理模型或机理模型仅定性准确。通常使用强数据驱动+专家先验嵌入的方式建模。
- 简单物理系统：天线、结构、材料、电路等领域的代理仿真与逆向设计。机理模型和实际系统对应良好。可以使用数值计算的语言，深度融合机理和数据驱动模型。

从研究角度，我们提出了首个基于学习的端到端的PDE网格移动优化方法；设计了首个端到端可微分的量子输运仿真器，可处理上万自由度的半导体器件优化问题。我对 Deep Learning for Science 的整体理解：

<table>
  <thead>
    <tr>
      <th style="text-align: center;"></th>
      <th></th>
      <th style="text-align: center;">原子级<br>（物理、化学、材料、生物）</th>
      <th style="text-align: center;">连续介质级（PDE）<br>（电磁波/机械波、结构、流体、热）</th>
      <th style="text-align: center;">部件/系统级<br>（电路、机器人等）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center;" rowspan="3"><b>仿真求解<br>（正问题）</b></td>
      <td><b>基于AI的数值求解器</b><br>优点：可以求解传统方法解不了的问题<br>缺点：不保证精度、收敛性</td>
      <td style="text-align: center;">PauliNet<br>FermiNet</td>
      <td style="text-align: center;">PINN<br>Deep Ritz</td>
      <td></td>
    </tr>
    <tr>
      <td><b>基于AI的代理仿真器</b><br>优点：跨数量级加速<br>缺点：不保证精度</td>
      <td style="text-align: center;">AlphaFold<br>DeePMD<br>Graphormer</td>
      <td style="text-align: center;">FNO<br>DeepONet<br>MeshGraphNet</td>
      <td style="text-align: center;">NeuralODE<br>DeLan<br>HamiltonianNN</td>
    </tr>
    <tr>
      <td><b>AI辅助的传统求解器</b><br>优点：适配原本业务流程<br>缺点：增益比较边缘</td>
      <td></td>
      <td style="text-align: center;">M2N<br>MgNet</td>
      <td style="text-align: center;">HyperSolver</td>
    </tr>
    <tr>
      <td style="text-align: center;" rowspan="2"><b>设计优化<br>（逆问题）</b></td>
      <td><b>可微物理模型</b><br>优点：无需数据和训练，前向数值严格正确<br>缺点：前向仿真不加速</td>
      <td style="text-align: center;">jax-md<br>DQC</td>
      <td style="text-align: center;">jax-cfd<br>PhiFlow</td>
      <td style="text-align: center;">brax<br>lcp-physics</td>
    </tr>
    <tr>
      <td><b>逆算子/生成模型</b><br>优点：极高效获得反问题的解<br>缺点：不保证正确性</td>
      <td style="text-align: center;">GeoDiff<br>MatterGen<br>RFdiffusion</td>
      <td style="text-align: center;">NIO<br>PDE-Net</td>
      <td></td>
    </tr>
  </tbody>
</table>

# 2008-2017年，于清华大学电子工程系取得本科和博士学位

</div>

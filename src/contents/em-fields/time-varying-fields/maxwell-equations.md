---
id: maxwell-equations
title: 麦克斯韦方程组
order: 2
---

# 麦克斯韦方程组
## 微分形式
$$
\begin{cases}
\nabla \times \vec{H} = \vec{J_e} + \vec{J_d} = \vec{J_e} + \dfrac{\partial \vec{D}}{\partial t} \quad (安培环路定律推广)\\
\nabla \times \vec{E} = -\dfrac{\partial \vec{B}}{\partial t} \quad (法拉第电磁感应定律)\\
\nabla \cdot \vec{B} = 0 \quad (磁场散度定理)\\
\nabla \cdot \vec{D} = \rho \quad (电场散度定理)
\end{cases}
$$
## 积分形式
$$
\begin{cases}
\oint_C \vec{H} \cdot d\vec{l} = \int_S \left( \vec{J_e} + \dfrac{\partial \vec{D}}{\partial t} \right) \cdot d\vec{S} \\
\oint_C \vec{E} \cdot d\vec{l} = -\int_S \dfrac{\partial \vec{B}}{\partial t} \cdot d\vec{S} \\
\oint_S \vec{B} \cdot d\vec{S} = 0 \\
\oint_S \vec{D} \cdot d\vec{S} = \int_V \rho \, dV = Q
\end{cases}
$$
## 限定形式
在介质中，场量之间必须满足介质的本构关系。在线性、各向同性介质中
$$\vec{D} = \varepsilon \vec{E}, \quad\vec{B} = \mu \vec{H}, \quad \vec{J} = \gamma \vec{E}$$
代入麦克斯韦方程组得
$$
\begin{cases}
\nabla \times \vec{H} = \gamma \vec{E} + \varepsilon \dfrac{\partial \vec{E}}{\partial t} \\
\nabla \times \vec{E} = -\mu \dfrac{\partial \vec{H}}{\partial t} \\
\nabla \cdot (\mu \vec{H}) = 0 \\
\nabla \cdot (\varepsilon \vec{E}) = \rho
\end{cases}
$$
## 物理意义
时变电场的激发源除电荷之外，还有变化的磁场；时变磁场的激发源除传导电流外，还有变化的电场
电场和磁场互为激发源，相互激发
电场和磁场不再相互独立，构成一个整体——电磁场
## 波动方程
$$
\begin{cases}
\nabla^2 \vec{E} = \mu\varepsilon \dfrac{\partial^2 \vec{E}}{\partial t^2} \\
\nabla^2 \vec{H} = \mu\varepsilon \dfrac{\partial^2 \vec{H}}{\partial t^2}
\end{cases}
$$
# 例题
<Collapsible title="例">
在$z=0$，$z=d$位置有两个无限大理想导体板，在极板间存在时变电磁场，其电场强度为
$$\vec{E} = \vec{e}_y E_0 \sin\left(\frac{\pi}{d} z\right) \cos(\omega t - k_x x)$$
求：该时变场相伴的磁场强度$H$
<Collapsible title="解">
由麦克斯韦方程组
$$\nabla \times \vec{E} &= - \frac { \partial \vec { B } } { \partial t }\\
- \frac { \partial \vec { B } } { \partial t } &= \vec { e } _ { z } \frac { \partial E _ { y } } { \partial x } - \vec { e } _ { x } \frac { \partial E _ { y } } { \partial z }\\
\frac { \partial \vec { B } } { \partial t } &= - \vec { e } _ { z } E _ { 0 } k _ { x } \sin ( \frac { \pi } { d } z ) \sin ( \omega t - k _ { x } x ) + \vec { e } _ { x } \frac { \pi E _ { 0 } } { d } \cos ( \frac { \pi } { d } z ) \cos ( \omega t - k _ { x } x )\\
\vec{B} &= \int \frac{\partial \vec{B}}{\partial t} dt\\
&= \vec{e}_z \frac{E_0 k_x}{\omega} \sin\left(\frac{\pi}{d} z\right) \cos(\omega t - k_x x) + \vec{e}_x \frac{\pi E_0}{\omega d} \cos\left(\frac{\pi}{d} z\right) \sin(\omega t - k_x x)\\
\vec{H} &= \frac{\vec{B}}{\mu_0} = \vec{e}_x \frac{\pi E_0}{\omega d \mu_0} \cos\left(\frac{\pi}{d} z\right) \sin(\omega t - k_x x) + \vec{e}_z \frac{E_0 k_x}{\omega \mu_0} \sin\left(\frac{\pi}{d} z\right) \cos(\omega t - k_x x)$$
</Collapsible>
</Collapsible>
---
id: basic-equations
title: 静电场基本方程
order: 1
---

# 点电荷产生的电场
单个点电荷$q$的电场为
$$\vec { E } ( \vec { r } ) = \frac { \vec { F } } { q _ { s } } =  \frac{\frac { q q _ { s } } { 4 \pi \varepsilon _ { 0 } R ^ { 2 } } \vec { e_ { R } }  }{q _ { s }}= \frac { q } { 4 \pi \varepsilon _ { 0 } R ^ { 2 } } \vec { e_ { R } } = - \frac { q } { 4 \pi \varepsilon _ { 0 } } \nabla \left( \frac { 1 } { R } \right)$$
多个点电荷
$$\vec { E } = \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \sum _ { i = 1 } ^ { n } \frac { q _ { i } } { R _ { i } ^ { 3 } } \vec { R } _ { i }$$
连续分布的电荷系统产生的电场
$$\vec { E } = \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \int _ { V } \frac { \rho } { R ^ { 3 } } \vec { R } d v$$
# 静电场基本方程
## 高斯定理微分形式
真空中静电场的散度为
$$\nabla \cdot \vec{E}(\vec{r}) = \begin{cases} 0, & \vec{r}\text{处无电荷} \\ \dfrac{\rho(\vec{r})}{\varepsilon_0}, & \vec{r}\text{处电荷密度为}\rho \end{cases}$$
## 高斯定理
$$\oint_{S} \vec{E} \cdot d\vec{S} = \frac{Q}{\varepsilon_0}$$
$S$为高斯面，$Q$为高斯面所围电荷
### 利用高斯定理求解静电场
适用于呈对称分布的电场
<Collapsible title="例1">
半径为$a$的球形带电体，电荷总量$Q$均匀分布在球体内。求$\vec{E}(\vec{r})$
<Collapsible title="解">
电场大小只与$R$有关，取同心球面为高斯面
电荷总量在球外为恒定值，在球内可用表达式表达，所以分两类讨论
$r\ge a$
由高斯定理
$$\oint_S \vec{E} \cdot d\vec{S} &= \vec{E} \cdot (4\pi r^2 \vec{e}_r) = \frac{Q}{\varepsilon_0}\\
\vec{E} &= \frac{Q}{4\pi\varepsilon_0 r^2} \vec{e}_r$$
$r<a$
电荷密度
$$\rho = \frac{Q}{V} = \frac{3Q}{4\pi a^3}$$
带电量
$$Q ^ { \prime } = \rho V = \frac { 3 Q } { 4 \pi a ^ { 3 } } \cdot \frac { 4 } { 3 } \pi r ^ { 3 } = \frac { r ^ { 3 } } { a ^ { 3 } } Q$$
由高斯定理
$$\oint_S \vec{E} \cdot d\vec{S} &= \vec{E} \cdot (4\pi r^2 \vec{e}_r) = \frac{Q^ { \prime } }{\varepsilon_0}\\
\vec{E} &= \frac{Q r}{4\pi\varepsilon_0 a^3} \vec{e}_r$$
所以
$$\vec{E} = \begin{cases} \dfrac{Q}{4\pi\varepsilon_0 r^2} \vec{e}_r, & r > a \\ \dfrac{Q r}{4\pi\varepsilon_0 a^3} \vec{e}_r, & r \leq a \end{cases}$$
</Collapsible>
</Collapsible>
<Collapsible title="例2">
求半径为$R$，均匀带电量$q$(>0)的球壳内、外的电场分布
<Collapsible title="解">
取同心球面为高斯面，由高斯定理
$$\oint_S \vec{E} \cdot d\vec{S} &= \vec{E}\cdot (4\pi r^2 \vec{e}_r) = \begin{cases} 0, & r < R \\ \dfrac{q}{\varepsilon_0}, & r \geq R \end{cases}\\\vec{E} &= \begin{cases} 0, & r < R \\ \dfrac{q}{4\pi\varepsilon_0 r^2} \vec{e}_r, & r \geq R \end{cases}$$
</Collapsible>
</Collapsible>
<Collapsible title="例3">
一个均匀分布带电球层，电荷体密度为$\rho$，球层内表面半径为$R$，外表面为$2R$，求电场分布
<Collapsible title="解">
取同心球面为高斯面
带电量
$r\le R$
$$q=0$$
$R<r\le 2R$
带电体积
$$V = \frac{4}{3} \pi ( r^3 - R^3 )$$
所以
$$q = \rho V = \frac{4}{3} \pi ( r^3 - R^3 ) \rho$$
$r>2R$
$$V = \frac{4}{3} \pi [(2R)^3 - R^3] = \frac{28}{3} \pi R^3$$
$$q = \frac{28}{3} \pi R^3 \rho$$
所以，由高斯定理
$$\oint_S \vec{E} \cdot d\vec{S} = \vec{E} \cdot (4\pi r^2\vec{e}_r) = \frac{q}{\varepsilon_0}$$
得
$$\vec{E} = \begin{cases} 0 & , r \le R \\ \dfrac{(r^3 - R^3)\rho}{3\varepsilon_0 r^2} & , R < r \le 2R \\ \dfrac{7R^3\rho}{3\varepsilon_0 r^2} & , r > 2R \end{cases}$$
</Collapsible>
</Collapsible>
## 环路定律
$$\int_{l} \vec{E} \cdot d\vec{l} = \frac{q}{4\pi\varepsilon_0} \int \frac{\vec{e}_r \cdot d\vec{l}}{R^2} = \frac{q}{4\pi\varepsilon_0} \int_{R_A}^{R_B} \frac{dR}{R^2} = \frac{q}{4\pi\varepsilon_0} \left( \frac{1}{R_A} - \frac{1}{R_B} \right)$$
当$AB$点重合时
$$\oint_{l} \vec{E} \cdot d\vec{l} = 0$$
由斯托克斯公式
$$\nabla \times \vec { E } ( \vec { r } ) = 0$$
环路定律说明：在静电场将单位电荷沿任一闭合路径运动，静电场做功为零即静电场为保守场。静电场旋度处处为零即静电场不存在漩涡源。
# 总结
静电场是有源无旋场，为保守场，源于电荷
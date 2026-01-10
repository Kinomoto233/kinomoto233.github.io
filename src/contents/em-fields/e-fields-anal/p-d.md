---
id: p-d
title: 介质的极化和电位移矢量
order: 2
---

# 极化和极化强度矢量
## 介质极化
**电偶极子**：由2个相距很近的带等量异号点电荷组成的系统
**电偶极矩**：表示电偶极子的大小和取向
$$\vec{p}=q\vec{l}$$
**无极分子**：在没有外电场时，分子内部的正电荷中心与负电荷中心重合。分子固有的电偶极矩为零
**有极分子**：在没有外电场时，分子内部的正负电荷中心不重合。分子就具有电偶极矩
**介质的极化**：在外场影响下，无极分子变为有极分子，有极分子的取向一致。宏观上出现电偶极矩
## 极化强度矢量
单位体积内电偶极矩矢量和
$$\vec { p } = \lim _ { \Delta V \rightarrow 0 } \frac { \sum\limits_{i = 1}^{ n } \vec { p _ { i } } } { \Delta V }$$
对于线性介质，极化强度和外加电场成正比
$$\vec { P } = \chi _ { e } \varepsilon _ { 0 } \vec { E }$$
$\chi _ { e }$为介质极化系数

# 极化电荷（束缚电荷）
媒质被极化后，在其内部和分界面上会出现电荷分布，这种电荷称为**极化电荷**。相对于自由电子，极化电荷不能自由移动，所以也称为**束缚电荷**
## 极化电荷体密度
$$\rho _ { \mathrm { p } } = - \nabla \cdot \vec { P }$$
## 电位移矢量
$$\vec { D } = \varepsilon _ { 0 } \vec { E } + \vec { P }$$
对于线性介质
$$\vec { P } = \chi _ { e } \varepsilon _ { 0 } \vec { E }$$
所以
$$\vec { D } = ( 1 + \chi _ { e } ) \varepsilon _ { 0 } \vec { E } = \varepsilon _ { 0 } \varepsilon _ { r } \vec { E } = \varepsilon \vec { E }$$
其中，$\varepsilon _ { 0 }$称为相对介电常数$\varepsilon$称为介电常数
<Collapsible title="例">
在线性均匀媒质中，已知电位移矢量$\vec{D}$的$z$分量为$D_z=20nC/m^2$，极化强度$\vec{P}=\vec{e_x}9-\vec{e_y}21+\vec{e_z}15nC/m^2$，求介质中的电场强度和电位移矢量
<Collapsible title="解">
$$\vec { D } &= \varepsilon _ { 0 } \vec { E } + \vec { P } = \frac { \varepsilon _ { 0 } } { \varepsilon _ { r } } \vec { D } + \vec { P }\\
\vec { P } &= ( 1 - \frac { 1 } { \varepsilon _ { r } } ) \vec { D }\\
\varepsilon _ { r } &= 4\\
\vec { D } &= \frac { 4 } { 3 } \vec { P } = 12 \vec { e } _ { x } - 28 \vec { e } _ { y } + 20 \vec { e } _ { z }nC / m ^ { 2 }\\
\vec { E } &= \frac { \vec { D } } { 4 \varepsilon _ { 0 } } = \frac { 1 } { \varepsilon _ { 0 } } ( 3 \vec { e } _ { x } - 7 \vec { e } _ { y } + 5 \vec { e } _ { z } )nC / m ^ { 2 }
$$
</Collapsible>
</Collapsible>

# 介质静电场基本方程
## 介质中的高斯定理
真空中
$$\oint_{S} \varepsilon_{0} \vec{E} \cdot d\vec{S} = q$$
$$\nabla \cdot \varepsilon_{0}\vec{E} = \rho$$
类似地，在介质中
$$\oint_{S} \varepsilon \vec{E} \cdot d\vec{S} = \oint_{S} \vec{D} \cdot d\vec{S} = q$$
$$\nabla \cdot \vec{D} = \rho$$
## 介质中的环路定律
在介质中，静电场仍为保守场
$$\oint_{l} \vec{E} \cdot d\vec{l} = 0$$
$$\nabla \times \vec{E} = 0$$
## 对基本方程的讨论
式子中$q$为自由电荷电量，不包含极化部分
$$
\oint_S \vec{D} \cdot d\vec{S} &= q\\
\oint_S (\vec{D}_0 + \vec{P}) \cdot d\vec{S} &= q\\
\oint_S \vec{D}_0 \cdot d\vec{S} + \oint_S \vec{P} \cdot d\vec{S} &= q
$$
由散度定理，极化电荷体密度
$$\oint_{S} \vec{P} \cdot d\vec{S} = \int_{V} \nabla \cdot \vec{P} dV = -q_{p}$$
得$$\oint_S \vec{D}_0 \cdot d\vec{S} = q + q_p$$
即：电介质中，穿过闭合面$S$的电通量由真空中的电通量和极化电荷穿过闭合面$S$的电通量组成
## 边界条件
场在不同介质分界面上的变化规律称为**边界条件**
$$E_{1t} = E_{2t}$$
即电场强度的切向分量在边界面两侧是连续的
<Collapsible title="例">
球形电容器内导体半径为$a$，外球壳半径为$b$。其间充满介电常数为$\varepsilon_1$和$\varepsilon_2$的两种均匀媒质（上半球面为$\varepsilon_2$下半球面为$\varepsilon_1$）设内导体带电荷为$q$，外球壳接地，求球壳间的电场
<Collapsible title="解">
取定$r$，由对称性，上半球面电场为恒定$E_2$，下半球面为恒定$E_1$，又由边界条件可得$E_1=E_2=E$
所以取同心球面为高斯面，由高斯定理
$$\oint_S \vec{D} \cdot d\vec{S} &= \oint_S (\vec{D}_1 + \vec{D}_2) \cdot d\vec{S} \\ 
&= (\vec{D}_1 + \vec{D}_2) \cdot (2\pi r^2 \vec{e}_r)\\
&=( \varepsilon _ { 1 } + \varepsilon _ { 2 } ) \vec { E }\cdot ( 2 \pi r ^ { 2 } \vec { e } _ { r } ) = q\\
\vec { E } &= \frac { q } { 2 \pi ( \varepsilon _ { 1 } + \varepsilon _ { 2 } ) r ^ { 2 } } \vec { e } _ { r }$$
</Collapsible>
</Collapsible>
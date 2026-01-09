---
id: circulation-curl
title: 矢量场的环流和旋度
order: 2
---

# 环量
环绕即闭合曲线，所以**环量**为场矢量沿闭合曲线的积分
$$\Gamma = \oint _ { C } { \vec { A } } ( { \vec { r } } ) \cdot d { \vec { r } }$$
## 环量的计算
$$\Gamma = \oint _ { C } ( A _ { x } d x + A _ { y } d y + A _ { z } d z )$$
意义：若矢量场环流不为零，则回路中存在产生矢量场的漩涡源。
## 环量面密度
面$S$的法线方向为$\vec{n}$，**环量面密度**
$$\mathrm { r o t } _ { n } { \vec { A } } = \lim _ { \Delta S \to 0 } { \frac { \oint _ { l } { \vec { A } } \cdot d { \vec { l } } } { \Delta S } }$$
# 旋度
$$\mathrm { r o t } \vec { A } = \vec { n } \lim _ { \Delta S \to 0 } \frac { \oint _ { l } \vec { A } \cdot d \vec { l } } { \Delta S } \bigg| _ { \mathrm { m a x } }$$
# 旋度的计算
$$\mathrm { r o t } \vec { A } = \nabla \times \vec { A } = \left| \begin{array} { c c c } { { \vec { e } _ { x } } } & { { \vec { e } _ { y } } } & { { \vec { e } _ { z } } } \\ { { \frac { \partial } { \partial x } } } & { { \frac { \partial } { \partial y } } } & { { \frac { \partial } { \partial z } } } \\ { { A _ { x } } } & { { A _ { y } } } & { { A _ { z } } } \end{array} \right|$$
# 斯托克斯定理
矢量场的旋度的面积分等于该矢量场在该面的闭合曲线的线积分
$$\int _ { S } ( \nabla \times \vec { A } ) d \vec { S } = \oint _ { C } \vec { A } \cdot d \vec { l }$$
# 旋度的重要性质
任意矢量场旋度的散度等于零
$$\nabla \cdot ( \nabla \cdot \vec { A } ) = 0$$


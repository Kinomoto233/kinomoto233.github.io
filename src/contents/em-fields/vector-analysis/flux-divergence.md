---
id: flux-divergence
title: 矢量场的通量和散度
order: 1
---

# 通量
矢量场$\vec{A}(\vec{r})$“流经”曲面一点的“量”可以通过
$$| \vec { A } ( s ) | | \vec { n } | \cos \theta = \vec { A } ( s ) \cdot \vec { n }$$
表示，若要求流经一个面的量，也就是**通量**就是面积分
$$\phi = \int _ { S } \vec { A } ( \vec { r } ) \cdot d \vec { S }$$

# 散度
通量在闭合曲面某点分散的“度”，即
$$\operatorname { d i v } \vec { A } ( \vec { r } ) = \lim _ { \Delta V \to 0 } \frac { \oint _ { S } \vec { A } ( \vec { r } ) \cdot d \vec { S } } { \Delta V }$$
若$\operatorname { d i v }=0$恒成立则称为无源场反之有源场（此时$\operatorname { d i v }$称为源密度）。

## 散度的计算
$$\operatorname { d i v } \vec { A } ( \vec { r } ) = \frac { \partial A _ { x } } { \partial x } + \frac { \partial A _ { y } } { \partial y } + \frac { \partial A _ { z } } { \partial z }= \nabla \cdot \vec { A } ( \vec { r } )$$
式中
$$\nabla = \left( \vec{e}_x \frac{\partial}{\partial x} + \vec{e}_y \frac{\partial}{\partial y} + \vec{e}_z \frac{\partial}{\partial z} \right)$$
称为哈密顿算符

# 散度定理（矢量场的高斯定理）
矢量场散度的体积分等于矢量场在该体积的边界面$S$的积分
$$\int _ { V } \nabla \cdot \vec { A } ( \vec { r } ) d V = \oint _ { S } \vec { A } ( \vec { r } ) \cdot d \vec{S}$$
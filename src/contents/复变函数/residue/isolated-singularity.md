---
title: 孤立奇点
order: 1
---

# 定义
如果函数$f(z)$在$z_0$不解析，但在$z_0$的某一去心邻域内处处解析，则称$z_0$为$f(z)$的孤立奇点.

<Collapsible title="例1">
$z = 0$是函数$e^{\frac{1}{z}}, \frac{\sin z}{z}$的孤立奇点.
$z = -1$是函数$\frac{1}{z+1}$的孤立奇点.
</Collapsible>

<Collapsible title="例2">
指出函数$f(z) = \frac{z^2}{\sin \frac{1}{z}}$在$z = 0$的奇点特性.
<Collapsible title="解">
函数的奇点为
$$z = 0,\ z = \frac{1}{k\pi}\ (k = \pm 1, \pm 2, \cdots)$$
因为
$$\lim _ { k \rightarrow \infty } \frac { 1 } { k \pi } = 0$$
即在$z=0$的无论多么小的去心邻域内，总有$f(z)$的奇点存在，所以$z=0$不是孤立奇点.
</Collapsible>
</Collapsible>

# 孤立奇点的分类
依据$f(z)$在其孤立奇点$z_0$的去心邻域内的**洛朗级数**的情况分为三类：
1. 可去奇点;
2. 极点;
3. 本性奇点.

## 1. 可去奇点
**定义** 若洛朗级数**不含**$z-z_0$**的负幂项**，那么孤立奇点$z_0$称为$f(z)$的**可去奇点**.
<Collapsible title="例3">
$\frac { \sin z } { z } = 1 - \frac { z ^ { 2 } } { 3 ! } + \frac { z ^ { 4 } } { 5 ! } - \cdots$中不含负幂项，$z=0$是$\frac { \sin z } { z }$的可去奇点.
</Collapsible>

<Collapsible title="例4">
说明$z=0$为$\frac { e ^ { z } - 1 } { z }$的可去奇点.
<Collapsible title="解1">
因为
$$\frac { e ^ { z } - 1 } { z } &= \frac { 1 } { z } \left( 1 + z + \frac { z ^ { 2 } } { 2 ! } + \cdots + \frac { z ^ { n } } { n ! } + \cdots - 1 \right) \\
&= 1 + \frac { z } { 2 ! } + \cdots + \frac { z ^ { n - 1 } } { n ! } + \cdots , \quad 0 < | z | < + \infty$$
所以
$$z=0为\frac { e ^ { z } - 1 } { z }的可去奇点.$$
</Collapsible>
<Collapsible title="解2">
因为
$$\lim _ { z \rightarrow 0 } \frac { e ^ { z } - 1 } { z } =\frac{z}{z}= 1$$
所以
$$z=0为\frac { e ^ { z } - 1 } { z }的可去奇点.$$
</Collapsible>
</Collapsible>

## 2. 极点
**定义** 若洛朗级数只有**有限多个**$z-z_0$的**负幂项**，其中关于$( z - z _ { 0 } ) ^ { - 1 }$的最高幂为$( z - z _ { 0 } ) ^ { - m }$，那么孤立奇点$z_0$称为函数$f(z)$的**m级极点**.
此时函数可表示为
$$f(z) = \frac{g(z)}{(z-z_0)^m}$$
其中$g(z)$在$z_0$处解析且$g(z_0) \neq 0$.
<Collapsible title="例5">
有理分式函数$f ( z ) = \frac { 3 z + 2 } { z ^ { 2 } ( z + 2 ) }$，求其极点.
<Collapsible title="解">
因为
$$f(z)= \frac { \left( \frac { 3 z + 2 } { z ^ { 2 } } \right) } { z + 2 } = \frac { \left( \frac { 3 z + 2 } { z +  2 } \right) } { z^2 }$$
所以
$$z=-2为1级极点, z=0为2级极点.$$
</Collapsible>
</Collapsible>
<Collapsible title="例6">
求$\frac { 1 } { z ^ { 3 } - z ^ { 2 } - z + 1 }$的奇点，如果是极点，指出它的级数.
<Collapsible title="解">
因为
$$\frac{1}{z^3-z^2-z+1}=\frac{1}{{(z-1)}^2(z+1)}$$
所以
$$z=1为2级极点, z=-1为1级极点.$$
</Collapsible>
</Collapsible>

## 3. 本性奇点
**定义** 若洛朗级数中含有**无限多个**$z-z_0$的**负幂项**，那么孤立奇点$z_0$称为$f(z)$的**本性奇点**.
<Collapsible title="例7">
$$e ^ { \frac { 1 } { z } } = 1 + z ^ { - 1 } + \frac { z ^ { - 2 } } { 2 ! } + \cdots + \frac { z ^ { - n } } { n ! } + \cdots , \quad ( 0 < | z | < \infty )$$
所以
$$z=0为本性奇点.$$
</Collapsible>

# 总结
$$
\begin{array}{|c|c|c|}
\hline
孤立奇点&洛朗级数特点&\lim\limits_{z\to z_0}f(z)\\
\hline
可去奇点&无负幂项&存在且为有限值\\
\hline
m级极点&有限多个负幂项，最负幂为-m&\infty\\
\hline
本性奇点&无穷多个负幂项&不存在且不为\infty\\
\hline
\end{array}
$$
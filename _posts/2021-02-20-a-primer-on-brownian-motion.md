---
layout: post
title: A Primer on Brownian Motion
keywords: "brownian motion"
math: true
---

## Introduction
This post is a precursor to an upcoming post on the [Black--Scholes equation](https://en.wikipedia.org/wiki/Black%E2%80%93Scholes_equation) (and introduction to financial mathematics in general) and follows my previous post on random walks. Unfortunately for us, a thorough understanding of stochastic calculus is necessary to fully understand the equation. But before we can even start talking about stochastic calculus we need to review Brownian motion. Now this post is not meant to be a comprehensive bottom-up guide on the subject for that you can go read Durrett's [Probability: Theory and Examples](https://www.amazon.com/Probability-Cambridge-Statistical-Probabilistic-Mathematics/dp/0521765390) or Klebaner's [Introduction to Stochastic Calculus with Applications](https://www.amazon.com/Introduction-Stochastic-Calculus-Applications-2Nd/dp/186094566X/ref=sr_1_2?dchild=1&keywords=klebaner&qid=1612983088&s=books&sr=1-2) which is the book which introduced me to this subject.

### Brownian motion in a nutshell
Brownian motion is named after the Scottish botanist [Robert Brown](https://en.wikipedia.org/wiki/Robert_Brown_(botanist,_born_1773)) who is widely credited with being the first to observe and describe the motion. The story goes that Brown, attentively observing grains of pollen suspended in water [[^1]], observed the jittery motion of tiny particles expelled by the pollen grains. In his words

>The examination of the unimpregnated vegetable Ovulum, an account of which was published early in 1826, led me to attend more minutely than I had before done to the structure of the Pollen...<br/> It was not until late in the autumn of 1826 that I could attend to this subject; and the season was too far advanced to enable me to pursue the investigation. Finding, however, in one of the few plants then examined, the figure of the particles contained in the grains of pollen clearly discernible, and that figure not spherical but oblong, I expected, with some confidence, to meet with plants in other respects more favourable to the inquiry. My inquiry on this point was commenced in June 1827, and the first plant examined proved in some respects remarkably well adapted to the object in view.<br/> This plant was _Clarckia pulchella_, of which the grains of pollen, taken from antheræ full grown, but before bursting, were filled with particles or granules of unusually large size, varying from nearly $$\frac{1}{4000}$$th to about $$\frac{1}{3000}$$th of an inch in length, and of a figure between cylindrical and oblong, perhaps slightly flattened, and having rounded and equal extremities. While examining the form of these particles immersed in Water, I observed many of them very evidently in motion; their motion consisting not only of a change of place in the fluid, manifested by alterations in their relative positions, but also not unfrequently of a change of form in the particle itself; a contraction or curvature taking place repeatedly about the middle of one side, accompanied by a corresponding swelling or convexity on the opposite side of the particle. In a few instances the particle was seen to turn on its longer axis. These motions were such as to satisfy me, after frequently repeated observation, that they arose neither from currents in the fluid, nor from its gradual evaporation, but belonged to the particle itself. <br/><!-- _<div style="text-align: right">A Brief Account of Microscopical Observations…\</div>_ -->

This is what he probably saw. 

Now getting back to the nitty-gritty of the task at hand. 

## Defining a Brownian motion
A Brownian motion requires 


[^1]: But why would he be looking at pollen suspended in water? As I recently found out, a lot of Brown's work was devoted to showing that pollen characteristics can be used to aid in the classification of plants into genera. 

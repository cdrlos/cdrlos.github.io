---
title: Online Map Analyst Assessment
feature_text: |
  ## This should be easy
  'Should.'
---

I applied for a contract job through [Lionbridge](https://en.wikipedia.org/wiki/Lionbridge)---a somewhat reputable company that specializes in localization and software testing. The position is called _online map analyst_ and I will be tasked with "determining the relevance and accuracy of [map-related] information by performing online research." I take this to mean I will be improving some company's [web map services](https://en.wikipedia.org/wiki/Web_Map_Service) by by verifying the veracity of its search results.

Why am I needed for this task? You'd think some smart guy would have figured out a way to extract this information using an ML approach---parsing loads of information from the web. Either the data is too crude for an ML approach or it's computationally expensive (and the best solution is to hire a bunch of lackeys).

I have no insight as to the why this position exists. At any rate, I'll have to take an assessment before I get an offer. The assessment must be completed before the 22nd when offers go out. I'll read through the study guide they provided, take some of their practice assessments and see where it goes. This job could buy me some time to prepare for a proper software engineering job, which I am still struggling to find.

### Introduction

So what exactly does an online map analyst do? Reading through the first chapter of the notes, here's the gist of it:

- I am presented with the result of map search queries.
- I must assess the accuracy of the result.
- I will be using a so-called a **Rating Tool** for this.
- I will scan the web to correct or enrich (?) the content of the result.

So where are these queries coming from exactly? Maybe poorly rated Google Maps/Apple Maps results? I don't know, and when I find out I won't be allowed to say seeing as I must sign a non-disclosure agreement.

They have a rating work-flow diagrammed out for me. It goes like this

- Understand user intent.
- Establish relevance.

### Pin Accuracy

For each result returned, you will find a pin on the map. Rate the accuracy of
each pin's placement using thi scale:

- Perfect
- Approximate
- Next Door
- Wrong
- Can't Verify

When there is a difference between where the pin drops in satellite imagery and
the vector map, always use the map layer in the TryRating tool that is more
generous towards the pin. For example, if the pin drops on the rooftop in
satellite imagery, but in the parking lot in vector map, rate using satellite
imagery because a pin on a rooftop will get a better rating than a pin placed in
a parking lot. Even if there is a major shift between satellite imagery and the
vector map in a larger area, such as complete city or region, rate according to
the most generous layer. 

Note: When deciding between the generosity of the vector and satellite views for
pin rating, use only the vector/atellite views porvided in the tryrating tool.
in cases wher ethe vector map is more generous towards towards the pin but does
not show any building contours, use satellite imagery as a reference to locate
buildings on the vector map to allow for rooftop ratings. Ifg satellite imagery
is unavailable, use your best judgment to determine the correct location of the
pin.

In the screenshot below, the vector map does not provide any contours, so it is
difficult to determine where each building is. Satellite imagery should be used
instead.

### Boundaries of the Feature
To rate a pin for a feature, you must first understand where the feature begins
and ends. Some features have rooftops (houses, businesses, malls, and so on) and
sit on a parcel of land that belongs to or is associated with them. Other
features do not have rooftops (mountains, parks, waterfall), but there is still
a place where they begin and where they end.

A boundary is a real or imaginary line that separates one feature, or the parcel
it sits on, from another. The boundaries of a feature always include half of the
road when a road is present (see the Half 'n Half rule below).

Boundaries can include:
- Fences
- Walls
- Garden plants and bushes
- Bodies of water (lakes, rivers, oceans)
- Other dividers
- Property boundaries confirmed by official sources

If there is no divider, draw an imaginary 90-degree line to the road or use the
Half 'n Half rule below.


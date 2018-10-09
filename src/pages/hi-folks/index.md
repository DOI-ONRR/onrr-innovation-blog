---
title: Why we're moving to GatsbyJS
authors: 
- Ryan Johnson
- Jeff Keene
excerpt: We're moving from Jekyll to GatsbyJS as the static site generator for our open data site. Here's why.
tags:
- default
- boilerplate
date: "2018-09-24"
draft: yes
---

We've chosen [GatsbyJS](https://www.gatsbyjs.org/) to modernize our open-data site at [revenuedata.doi.gov](https://revenuedata.doi.gov/). We're moving to GatsbyJS for a few reasons:

1. The site needs to access data and content in multiple locations and formats. With Gatsby, we can use [GraphQL](https://graphql.org/) to pull in data from `.csv`, markdown, and other local files in a variety of formats, while also hooking onto APIs to pull in outside data (as we do from [EIA](https://www.eia.gov/)).

2. We can configure Gatsby to [hook onto a content management system (CMS)](https://www.gatsbyjs.com/how-it-works/data-from-anywhere/), serving as a "headless" CMS with a variety of back-end options to manage content. This also makes Gatsby highly portable and flexible, while offering subject matter experts an approachable publishing experience.

3. Gatsby is _fast_. Like [really, really fast](https://www.gatsbyjs.org/blog/2017-09-13-why-is-gatsby-so-fast/).

We're excited about this transition, and we'll share our progress and what we've learned as we go along.

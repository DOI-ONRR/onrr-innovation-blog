---
title: "How we decided to rebuild our open-data homepage"
authors:
- Shannon McHarg
- Ryan Johnson
excerpt: We're rebuilding the Natural Resources Revenue Data homepage. In this first post about the rebuild, we'll share how a revised product vision and user research led us to the redesign, along with our design priorities and prototyping.
tags:
- open data
- natural resources revenue data
- gatsbyjs
- user research
- design
- data visualization
date: "2018-11-20"
---

_This is part one of a two-part series about our homepage redesign._

Digital teams from [18F](https://18f.gsa.gov/) and the [Department of the Interior](https://www.doi.gov/) have been publishing government data about energy and mineral extraction on federal lands and waters since 2014. [Natural Resources Revenue Data](https://revenuedata.doi.gov/) continues to provide that open government data.

Back in 2014, 18F built the site to support the federal government's participation in the [Extractive Industries Transparency Initiative](https://eiti.org/) (EITI). While the U.S. government decided to no longer formally implement the EITI Standard in November 2017, the department remains a strong supporter of the principles of transparency represented by the initiative.

Our small digital team at the [Office of Natural Resources Revenue](https://www.onrr.gov/) continues the work of user-centered and open-data design started by 18F.

## An interactive annual report

Conceived as an interactive version of the EITI annual report, the scope of the original site included data and information about the overall role of extractive industries in the U.S., not just on federal lands and waters. The site's homepage design treated data and contextual narrative as hierarchical equals in the layout, with a prominent map displaying state data preceded and followed by narrative context.

![USEITI homepage in 2015, showing an introductory paragraph, a map of the country showing relative revenue by state, and a card-styled layout with contextual information](/useiti-homepage-2015.jpg)

We knew we'd need to narrow the scope of the site content, as we have limited resources relative to the EITI era. We also wanted to reevaluate user needs, focus on datasets that only our organization could provide, and make sure we could validate the data.

Before working on the homepage, we rewrote our product vision to help guide our work:

> We are informing policy debates and raising public awareness by building the definitive source of timely and useful data about how the government manages federal energy and mineral resources, revenue, and disbursements.

With this vision laying the foundation for our strategy, we set up interviews with active and potential users to test our assumptions and discover their needs.

## The role of the homepage

[Some have argued that homepages aren't that important](https://theblog.adobe.com/ux-mythbusting-is-the-homepage-really-the-most-important-part-of-your-website/), or at least not as important as they used to be. The increased use of search and social media to convey users deeper into websites is evident, but most users we talked to still use our homepage as their primary starting point, and it's the most visited page on our site with 22% of site sessions visiting it in fiscal year 2018.

## User research

### First round

In addition to making our homepage more in line with our new strategy, we were getting requests from users who fall into our Domain Learner user type ([read about our user types here](https://github.com/ONRR/doi-extractives-data/blob/research/research/00_UserTypes/00_UserTypes.md)) stating that they wanted more summarized numbers available to quickly access on the homepage, so they wouldn't have to dig through the Explore Data page to find them. Because of this, we started out by testing out designs for this on the existing home page. We [tested out 6 options](https://github.com/ONRR/doi-extractives-data/blob/research/research/20_fledglingfox/Results.md) with users that matched a variety of our user types and landed on a couple to test in the second round.

![user types](https://github.com/ONRR/doi-extractives-data/raw/research/research/00_UserTypes/AllUsers.PNG)

### Second round

In the [second round of testing](https://github.com/ONRR/doi-extractives-data/blob/research/research/21_obliviousorangutan/Results.md), we wanted to include new users to make sure what we were adding to the home page didn't scare them away because it assumed that you know what the data is about and because we hadn't done extensive testing on the existing homepage with new users. We also tested with more domain learners to make sure we were meeting their needs. We learned that we needed to better explain on the process on the home page and explore data page and landed on the best approach for key facts.

### Third round

We then [tested out 3 concepts](https://github.com/ONRR/doi-extractives-data/blob/research/research/22_QuietQuail/Results.md) with new users for new content on the home page that explains the process and how the different pieces of data work together.  We landed on one concept that worked best and also learned that general public users are most likely to use the site to explore data related to their geographic area, so the map needs to come before the key facts on the home page.

These 3 studies led us to the design we ended up with that better explains the process and brings boiled up facts to domain learners.  We will also be making changes to summarize data on the Explore Data page and split up that page to make it easier for both audiences to understand the structure of the site and how the data works based on the findings from these studies.

<!-- Shannon, do you want to write our your process and outcomes here?-->

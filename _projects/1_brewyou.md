---
layout: page
title: Brewery Finder
description: Find better breweries through webscraping and NLP.
img: assets/img/brewyou1.jpg
importance: 1
category: work
---

#### The Problem

Imagine you're a brewery-goer visiting a new area. To find a place to try you might start with a tool like Google Maps, which is great for finding and visualizing all nearby breweries. Now imagine you're looking for a place that has outdoor seating, serves food, and is dog friendly. With Google Maps you'd next have to click through each individual brewery listing, look through the pictures, and look through the reviews to gain a sense of what offerings are available at each place.

#### One Centralized App

To streamline this process, I created the app [brewyou](https://brewyou.streamlit.app/). In this one central interface, users can enter an address, visualize all nearby breweries, and filter out the options based on what offerings they’re looking for.

Under the hood, [brewyou](https://brewyou.streamlit.app/) uses webscraped brewery reviews from Tripadvisor and a Natural Languaging Processing (NLP) model to identify the offerings at each brewery. The scraped dataset currently contains 16,700+ reviews for 660+ breweries across 7 states. A NLP model then uses a pattern-matching, rule-based approach to identify words and phrases that indicate an offering is present.

All code for this can be found on [github](https://github.com/data-sandbox/nlp-brewer-finder).
---
layout: post
title: Paintball Website
thumbnail-path: "img/paintball-website.png"
short-description: Paintball Club is an membership website for a paintball club with membership needs and even a Map to find local fields to each member's location.
date: 11/10/2012
hide: true
---

{:.center}
[![Demo]({{ site.baseurl }}/img/paintball-website.png)](https://paintball-website.herokuapp.com)

## Summary

The thought behind this project was to create a place for an organization to have a central hub for activities. It allows for users to log in, change their password, see a list of members, edit members, sort and search for members, and even find local paintball facilities depending on member’s location.

## Explanation

All kinds of organizations have a need to have a central place for their membership activities. So I sought out to provide this solution while having a real world chance to practice my PHP knowledge.

## Problem

This application allowed me to use PHP to implement a variety of database interactivity. I created a user login feature, a feature for password changes, a way to view, edit and delete the members as well as sort and search for members. In addition, I was also able to implement the ability to find a facility near any member.

Each of these features required my ability to interact with the database, display database information, and integrate API features.

## Solution

Most of this application relied on saving data into a database and retrieving that data. This was all done with PHP and no additional libraries were used. Development was conducted on a local environment and once complete, a demo was ported over to Heroku and changes were made to accommodate Heroku’s functionality requirements for hosting PHP based applications. In addition, Google Maps API was used to create a mapping interface to show each member where nearby paintball facilities were located. This functionality included querying the database and using that information to plot makers on a Google Map interface.

## Results

This application was designed very early in my development career, and yet, the design is sufficient and the functionality is great. It meets the requirements I set out to achieve and it provides a great platform for future improvements, should a client ever need a similar solution.

## Conclusion

Even with this application having been created several years ago, it provided a great opportunity to use PHP to develop a database driven web application.

Click on the picture above to visit the application or visit [here](https://github.com/CaseyBennington/Paintball-Website) for the code.

---
layout: post
title: Paintball Website
thumbnail-path: "img/paintball-website.png"
short-description: Paintball Club is an membership website for a paintball club with membership needs and even a Map to find local fields to each member's location.

---

{:.center}
![]({{ site.baseurl }}/img/paintball-website.png)

## Summary

This project was created with the desire to have a place for an organization to have a central hub for activities. It allows for users to log in, change their password, see a list of members, edit members, sort and search for members, and even to find local paintball facilities in relation to each member.

## Explanation

All kinds of organizations have a need to have a central place for their membership activities. So I sought out to provide this solution while having a real world chance to practice my PHP knowledge.

## Problem

This application allowed me to use PHP to implement a variety of database interactivity. I created a user login feature, a feature for password changes, a way to view all the members, edit and delete the members as well as to sort and search for members. In addition to being able to find a facility near any member.
Each of these features required different ways of interacting with the database, displaying database information as well as API integrations.

## Solution

Most of this application relied to saving data into a database and retrieving that data. This was all done with PHP and no additional libraries were used. Development was conducted on a local environment and once complete, a demo was ported over to Heroku and changes were made to accommodate Heroku's functionality requirements to host PHP based applications. In addition, Google Maps API was used to great a mapping interface to show each member where nearby paintball facilities were located. This functionality included querying the database and using that information to plot makers on a Google Map interface.

## Results

This application was designed very early in my development career, and yet design still looks pretty good and the functionality is great. It meets the requirements I set out and gives a great platform for future improvements should a client ever need a similar solution.

## Conclusion

Even with this application having been created many years ago, it was a great way to use PHP to develop a database driven web application.

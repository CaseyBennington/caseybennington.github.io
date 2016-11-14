---
layout: post
title: Shmarks
thumbnail-path: "img/shmarks.png"
short-description: Shmarks is a social bookmarking application that allows users to email, manage and share bookmarked URLs.
date: 13/06/2016
hide: false
---

{:.center}
[![Demo]({{ site.baseurl }}/img/shmarks.png)](https://github.com/CaseyBennington/Shmarks)

## Summary

Shmarks is a social bookmarking application that allows users to email, manage, and share bookmarked URLs. I took this project on to better my understanding in the world of Ruby and Rails.

## Explanation

This project allowed for additional experimentation, and much more work with gems and their requisite API’s, than did my other Ruby projects. This led to more of a challenge and the reward felt great.

The project was designed to be a bookmark management application. Users could save bookmarks under their accounts and could categorize them under different Topics. They could manage their bookmarks via the application itself or through emailing the links to a specific email address that would add it to their account or create an account if that user had not already done so.

## Problem

It addition to getting the basic functionality of the project up and running, and building on my previous project experiences, I took a significantly greater focus on learning how to implement a testing environment.
Additionally, I found that setting up a free service and the associated incoming mail controller to handle incoming emails were quite challenging.

## Solution

To start off, I had to build the necessary models for the bookmarks, topics, and users, and their associated controllers and views. I used the Devise and Pundit gems to handle my authentication and authorization respectively. For the users’ account page, I decided to throw in the Gravatar image to give a little bit of personality to the users’ account pages. In order to get the email functionality implemented, I chose to use the simple add-on for Heroku called, SendGrid. This free little add-on allowed me to have my application send emails at no cost. Great!

My original free resource for outgoing mail, SendGrid, did not offer the functionality that I needed for allowing users to send email to the application. After further research, I discovered Mailgun. Mailgun, however, was very limited in how I was allowed to use their service, given, that I was not hosting my application on its own domain, but instead, I was hosting it on Herkou. Unfortunately, this was a limitation that could not be overcome and I settled for the limited functionality.

EDIT: I have been notified that even my limited functionality solution for incoming mail will be coming to an end. Mailgun has informed me that they will be requiring all accounts to register their domains and since I am just using a free server with Heroku to host this application, I do not have a domain to register and thus the incoming mail functionality will be ending as of December 1, 2016.

I wanted to create a good experience for my users in navigating between topics and bookmarks so I used a gem to assist in this, Friendly_id. Friendly_id was used to alter my original IDs that were used in the URLs for each bookmark so that they were more human readable.

As for my testing environment, I used RSpec and my testing framework instead of Rails’ built-in framework. Additionally, I used FactoryGirl gem to create testing factories for my tests and the faker gem to populate those factories with random data. I used Capybara to implement integration testing that walked through my application as if it was a real user. In implementing Capybara, I ran across some newer issues with having its JavaScript driver correctly installed. It is more complicated than I have room here to go through, however, it seems there are a variety of bugs for each of the JavaScript drivers you might chose. It also depends on which OS and which OS version you are using. Each variant has a different solution in order to get your chosen JavaScript driver, i.e. Chrome, Selenium, webdriver, to install. Once installed, I was able to setup my tests for my models, controllers, and integrations implemented with the help of the Launchy gem which gave me a screenshot of what is happening at the moment of failure for each test. Launchy is a wonderful gem.

## Results

I would say that Shmarks was a success. From a functionality perspective, the code works and is as efficient as I was able to create at the time; the tests could be improved and I will get better with each new application I create.

The application gave me a great deal of things to learn about and work on, and that felt really good. The gems I used seemed to work great together, especially using Pundit and Devise together. I can definitely see why so many devs use them to obfuscate the authorization and authentication functionality, especially after having implemented those by hand in a prior project.

## Conclusion

As this project was my second coding creation I am again very proud of it. This project in particular turned out to be very instructive, more of a challenge and even more rewarding as this showed me that I can work with Ruby, Ruby on Rails, HTML, CSS, utilize new gem’s and their API’s, mailers and even learn to work with testing while creating a fully functioning web application.

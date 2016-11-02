---
layout: post
title: Wiki Here, Wiki Now
thumbnail-path: "img/wikiherewikinow.png"
short-description: Wiki Here, Wiki Now is an application that allows users to create wikis and collaborate on other wikis.
date: 20/05/2016
hide: false
---

{:.center}
[![Demo]({{ site.baseurl }}/img/wikiherewikinow.png)](https://blooming-plains-48367.herokuapp.com/)

## Summary

This project was my first Ruby and Rails application built from scratch. This application that allows users to create wikis and collaborate on other wikis. Users can pay to upgrade their membership, allowing them to view and create private wikis.

## Explanation

In constructing this application, I learned substantially more about ActiveRecord, model relationships, controller actions, and views, you name it. The project site itself is fairly simple and focused on the site’s functionality, but my personal highlights include working with a joins table, policy with pundit, and diving deep into the ActiveRecord Relationships that Rails can obfuscate on basic projects.

*   There are three types of users: Standard, Premium and Admin.
*   Users can create a Standard account in order to create, edit, and collaborate on public wikis using Markdown syntax; anyone can view public wikis.
*   Users can pay to upgrade their account to Premium in order to view and create private wikis.
*   Premium users can allow others to view and collaborate on the private wikis they create.
*   Premium users can downgrade their account back to Standard.
*   When a user downgrades his or her account, his or her private wikis will automatically become public.

NOTE: Upgrading to Premium is done with Stripe. For purposes of this site, it is deliberately set to test mode. The upgrade from Standard to Premium itself occurs when the user’s payment is processed.

## Problem

The biggest objective for this project was to spend time getting to know Rails and understanding how the MVC architecture fits together, along with all the other parts of using Rails in the “Rails Way”, which is all about convention over configuration.
For an application like this, that utilizes users and requires authentication and authorization, solutions had to be found to handle those aspects. Additionally, there was the _‘small’_ aspect of payment processing that had to implemented.
There were also various smaller elements that needed to be addressed in order to bring together my vision of this application.

## Solution

To start off, I had to build the necessary models for the wikis and users and their associated controllers and views. I used the Devise and Pundit gems to handle my authentication and authorization respectively. For the users’ account page, I decided to throw in the Gravatar image to give a little bit of personality to the users’ account pages. In order to get the email functionality implemented, I chose to use the simple add-on from Heroku called, SendGrid. This simple add-on allowed me to have my application send emails at no cost. Great!

To tackle payment processing, I chose the very popular service, Stripe. After installing their gem and linking up this application into my Stripe account, I utilized Stripe’s outstanding documentation to setup the necessary payment details and even went so far as to implement a subscription based payment system for my Premium customers. Obviously, as this application was intended for my own educational purposes, I have not converted into live payment processing and the application is still setup to handle test payments.

Halfway through this project I came up with the great idea to upgrade my Rails installation from Rails 4 to Rails 5. This was probably entirely unnecessary; however, it gave me great experience in completing an upgrade of that scale to an application that was not yet too large to be overwhelming by myself. Even though Rails 5 was quite new at the time, the upgrade synergized nearly perfectly with my application.

I wanted to create a good experience for my users in setting up the creation and editing of wikis so I used a combination of three gems to assist in this: Friendly_id, Redcarpet, and EpicEditor. Friendly_id was used to alter my original IDs that were used in the URLs for each wiki so that they were more “human readable”. Redcarpet was used to process the Markdown that users would type into my wiki form and EpicEditor was a small library that created a preview window for Markdown code so the user could type Markdown in one window and then be able to preview the live result.

Lastly, I had heard about another way to structure the code for my views instead of using ERB. I’m referring to HAML, of course! However, as widely used as HAML appears to be, I just couldn’t get into it. I tried it out by converting a few of my views over to HAML but I just didn’t care for the space based code. I completely realize how clean it appears but relying on whitespace for my code to function correctly doesn’t suit my coding style.

## Results

The application gave me tons of things to learn about and work on and that felt really good immersing myself into. The gems I used seemed to work great together, especially using Pundit and Devise together. I can definitely see why so many devs use them to obfuscate the authorization and authentication functionality, especially after having implemented those by hand in a prior project.

## Conclusion

I learned a lot and built a great application. What more could you ask for? This was one of my favorite projects to date.

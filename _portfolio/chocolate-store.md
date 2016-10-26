---
layout: post
title: Chocolate Store
thumbnail-path: "img/chocolate-store.png"
short-description: Casey's Chocolate Store is an example of a basic e-commerce storefront.

---

{:.center}
[![Demo]({{ site.baseurl }}/img/chocolate-store.png)](https://caseys-chocolate-store.herokuapp.com)

## Summary

Casey's Chocolate Store is an example of a basic e-commerce storefront. It is a PHP application with integrated login, admin, shopping cart, and hosted database.
This project was my first foray into making an e-commerce application. I wanted to utilize PHP in order to create a basic user shopping experience that could later be scaled and tailored. This was my first e-commerce application and I definitely learned a great deal from it.

## Explanation

My main goal with this application was to create a very simple shopping experience that included user sessions, registration, ordering, and administration. For the purpose of this project, I was not concerned with the actual processing of payments or any type of order fulfillment; I was only concerned with the actual shopping portion up to ordering.
I was also not terribly focused on design as I wanted to test out my ability to create the appropriate functionality.

## Problem

This application allowed me to use PHP to implement a variety of database interactivity. I created a user login feature, a feature for changing passwords, ordering products, and receiving confirmations of customer purchases. It also has admin functionality that allows a designated user to add, edit, and delete products, as well as manage all orders and all customers.

## Solution

Most of this application relied on saving data into a database and retrieving that data. This was all done with PHP and no additional libraries were used. Development was conducted on a local environment and once complete, a demo was ported over to Heroku and changes were made to accommodate Heroku’s functionality requirements to host PHP based applications.

## Results

This application was designed very early in my development career, and yet the design still looks pretty good and the functionality is great. It meets the requirements I set out to accomplish and provides a great platform for future improvements to be made, should a client ever need a similar solution.

## Conclusion

This application was created years ago and given more time to work on it, I would change a lot about the design elements. However, I think that as a demo of functionality, the design works. When I first created the application, the email responses that a user would get from the application were stylistically correct, but since porting the application to Heroku (and potentially the time passed since creation), it seems the emails being sent to users no longer allows for correct style formatting. This would need to be addressed in future versions of this project.

I no longer maintain this application but it should be noted there are a number of bugs that exist within the codebase; however, they do not interfere with the core functionality.

---
layout: post
title: Chocolate Store
thumbnail-path: "img/Chocolate-store.png"
short-description: Casey's Chocolate Store is an example of a basic e-commerce storefront. It is a PHP application with integrated login, admin, shopping cart, and hosted database.

---

{:.center}
![]({{ site.baseurl }}/img/Chocolate-store.png)

## Summary

This project was my first foray into making an ecommerce application. I wanted to utilize PHP in order to create a basic user shopping experience that could later be scaled and tailored. This was my first e-commerce application and I definitely learned a great deal from it.

## Explanation

My main goal with this application was to create a very simple shopping experience that included user sessions, registration, ordering, and administration. I was not concerned with actually processing payments or any type of order fulfillment, only the actual shopping portion up to ordering.
I was also not terribly focused on design as I wanted to test out my ability to create the appropriate functionality.

## Problem

This application allowed me to use PHP to implement a variety of database interactivity. I created a user login feature, a feature for password changes, order products, and receive confirmation of their purchase. It also has admin functionality that allows a designated user to add, edit, and delete products as well has manage the orders and customers.

## Solution

This application allows a user to register with the application, confirm their registration via email, login, change their password, order products, and receive confirmation of their purchase. It also has admin functionality that allows a designated user to add, edit, and delete products as well has manage the orders and customers.
Most of this application relied to saving data into a database and retrieving that data. This was all done with PHP and no additional libraries were used. Development was conducted on a local environment and once complete, a demo was ported over to Heroku and changes were made to accommodate Heroku's functionality requirements to host PHP based applications.

## Results

This application was designed very early in my development career, and yet design still looks pretty good and the functionality is great. It meets the requirements I set out and gives a great platform for future improvements should a client ever need a similar solution.

## Conclusion

This application was created my years ago and given more time to work on it, I would change a lot about the design elements, however, I think that as a demo of functionality, the design works. When I first created the application, the email responses a user would get from the application were stylistically correct but since porting the application to Heroku and potentially the time since creation, it seems the email clients no longer allow style formatting for these emails. This would need to be addressed in future versions of this project.

I no longer maintain this application but it should be noted there are a number of bugs that exist within the codebase, however, they do not interfere with the core functionality.

---
layout: post
title: CB Pong
thumbnail-path: "img/cb-pong.png"
short-description: CB Pong is a replica of the first computer game, Pong.
date: 07/09/2016
hide: false
---

{:.center}
[![Demo]({{ site.baseurl }}/img/cb-pong.png)](https://caseybennington.github.io/cb-pong)

## Summary

This project was my first web-based game. The goal was to make a replica of the classic computer game, *Pong*.

## Explanation

I decided to use the canvas element to house my game and I went so far as to include all the menus inside the canvas as well.
I did not set out to use only pure vanilla js but as I was going along, it occurred to me that that was exactly what was happening. From that point I made it a conscious decision to keep this project as vanilla as possible and to exclude any third party libraries.

## Problem

As one might imagine, the difficulty of creating a game is to decide how the world should exist and how its participants should interact with each other. For this game, the world consisted of:

1. ‘the world’ (the 4 walls)
2. the ball (my ball was square in shape as that was the shape for the ball in the original game)
3. the two paddles.

The computer AI was another problem that needed to be solved for this application. The next issue that arose, and most difficult problem for this particular game, was collision detection.
Finally, I had to create a menu system within the canvas element and identify the _“click-boxes”_ so that users could navigate the menu system.

## Solution

To solve these problems and complete this application, I focused on staying within the canvas element for everything, including the menus. This meant creating those _“click-boxes”_ I mentioned above, using the width and height of the text within each box and tying that to an event.

Collision detection can be accomplished using simple [AABB methodology](http://stackoverflow.com/questions/22512319/what-is-aabb-collision-detection), which ultimately was the direction I went, given that my objects were all rectangular boxes or you could take a more complex approach and use [SAT, or Separating Axis Theorem](http://www.sevenson.com.au/actionscript/sat/), for example.

Additionally, to structure the objects in my code, I used JavaScript's prototype behavior. This allowed for the extensive use of inheritance through my program. To make this more inline with today's coding standards, I decided to refactor my original code into ES6 and utilize the new Classes construct. I must admit that this change gave me the impression that the code was so much cleaner, almost as if we were always supposed to have Classes in JavaScript.

## Results

Overall, this implementation works well and creates a challenging, and entertaining game, much like the original. The three computer AI speeds offer differing levels of difficult for the user. Users with preferences with regards to input have the option of mouse or keyboard usage.

## Conclusion

I chose to go with AABB because my objects were boxes; however, this is a simplistic approach, that while it works for my application, given more time I would like to improve upon it. The most obvious way to improve would be to implement predictive detection. This is because if the ball was traveling at a speed greater than the width of the object it collides with, (i.e. a paddle), than the ball would clip right through the object and collision would never be detected. Thus, in those instances it is important to predict where the ball will be so it can properly be reflected. For this project, the ball’s max speed was set to the width of the paddle so this problem could never occur, however, it would still be a more robust program with this detection system implemented.

In addition, I included a primitive implementation of ‘spin’ when the ball collides with the outer edges of the paddle. This allows the user to add an element of speed to the return hit in order to score against the computer player. While this implementation allows the user to score and has a fair amount of differing impact points, there is still more I could do in this area to improve the feeling of realism the user is looking for when the ball makes a collision.

Click on the picture above to visit the application or visit [here](https://github.com/CaseyBennington/cb-pong) for the code.

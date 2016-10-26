---
layout: post
title: Scavenger Hunter
thumbnail-path: "img/scavenger-mapper.png"
short-description: Scavenger Hunter is a web application you can use to win scavenger hunts.

---

{:.center}
[![Demo]({{ site.baseurl }}/img/scavenger-mapper.png)](https:/caseybennington.github.io/Scavenger-Mapper)

## Summary

This is an application for use during scavenger hunts. It is a Google Maps based API based application.

This app will allow you to enter your hints/clues, street addresses, or coordinate locations into the input box and have them placed directly on the map for easy tracking. ~~In the future~~, ~~you will be~~ are **now** even be able to track the distances between the locations and calculate the quickest race route.

To begin, simply start entering your locations in the Hints List input box. DO NOT use the ‘&’ symbol for cross streets, use **_‘and’_** instead. And most importantly, the more precise you are with your address, the more accurate the marker will be.

Good Luck!

## Explanation

This application came about from my interest, and prior participation, in scavenger hunts- like Challenge Nation and the Urban Dare that have become all the rage in recent years. I first began competing in these “races” in DC and have continued competing in them since living in San Diego. They are a great way to be competitive, problem solve, exercise, and learn about your city. The structure of the “races” are very similar. Teams are made up of at least two people and the teams start at a previously determined, central location together. At the designated start time, the organizers then hand out (or release online) the ‘clue sheet’. This sheet has about 12 riddles that each team must solve. The answers then lead you to a location where you must either take a photo of your team doing the action referenced in the riddle/hint or participate in the gimmick that has been setup at that location. The first team to return to the designated starting location after having gotten the required proof at each clue answer location wins. Each different race will have slight variations on these rules but by-and-large they remain very similar.

On a side note, and as a slight brag, my team’s best finish was in a San Diego 2-person per team race in which we finished 2nd and the 1st place team actually wound up winning the national competition.

## Problem

Prior to identifying this opportunity to build this application, I would solve the clues and plot their locations by hand on a regular paper map, that had to be folded 10 times to fit in a backpack…you know the ones I’m talking about. I would then guesstimate the fastest route and take off running using my phone map to determine my location. It occurred to me, “why not have the locations right there in front of me on my phone… I’m already looking at it to solve clues?” So I set out to move my process from the paper map to an electronic map.

## Solution

My first thought was to use the Google Map API, as Google Maps was in fact the application I was using on my phone. With the vast amount of documentation provided by Google for their APIs, this API was a good choice. I utilized that documentation and some outside examples from wonderful folks over at StackOverflow.
I also included functionality to determine the distance between each point and to sum that distance. This would allow the racers to see how far they had to go. I then realized that we often have to make changes to our first plan of attack, mainly the order in which to tackle the locations. I made it so the locations in the list could be swapped and the distances would automatically update, allowing the racers to more efficiently plot the best route.
In addition to learning how to integrate this API into my application, I also had to contend with usability. Admittedly, I am still working on fine tuning this portion. This point mainly relates to the fact that this application will be used on mobile devices almost exclusively and therefore I needed to take into consideration how the user would interact with the application and also, how they would be able to see the map itself.

## Results and Conclusion

In the end I had to compromise on the usability and readability of the map. I made the map as big as I could while keeping it readable but also keeping it small enough to interact with the other parts of the application without having the user clicking on the wrong thing.

The application works great. It eliminates the need for the racers to have to bring a paper map and worrying about the difficulty of having to fold and manipulate the map as you are running from one location to the next. It also eliminates the need to worry about making a mistake when writing a location on the map and not being able to erase that mark and getting confused with it miles down the race. And finally, it allows the team to plot the distance between the locations and identify the shortest route, hopefully ending up as the champs!

---
layout: post
title: First Alexa Skill!
crosspost_to_medium: true
---
With the quickly emerging interest in voice enabled technologies, I decided for my 3rd project of the back-end portion of the Full Stack course would be the Alexa project. This looks to be a very interesting project in that it's completely different from the rest of the projects and from any project I've yet encountered. Voice technologies are not so much new to me, but yet, they are. Talking to Google or Siri, might be my only interactions with voice so far in my life, unless you also count the constant screaming "Xbox on!" at my TV/Xbox setup...

This project entails making two small apps, or "Skills" as Amazon calls them, based on provided samples from the Alexa team. Followed by 1 custom Skill.

The first step was to learn about the submission process and how Amazon has setup their hosting and accounts for their developers to leverage. This process was not altogether difficult but there are a great number of moving parts. You need an Amazon developer account which is where your submissions go and then you must also use some form of hosting for your code, which they recommend you use their lambda service from AWS.

I took their sample of 'Reindeer Games' and created a 'World War Two Trivia' game. This was a simple swap out of code and the main purpose was really to go through the motions so you understood how to create a Skill, some of the code the runs the skill, and what Amazon requires to have the Skill "Certified" and live.

The steps to launch a voice application are a bit more intense than traditional apps. As one can imagine, you must define how the user is going to interact with your app, i.e. what are they going to say to it to make it run.  Alexa separates this logic from your core code as everyone will need to have functionality it is a good idea to not have to have that in each developer's code but instead have it hosted by Alexa and have the developer simply define the "utterances". This is the purpose of utilizing the Developer Console and the many many steps to certification.

Amazon's feedback system inside the Developer portal was good in that I got a feel for what should go into each of the inputs, however, I did struggle with exactly what to put. For instance, the example phrases must match exactly to the sample utterances. During my submission, my certifier noted where I messed up and recommended fixes; this particular service was excellent and I do hope it continues for custom Skills. The downside to that type of feedback is that it takes at least 24 hours to have a reviewer check your Skill before certification. That reminds me of Apple's App Store in contrast to Google's Play Store. I found this unfortunate and probably my biggest complaint thus far; I definitely want faster feedback.

Either way, I finished that Skill, went through one round of submission feedback, and now my first Skill is live on Alexa.

Check it out, 'World War Two Trivia' by Mustang Designs.

Stay tuned...

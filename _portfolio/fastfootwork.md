---
layout: post
title: Fast Foot Work
thumbnail-path: "img/fastfootwork.png"
short-description: Fast Foot Work is an Amazon Alexa Skill for improving your soccer foot Skills.
date: 27/06/2016
hide: true
---

{:.center}
[![Demo]({{ site.baseurl }}/img/fastfootwork.png)](https://www.amazon.com/dp/B01N64LK3O/ref=syps?s=digital-skills&ie=UTF8&qid=1479774740&sr=1-1&keywords=fast+foot+work)

## Summary

Fast Foot Work is an Amazon Alexa Skill for improving your soccer foot skills. I created this Skill to practice using voice based technology with Alexa, utilizing Node.js.

## Explanation

When coming up with the idea for this Skill, I looked at myself and how I would like use Alexa. One of those ways was to have Alexa guide me through a daily soccer workout so that I wouldn’t have to stop and look up the next move in the series. She would be able to prompt me as I went through the workout. Eventually, I would not need her anymore as I would memorize the series, but until then she would there as a helpful reminder.

I chose to use Node.js as my framework for Alexa, instead of the other choices Amazon recommends, like Java, because it kept me on the same language that I have been using lately.

## Problem

Developing for voice based interactivity is fundamentally different than visual based interactivity. You must always be aware of how the user is using the Skill in order to create the best experience for them. Also, I found that using Amazon’s pre-described code takes a considerable amount of learning to become proficient in.

## Solution

I started off with Amazon’s template for one of their basic Skills, WiseGuy. This gave me the basic structure of the request and response cycle that Alexa uses and also helped me avoid spending time on the items that all Alexa Skills have in common.
My Skill needed to be able to give overall instructions to a user, to begin the series of moves and to advance from one move to the next for the user. It also allowed the user to jump straight to a particular move if they wished. This required that I keep track of the users’ session data.
Each of these interactions was coded into different “intents”, which is Alexa’s way of coding for particular requests from a user. I also included as many “utterances” into my Skill as I could think of, so that a user would have numerous different phrases they could say to activate any intent they wanted. For all these example, see my github codebase linked below.

Amazon creates a wonderful system to include all these items and have them tied together for developers making a comfortable and integrated developer environment. For the base code that belongs to my Skill, I simply created a Lambda Function on AWS and hosted my code there for free; this would work for anyone, unless of course, the Skill is so “baller” that it’s usage exceeds a very generous limit). This AWS Lambda Function is Amazon’s preferred way for developers to integrate their code with their Alexa Skill. Among many other reasons, it is largely because AWS has already integrated the necessary security to avoid having to host my code myself on an outside service and having to configure my own security.
After creating the Lambda Function, I had to go into my Amazon Developer account and configure the Skill and configure the Skill with the utterances, intents, slots, Lambda reference, and various other configurations. When these are properly tied together I was able to begin testing the Skill using a testing environment in my Lambda console and an Alexa testing section. These were great for identifying bugs in my interactivity.

After I was satisfied with my Skill, I had to submit it to Amazon for review and certification. This is actually the worst part of the whole process as well as my least favorite part. This was my 5th Skill submitted to Amazon, so I was already familiar with the process, but it was still difficult to wait through the lengthy review process. This particular submission came back with no issues and was certified. However, this took 6 full days to occur and in the past I have gotten back failures and had to resubmit, which required further unfortunate lengthy waiting time. This back and forth can be incredibly large time sink. The main positive that Amazon has thrown into this submission process is that their team is amazing at detailing why you failed certification and how you should fix your code. This feedback is personalized and not a cookie-cutter response. With that said, I did not receive feedback for this particular skill as it passed on the first submission, but for past Skills the feedback was immensely helpful.

## Results

After receiving my certification, my Skill is now live and available for any Alexa user to ‘enable’ and enjoy. As I created this Skill mainly for myself, I have used it a couple times now and while it works well, there is one main usability issue I have yet to resolve.
Amazon created its devices that use Alexa, like my Echo, to listen for an activation word, ‘Alexa’ in my case, to turn on and begin listening to the user. When this occurs, the device is not interpreting your voice and performing actions on it. Instead, this activation simply signals the device to begin streaming your voice input to the cloud. It is there that all operations are performed. As such, Alexa will not remain active indefinitely; herein lies my problem. The point of my Skill is that a user will be performing these soccer moves after Alexa informs them how. In between each Skill could be about 1-3 minutes of the user performing the move and not saying anything. Alexa will turn herself off in that timeframe and thus the session is lost and the user would have to start it back up again. I would prefer Alexa to remain on that session even with long periods of silence, though I have yet to identify a way to accomplish this within the Alexa code base. I hope to be able to solve this in the future to improve the user experience with the Fast Foot Work Skill.

UPDATE: I have spoken with the Alexa Developers and they have informed me that there is now functionality to continue a session through the default time that Alexa waits for a request. The only solution that was suggested is to use a series of reprompts to continue the conversation. While this might be a passable solution, I foresee this as annoying to the user and not a good experience. I will need some time to debate this implementation.

## Conclusion

This project was very interesting to work on, as it was very different than any other project I have yet completed. As it was voice based, it gave me an entirely different perspective to develop for and I can easily see how this could become a much bigger segment of the market as time goes on.

Click on the picture above to visit the Skill or visit [here](https://github.com/CaseyBennington/fast-foot-work) for the code.

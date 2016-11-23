---
layout: post
title: Heroku Email Issues
crosspost_to_medium: true
---
Soooooo… I’ve recently been emailed by the team at Mailgun, and it appears that their service will be altered as of December 1.

They have informed me, and all their users, that they will now be requiring domain verification for all applications. This may not sound like much, but for a free service it effectively removes them from my consideration.

The reasons behind this are that I, and many others, use Mailgun to both send and receive emails for our free and simple applications hosted on Heroku. Because these applications are hosted on Heroku, they are not on their own domain and therefore cannot be verified for Mailgun’s purposes. If we had chosen to use our own domains for these applications than we could continue utilizing Mailgun.

I mainly have chosen to use Mailgun for its ability to receive emails on behalf of my application. It is difficult to find a free service to do this. This policy change has effectively ruined half of the functionality of my Shmarks application and will remain so unless I can find another free service provider.

Well this keeps things interesting…

Stay tuned…

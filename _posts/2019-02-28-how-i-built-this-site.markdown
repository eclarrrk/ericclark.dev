---
layout: post
title:  "How I built this site"
date:   2019-02-28 08:46:24 -0500
categories: css, html
permalink: /writing/:title/
---
## What i wanted from a website
- Ease of writing
- Simple setup
- Static, ideally
- Editable from most places, in case inspiration strikes

### Challenges
I build wordpress sites for a living, so I wanted to use wordpress to try new things, but it's a bit powerful for what I plan on using it for.

Finding hosting I could trust was difficult. I've grown used to having backups through Anchor hosting's service and Kinsta's features, but I couldn't bring myself to pay $30 a month. Building and maintaning  a wordpress site without that would be more work than I cared to get in to.

## Where I ended up
- Jekyll on GitHub bc I can edit wherever I can access github
- version control at the source

### Hosted on netlify
I heard a lot about using Netlify for static sites so I decided to check it out. Turns out it's awesome and esactly what I needed. I was quick to get a barebones Jekyll site onto GitHub just to give Netlify a try. In only a few minutes I had deployed the site and decided to stick with it.

Deploying the site will continue to be easy since it rebuilds the site every time I push changes to the GitHub repository.

Netlify had a few other features that piqued my interest, like handling forms submissions, and using Zapier to have the info send the info in an email.

### Static site with a CMS

I don't recall how I came across Forestry, but it touts itself as a CMS for static sites. Still not sure how I feel about it since I can't quite tell what's happening behind the scenes and that freaks me out a little. Changes saved in Forestry will commit changes to the repository and deploy the site, so I can always roll back if I do something I didn't mean to.

### CSS variables and CSS grid

Giving these things a shot. I usually fall smack at the top of the adopter bell curve when it comes to using new things in production, so I'm going all in on these two for this site. I won't be getting emails or phone call if this thing looks like crap on your grandmas unsupported version of IE.

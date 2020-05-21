+++ 
date = "2020-05-18"
title = "Creating this website"
slug = "creating-this-website"
tags = ["hello"]
description = "This page was made using JAMstack, Hugo, Netlify and GH-Pages."
featured_image = "anzimus-construction"
featured_sponsor = "Anzimus"
featured_sponsor_url = "https://ansimuz.itch.io/patreons-top-down-collection"
categories = []
series = ["Theme", "Hugo"]
personal_notes = [
    "https://www.w3schools.com/css/css_tooltip.asp",
    "https://gist.github.com/maxfenton/edab8e790bc04ea1ee1e",
    "https://codepen.io/ajerez/pen/ZYMWKe"
]
+++

## INTRODUCTION

I want to explain how I got around to making this website and the source of inspiration for making it. Since my [Portfolio v1](# "not added yet") version, I have been looking for alternatives to making a portfolio which could also serve as a blog, and this is the result I've come to.

Thus, I was inspired to proceed with this stack due to similar websites <sup>[(for example)](https://tkainrad.dev/posts/using-hugo-gitlab-pages-and-cloudflare-to-create-and-run-this-website/)</sup> which I was able to channel with keywords like *static page generator*, *markdown*, *personal blog*, some of which also explained how to make a similar stack yourself. So, don't worry, I will not go too much into details so that we can appreciate some key points and keep it short.

## PREPARATION

First off, I wasn't able to envision the whole thing right off the bat. It was a process. I had to take advantage of tools which were readily available to me, specially considering the fact when I started I was looking for work (*{{< spoiler "and still am, lol" >}}*), with my only revenue coming from whatever freelance opportunities I found. Such as:

1. Github Student Developer Pack [[education.github.com](https://education.github.com/pack)]: over 100 mostly free tools available for students, started using this because it was free and duh
    - .tech Domains [[get.tech](http://get.tech/)]: free domain used to host this site

2. Figuring out what static page generator I wanted to use, from my own research I found a few, i.e Gatsby, Jekyll, Ghost/Wordpress to Static Generator like Eleventy, [and plenty more](https://github.com/myles/awesome-static-generators) (heck, if you find one as interesting as Hugo and need a hand I might just be able to help out)
    - I decided to choose Hugo. Well, [gohugo.io](https://gohugo.io/), and I haven't been disappointed. It uses golang, which I already had some experience with and may it surprise you even though it looks like a dynamically typed language, it is not. It is a static page generator with a statically typed language.

3. Well, actually, I had already decided to use Hugo by step two. I kinda decided to use the template first, by figuring out from a list of potential templates which one I liked the most, and [hugo-coder](https://github.com/luizdepra/hugo-coder) definitely won the prize.

Regarding preparation, that's about it. I had no clue what I wanted to include in the website, besides using it as a portfolio and passively, as a blog too, maybe? That has been getting sorted out as I've been developing it, as you might've noticed.

## DEVELOPMENT
So, one of the things which called my attention the most as I analyzed the repository, looked at its code, and generally familiarized myself with it, that most called my attention, was the fact that:
> This theme is ready to import into Stackbit.

It actually wasn't, because there was an [issue](https://github.com/luizdepra/hugo-coder/issues/280) preventing it to work, which I fixed adding a [PR](https://github.com/luizdepra/hugo-coder/pull/283 "oh, the joys of open source"), so that I could use Stackbit. So basically, Stackbit allows all-in-one management of your site, regarding CMS, domain and deployment, for which I chose Netlify, Github Pages and Forestry.

I'll try to enumerate some of the custom things I have done so far:
- [Gitpod.io](https://gitpod.io/) integration to work on content outside of Forestry, with freedom to change the template as I wish.
- Makefile (yes. we are using a makefile to deploy this beautiful web package) configuration to enable staging within gitpod, or, wherever, really.
- Changes to add dark/light mode manual switching in the top menu, with help from another active developer.
- We also worked to enable locale/translations work on pages that were linked to other languages, insted of it being globallized and switching the whole site path at a given visit.

## RESULTS
Well, I can't say I am disappointed with what I have learned and been rewarded with as a result of diving into this whole blog/portfolio making 😁. There's still a couple things I'd like to polish and do, which I will update as I work on them.

TODO's:
- Embelishment of SCSS (yes, the template uses SCSS which hugo compiles to CSS, which in turn is presented to the visitor)
- Maybe add a type of changelog instead of making this post so big. Instead just use adding some images to explain the process with less text
- Different presentations to this article, a TL;DR version or a slideshow explaining how to DYI
- Improve the home page to explain my skills and write a small self bio
- Add affiliate programs to make some revenue while having fun 😉😅
- Make emojis look better and impl. shortcode like https://gohugo.io/functions/emojify/ (maybe even use custom emoji spritesheet of my own?)

If you have any questions, do not hesitate to [leave me a message](https://sgonzalez.tech/contact/), I will be glad to respond or help out within the means available to me.
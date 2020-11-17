---
author: Brandon Stein
featuredImage: ../images/voltorbflip.png
title: Voltorb Flip
slug: voltorbflip
---

## About the Game

Voltorb Flip is a puzzle minigame found in the Game Corners of Pokémon HeartGold
and SoulSilver that can be described as a mix between Picross/Nonogram and Minesweeper.
The goal of the game is to find all of the 2 and 3 tiles without flipping over any
of the Voltorbs (bombs). If you succeed in doing this you move on to the next level,
but if you uncover just one bomb you lose all of your points and risk going down
one or more levels. The numbers at the right and bottom of the game board describe
how many points and bombs are in each row and column, and in order to complete the
levels you need to think about the board in both directions to uncover all of the
available points. Each point you uncover multiplies your points for the level by
that value and higher levels have greater point totals so try your best to get to
the higher levels and stay there!

As a fan of the Pokémon series growing up and an avid puzzler, I would often open up
my copy of the game just to play the Voltorb Flip minigame. I scoured the internet
thinking 'surely somebody made a version of this online' but couldn't find anything.
The only relevant websites I could find were solvers for Voltorb Flip, indicating that
people were probably more frustrated with the game than enthusiastic about it. Even the
domain [voltorbflip.com](http://www.voltorbflip.com/) was being used by a level solver.
Due to this lack of an online replica, I decided to set out and recreate the minigame
as a personal project.

## Building the Game

I originally built this site using plain Javascript, HTML and jQuery. I decided to
base the structure of the codebase very closely off of the original version of
[2048](https://github.com/gabrielecirulli/2048) by Gabriele Cirulli. The code for
2048 was originally written in 2014 before the release of ES6, so as I built my
Voltorb Flip site in early 2019 it was already years out of date. I completed all
of the game's funcitonality excluding the memo pad, and at the time was quite happy
with how it turned out.

About 6 months later, I decided to revisit my recreation of the game and update it
to some a more recent paradigm using Gatsby. I repurposed much of the original code
such as the board generation, but created an entirely new structure using React
components and various npm packages. During this phase of redevelopment I made sure
that the game looked good on all devices and was well-suited for play on mobile
browsers.

## What I Learned

This project was a great way for me to learn HTML, CSS and Javascript, and later on
to reinforce my knowledge of React and modern web development. Having an concrete
idea to work on really aided my workflow and helped me focus on expand on my
programming skills without having to worry so much about design or visuals. In
addition, I was able to create something that I would enjoy playing! If you'd like
to check out the game for yourself, you can do so at [steiner26.github.io/voltorbflip].
Enjoy!

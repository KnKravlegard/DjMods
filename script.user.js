// ==UserScript==
// @name         DjMods
// @description  Krunker.io Mod
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include      https://krunker.io/editor.html
// @include      https://tehchy.github.io/Krunker.io-Editor/editor.html
// @author       DjDankMeister
// @run-at       document-ended
// ==/UserScript==

document.querySelector('body > div.dg.ac > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(17)').remove() //Camera Position
document.querySelector('body > div.dg.ac > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(16)').remove() //Spawnpoint
document.querySelector('body > div.dg.ac > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(15)').remove() //Death Zone
document.querySelector('body > div.dg.ac > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(14)').remove() //Score Zone
document.querySelector('body > div.dg.ac > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(13)').remove() //Billboard
document.querySelector('body > div.dg.ac > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(12)').remove() //Particles
document.querySelector('body > div.dg.ac > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(11)').remove() //Objective
document.querySelector('body > div.dg.ac > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(10)').remove() //Plane
document.querySelector('body > div.dg.ac > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(6)').remove() //Vehicle
document.querySelector('body > div.dg.ac > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(5)').remove() //Tree
document.querySelector('body > div.dg.ac > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(4)').remove() //Barrel
document.querySelector('body > div.dg.ac > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(3)').remove() //Stack
document.querySelector('body > div.dg.ac > div:nth-child(1) > ul > li:nth-child(2) > div > ul > li:nth-child(2)').remove() //Crate

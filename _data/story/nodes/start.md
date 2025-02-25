---
node_id: start
title: Begin Your Journey as a Page
---

The year is 1328. You're a young lad of twelve, and today marks your first day as a page at Castle Hawksworth. You've dreamed of becoming a knight since you were old enough to hold a wooden sword, and now your journey begins.

Master Geoffrey, a stern but fair knight with graying hair at his temples, leads you through the massive stone walls of the castle. The bustle of castle life surrounds you - servants carrying baskets, guards patrolling, and nobles in fine clothing walking the grounds.

"Every knight must first master various skills and understand castle life," Master Geoffrey explains. "Today, you'll begin your training by helping in one area of the castle. This choice will start shaping your path."

He points to three directions:

[choices]
- text: "I'll help in the stables - I've always had a way with horses."
  next: b1
  rewards:
    skills: 
      - "Basic Horse Care"
    character_traits:
      - "Diligent"

- text: "I'll assist in the kitchen - I'm curious about castle provisions."
  next: b2
  rewards:
    skills: 
      - "Basic Food Preparation"
    character_traits:
      - "Observant"

- text: "I'll work with the messengers - I want to learn the castle layout."
  next: b3
  rewards:
    skills: 
      - "Castle Geography"
    character_traits:
      - "Inquisitive"

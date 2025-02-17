---
node_id: C1_help
title: Seeking Help
---

"Better to be careful with a frightened horse," you say thoughtfully. "Could we get someone with more experience to help?"

Thomas's weathered face breaks into an approving smile. "Good head on your shoulders, lad. That's exactly right - a frightened horse can be dangerous, and there's no shame in asking for help when you need it."

He waves over William, an experienced stable hand. "Will here has a way with difficult horses. Watch carefully now - there's much to learn."

William demonstrates the proper approach, explaining each step as he goes. You notice how he positions himself, the timing of his movements, and the way he reads Thunder's body language.

[choices]
- text: "Ask William if you can assist him while he works with Thunder."
  next: D2_assist
  rewards:
    skills: 
      - "Horse Safety"
      - "Teamwork"
    relationships:
      - "William (Stable Hand) - Mentor"
    knowledge:
      - "Safe Horse Handling"

- text: "Focus on observing and learning the proper techniques."
  next: D2_observe
  rewards:
    skills: 
      - "Observation"
    character_traits:
      - "Studious"
    knowledge:
      - "Advanced Horse Handling Theory"
      - "Safety Protocols"
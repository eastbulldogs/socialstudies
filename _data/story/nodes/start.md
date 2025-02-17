---
node_id: Start
title: Arrival at the Castle
---

The towering stone walls of Castle Blackmoor rise before you, their weathered surface telling tales of centuries gone by. As a twelve-year-old boy seeking to begin your journey to knighthood, your heart pounds with excitement and nervousness. The morning mist still clings to the ground, and the bustling sounds of castle life echo from beyond the gates.

Master Geoffrey, the castle steward who brought you here, turns to you with a stern but not unkind expression. "Well, lad, this is where your journey begins. We need all hands today - where would you like to start?"

You can see stable boys leading horses near the western wall, while kitchen smoke rises from the eastern tower. A messenger boy your age is also sorting through scrolls by the gatehouse.

[choices]
- text: "I'd like to help in the stables - I've always loved horses."
  next: B1
  rewards:
    character_traits: 
      - "Eager to Learn"
    relationships:
      - "Thomas (Stable Master) - New Acquaintance"

- text: "The kitchen seems interesting - I could learn about castle life there."
  next: B2
  rewards:
    character_traits:
      - "Curious"
    relationships:
      - "Agnes (Head Cook) - New Acquaintance"

- text: "Maybe I could help the messenger - I'd like to learn my way around."
  next: B3
  rewards:
    character_traits:
      - "Initiative"
    relationships:
      - "William (Royal Messenger) - New Acquaintance"
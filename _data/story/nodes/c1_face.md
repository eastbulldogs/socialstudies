---
node_id: C1_face
title: Facing Thunder
---

Your heart pounds as you approach Thunder's stall, but you keep your movements slow and deliberate. Thomas watches silently from behind as you begin speaking in soft, calming tones.

"Easy there, Thunder. No one's going to hurt you," you murmur. The horse's ears flick toward your voice, though he continues pawing at the ground. You notice his nostrils flaring at an unfamiliar scent coming from outside his stall.

Drawing on what little you know of horses, you maintain a gentle stream of words while carefully extending your hand, palm up, letting him catch your scent.

[choices]
- text: "Try to identify what's spooking Thunder and remove it."
  next: D1_investigate
  rewards:
    skills: 
      - "Advanced Horse Handling"
      - "Problem Solving"
    knowledge:
      - "Horse Behavior"
    relationships:
      - "Thomas (Stable Master) - Impressed"

- text: "Keep focusing on Thunder and try to gain his trust first."
  next: D1_bond
  rewards:
    skills: 
      - "Horse Whispering"
    character_traits:
      - "Patient"
    relationships:
      - "Thunder (Horse) - Beginning Bond"
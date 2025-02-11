---
title: Medieval History Timeline
layout: default
permalink: /pages/timeline/
---

<div id="timeline-root"></div>

<script>
// Timeline data
const timelineEvents = [
  {
    year: 476,
    title: "Fall of Rome",
    description: "The Western Roman Empire falls when Romulus Augustus is deposed by Odoacer.",
    image: "/api/placeholder/300/200",
    funFact: "The last Roman emperor shared his name with Rome's legendary founder!"
  },
  {
    year: 732,
    title: "Battle of Tours",
    description: "Charles Martel and the Franks defeat the Umayyad Caliphate, halting Islamic expansion into Western Europe.",
    image: "/api/placeholder/300/200",
    funFact: "Charles Martel's nickname 'The Hammer' came from his fighting style!"
  },
  {
    year: 1066,
    title: "Norman Conquest",
    description: "William the Conqueror defeats Harold at the Battle of Hastings, becoming King of England.",
    image: "/api/placeholder/300/200",
    funFact: "The battle's events were recorded in the famous Bayeux Tapestry!"
  }
];

// Create and render timeline
document.addEventListener('DOMContentLoaded', function() {
  const timelineContainer = document.getElementById('timeline-root');
  
  // Create timeline container
  const timeline = document.createElement('div');
  timeline.className = 'timeline-container';
  
  // Add timeline HTML
  timeline.innerHTML = `
    <h2 class="timeline-title">Medieval History Timeline</h2>
    <div class="timeline-line">
      ${timelineEvents.map(event => `
        <div class="timeline-event" data-year="${event.year}">
          <div class="timeline-dot"></div>
          <div class="timeline-label">${event.year}</div>
        </div>
      `).join('')}
    </div>
  `;
  
  timelineContainer.appendChild(timeline);
  
  // Add event listeners
  document.querySelectorAll('.timeline-event').forEach(eventEl => {
    eventEl.addEventListener('click', function() {
      const year = this.dataset.year;
      const event = timelineEvents.find(e => e.year == year);
      showEventDetails(event);
    });
  });
});

function showEventDetails(event) {
  // Remove any existing popup
  const existingPopup = document.querySelector('.event-popup');
  if (existingPopup) existingPopup.remove();
  
  // Create popup
  const popup = document.createElement('div');
  popup.className = 'event-popup';
  popup.innerHTML = `
    <div class="popup-content">
      <button class="close-button">&times;</button>
      <h3>${event.title} (${event.year})</h3>
      <img src="${event.image}" alt="${event.title}">
      <p>${event.description}</p>
      <div class="fun-fact">
        <p><strong>Fun Fact:</strong> ${event.funFact}</p>
      </div>
    </div>
  `;
  
  document.body.appendChild(popup);
  
  // Add close button functionality
  popup.querySelector('.close-button').addEventListener('click', () => {
    popup.remove();
  });
}
</script>

<style>
.timeline-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

.timeline-title {
  text-align: center;
  color: #004225;
  margin-bottom: 2rem;
}

.timeline-line {
  position: relative;
  height: 4px;
  background-color: #004225;
  margin: 3rem 0;
}

.timeline-event {
  position: absolute;
  transform: translateX(-50%);
  cursor: pointer;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  background-color: #FFD700;
  border: 2px solid #004225;
  border-radius: 50%;
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  transition: background-color 0.3s;
}

.timeline-event:hover .timeline-dot {
  background-color: #004225;
}

.timeline-label {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  color: #004225;
}

.event-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  position: relative;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.fun-fact {
  background-color: #faf3d4;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}

img {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
}
</style>

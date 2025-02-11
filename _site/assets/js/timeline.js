import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';

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

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Medieval History Timeline</h2>
      
      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute h-1 w-full bg-gray-200 top-8"></div>
        
        {/* Events */}
        <div className="relative flex justify-between items-center mb-16">
          {timelineEvents.map((event, index) => (
            <div key={event.year} className="relative">
              {/* Event dot */}
              <button
                onClick={() => handleEventClick(event)}
                className="w-4 h-4 bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                aria-label={`View details about ${event.title}`}
              />
              
              {/* Year label */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <span className="text-sm font-medium">{event.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event details popup */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{selectedEvent.title} ({selectedEvent.year})</h3>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              
              <p className="mb-4">{selectedEvent.description}</p>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-medium">Fun Fact:</p>
                <p>{selectedEvent.funFact}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Timeline;

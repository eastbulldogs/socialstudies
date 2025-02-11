import React, { useState } from 'react';

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const timelineEvents = [
    {
      year: -200,
      title: "Classical Period End",
      description: "Transition from Classical to Medieval period",
      image: "/api/placeholder/300/200",
      funFact: "This period saw the rise of many new civilizations!"
    },
    {
      year: 476,
      title: "Fall of Rome",
      description: "The Western Roman Empire falls when Romulus Augustus is deposed by Odoacer.",
      image: "/api/placeholder/300/200",
      funFact: "The last Roman emperor shared his name with Rome's legendary founder!"
    },
    {
      year: 1700,
      title: "Early Modern Period",
      description: "Transition to the Early Modern period",
      image: "/api/placeholder/300/200",
      funFact: "This period saw massive changes in science and philosophy!"
    }
  ];

  // Calculate position on timeline (as percentage)
  const getPosition = (year) => {
    const startYear = -200;
    const endYear = 1700;
    const totalYears = endYear - startYear;
    return ((year - startYear) / totalYears) * 100;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl text-center text-green-900 mb-8">Medieval History Timeline</h2>
      
      {/* Timeline */}
      <div className="relative h-1 bg-green-900 my-12">
        {timelineEvents.map((event) => (
          <div
            key={event.year}
            className="absolute transform -translate-x-1/2 cursor-pointer"
            style={{ left: `${getPosition(event.year)}%` }}
            onClick={() => setSelectedEvent(event)}
          >
            <div className="w-4 h-4 bg-yellow-500 border-2 border-green-900 rounded-full hover:bg-green-900 transition-colors duration-300" />
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 font-bold text-green-900">
              {event.year < 0 ? `${Math.abs(event.year)} BC` : `${event.year} AD`}
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-2xl"
            >
              ×
            </button>
            
            <h3 className="text-xl font-bold mb-4">
              {selectedEvent.title} ({selectedEvent.year < 0 ? `${Math.abs(selectedEvent.year)} BC` : `${selectedEvent.year} AD`})
            </h3>
            
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            
            <p className="mb-4">{selectedEvent.description}</p>
            
            <div className="bg-yellow-50 p-4 rounded">
              <p><strong>Fun Fact:</strong> {selectedEvent.funFact}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;

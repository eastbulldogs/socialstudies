const Timeline = () => {
  const [selectedEvent, React.useState(null)];
  
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

  return React.createElement('div', { className: 'max-w-4xl mx-auto p-4' },
    React.createElement('h2', { className: 'text-2xl text-center text-green-900 mb-8' }, 'Medieval History Timeline'),
    
    // Timeline
    React.createElement('div', { className: 'relative h-1 bg-green-900 my-12' },
      timelineEvents.map((event) => 
        React.createElement('div', {
          key: event.year,
          className: 'absolute transform -translate-x-1/2 cursor-pointer',
          style: { left: `${getPosition(event.year)}%` },
          onClick: () => setSelectedEvent(event)
        },
          React.createElement('div', {
            className: 'w-4 h-4 bg-yellow-500 border-2 border-green-900 rounded-full hover:bg-green-900 transition-colors duration-300'
          }),
          React.createElement('div', {
            className: 'absolute top-6 left-1/2 transform -translate-x-1/2 font-bold text-green-900'
          }, event.year < 0 ? `${Math.abs(event.year)} BC` : `${event.year} AD`)
        )
      )
    ),

    // Popup
    selectedEvent && React.createElement('div', {
      className: 'fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50'
    },
      React.createElement('div', {
        className: 'bg-white rounded-lg p-8 max-w-lg w-full relative'
      },
        React.createElement('button', {
          onClick: () => setSelectedEvent(null),
          className: 'absolute top-4 right-4 text-2xl'
        }, '×'),
        
        React.createElement('h3', {
          className: 'text-xl font-bold mb-4'
        }, `${selectedEvent.title} (${selectedEvent.year < 0 ? `${Math.abs(selectedEvent.year)} BC` : `${selectedEvent.year} AD`})`),
        
        React.createElement('img', {
          src: selectedEvent.image,
          alt: selectedEvent.title,
          className: 'w-full h-48 object-cover rounded mb-4'
        }),
        
        React.createElement('p', {
          className: 'mb-4'
        }, selectedEvent.description),
        
        React.createElement('div', {
          className: 'bg-yellow-50 p-4 rounded'
        },
          React.createElement('p', null,
            React.createElement('strong', null, 'Fun Fact: '),
            selectedEvent.funFact
          )
        )
      )
    )
  );
};

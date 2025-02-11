// Create the Timeline component
const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  
  const timelineEvents = [
    {
      year: -200,
      title: "Classical Period End",
      description: "The late Roman Republic period marks the transition from Classical to Medieval history.",
      image: "/api/placeholder/300/200",
      funFact: "This period saw the rise of many new civilizations!"
    },
    {
      year: 476,
      title: "Fall of Western Roman Empire",
      description: "Romulus Augustus, the last Roman emperor, is deposed by Odoacer, marking the end of the Western Roman Empire.",
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
      year: 800,
      title: "Charlemagne Crowned Emperor",
      description: "Charlemagne is crowned Emperor of the Romans by Pope Leo III, establishing the Holy Roman Empire.",
      image: "/api/placeholder/300/200",
      funFact: "Charlemagne was known to be illiterate but spoke multiple languages fluently!"
    },
    {
      year: 1066,
      title: "Norman Conquest",
      description: "William the Conqueror defeats Harold at the Battle of Hastings and becomes King of England.",
      image: "/api/placeholder/300/200",
      funFact: "The battle's events were recorded in the famous Bayeux Tapestry!"
    },
    {
      year: 1095,
      title: "First Crusade Begins",
      description: "Pope Urban II calls for the First Crusade at the Council of Clermont.",
      image: "/api/placeholder/300/200",
      funFact: "The Pope promised forgiveness of sins to anyone who joined the crusade!"
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

// Expose Timeline to global scope
window.Timeline = Timeline;

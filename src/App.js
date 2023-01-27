
import { useState } from 'react';
import './App.css';
import Calender from './Calender/Calender';
import './Calender/Calender.css';
//import { MOCKEVENTS } from './Calender/Const';

function App() {

  const [events, setEvents] = useState(MouseEvent);

  // add events here
  const addEvents = (date, color) => {
    const text = window.prompt("text")
    setEvents((prev => [...prev, { date, title: text, color }]))
  }

  return (
    <div className="App">

      <Calender startingDate={new Date()}
        eventsArr={events}
        addEvents={addEvents}
      />
    </div>
  );
}

export default App;

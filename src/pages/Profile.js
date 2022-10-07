import React, {useState} from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'
import './Profile.css';

export default function Profile() {
  const [date, setDate] = useState(new Date())
  return (
    // <div className="profile">
    //   <h1>Profile</h1>
    // </div>
    <div className="profile">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date}/>
      </div>
      <div className="text-center">
        Selected date: {date.toDateString()}
      </div>
    </div>
  );
}
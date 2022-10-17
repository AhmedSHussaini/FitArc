import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'
import './Profile.css';
import { Link } from 'react-router-dom';

export default function Profile() {
  const [date, setDate] = useState(new Date())

  // test
  

  //end test
  return (
    <div className="profile">
      <div className='image'>
        <p className='text'>Hello John Doe</p>
      </div>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date}/>
      </div>
      <div className="text-center">
        {/* Selected date: {date.toDateString()} */}
        <table>
          <tr>
            <th>{date.toDateString()} Journal</th>
          </tr>
          <tr>
            <th>Food Eaten</th>
          </tr>
          <tr>
            <td>Pizza</td>
          </tr>
          <tr>
            <td>Pizza</td>
          </tr>
          <tr>
            <td>Pizza</td>
          </tr>
          <tr>
            <th>Exercises Completed</th>
          </tr>
          <tr>
            <td>Pushups</td>
          </tr><tr>
            <td>Pushups</td>
          </tr><tr>
            <td>Pushup</td>
          </tr>
          <tr>
            <th>Weight Today</th>
          </tr>
        </table>
      </div>
      
    </div>
  );
}
import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'
import './Profile.css';
import { Link, useParams } from 'react-router-dom';

//const for fetching and displaying name
const Name = (props) => (
  <p className='text'> Hello {props.record.name}</p>
);

//const for fetching and displaying food
const MealLog = (props) => (
  <td>{props.record.food}</td>
);


export default function Profile() {
  const [date, setDate] = useState(new Date());
  const [records, setRecords] = useState([]);
  const params = useParams();
  // test
  //This method fetches the records from the database

  useEffect(() => {
    async function getRecords(){
      // const id = params.id.toString();
      const response = await fetch('http://localhost:5000/record');

      if (!response.ok){
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      const filtered = records.filter(record => {return record.name=== 'demo user'});
      setRecords(filtered);
    }

    getRecords();

    return;
  }, []);

  //This method will delete a record
  async function deleteRecord(id){
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  //this method will display the name

  function displayName(){
    return records.map((record) => {
      return (
        <Name
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }
  

  //end test
  return (
    <div className="profile">
      <div className='image'>
        {displayName()}
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
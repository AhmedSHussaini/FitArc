import React from 'react'
import '../components/EditEquipmentWindow.css'

function EditEquipmentWindow(props) {
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
            {props.children}
            <button className='submit-btn' onClick={() => props.setTrigger(false)}>Submit</button>
        </div>
    </div>
  ) : "";
}

export default EditEquipmentWindow
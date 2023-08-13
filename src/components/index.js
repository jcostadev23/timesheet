import { useState } from "react"
import { InputField } from './inputField';
import dayjs from 'dayjs';

export default function TimeSheet () {
  const [days, setDays] = useState(JSON.parse(localStorage.getItem('days')) || []);
  
    return (
      <div>
        <h3>TimeSheet</h3>
        <InputField/>
        {days && days?.map((day)=>{
          const formatDate = dayjs(day.date).format('DD/MM/YYYY');
          return (
            <div className="element-card" key={day.id}>
              <h4>{formatDate}</h4> <span>Job: {day.jobs}</span> <span>Worker: {day.workers}</span>  
              <span>Equipements: {day.equipement}</span>  <span>Description: {day.description}</span> 
            </div>
          )
        })} 
      </div>
    )
}
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
            <section className="element-card" key={day.id}>
              <h4>{formatDate}</h4> 
              <p>Job: {day.jobs}</p> 
              <p>Worker: {day.workers}</p> 
              <p>Worker Hours: {day.hours}</p> 
              <p>Equipements: {day.equipement}</p> 
              <p>Equipements Hours: {day.equipHours}</p>  
              <p>Description: {day.description}</p> 
            </section>
          )
        })} 
      </div>
    )
}
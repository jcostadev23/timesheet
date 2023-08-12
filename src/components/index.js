import { useState } from "react"
import { InputField } from './inputField';
import dayjs from 'dayjs';

export default function TimeSheet () {
  const [days, setDays] = useState(JSON.parse(localStorage.getItem('days')) || []);

    return (
      <div className="card">
        <InputField/>
        {/* <p>selectedDate {date.format('DD/MM/YYYY')}</p> */}
        {days && days?.map((day)=>{
          const formatDate = dayjs(day.date).format('DD/MM/YYYY');
          return (
            <p className="element-card" key={day.id}>
              Date: {formatDate}, Job: {day.jobs}, Worker: {day.workers}, 
              Tools: {day.tools}, Description: {day.description}
            </p>
          )
        })} 
      </div>
    )
}
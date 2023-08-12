import { useState } from "react"
import { BasicDatePicker} from '../helpers/datePicker';
import { InputField } from './inputField';
import dayjs from "dayjs";

export default function TimeSheet () {
  const [workers, setWorkers] = useState(JSON.parse(localStorage.getItem('workers')) || []);
  const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('jobs')) || []);
  const [tools, setTools] = useState(JSON.parse(localStorage.getItem('tools')) || []);
  const [date, setDate] = useState(dayjs())

    return (
      <div>
        <InputField/>
        <p>selectedDate {date.format('DD/MM/YYYY')}</p>
        {workers.map(workers => <div> Worker:{workers.name}</div>)}
        {jobs.map(jobs => <div> Job: {jobs.name}</div>)}
        {tools.map(tools => <div> Tools: {tools.name}</div>)}

        
      </div>
    )
}
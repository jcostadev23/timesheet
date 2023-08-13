import React, { useState } from 'react';
import { Input } from './input';
import './input.css';
import dayjs from 'dayjs';
import { Button } from './button';
import { createId } from '../helpers/helperFunction';

const InputField = ()=>{
    const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('jobs')) || []);
    const [workers, setWorkers] = useState(JSON.parse(localStorage.getItem('workers')) || []);
    const [equipements, setEquipements] = useState(JSON.parse(localStorage.getItem('equipements')) || []);
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(dayjs().format('DD/MM/YYYY'))
    const [days, setDays] = useState(JSON.parse(localStorage.getItem('days')) || [])
    const [worker, setWorker] = useState('')
    const [job, setJob] = useState('')
    const [equipement, setEquipement] = useState('')

    const dailyDiary = (event) =>{
        event.preventDefault()

        if(!worker){
            return 
        }

        const day ={
            date: `${date}`,
            jobs: job,
            workers: worker,
            equipement: equipement,
            description:`${description}`,
            id: createId
        }
        localStorage.setItem("days", JSON.stringify([...days, day]))
    }

    const handleDataChange = (event)=> {
        setDate(event.target.value);
    }
   
    return (
        <form className='input-card'>
            <input className='input'
                type='date'
                value={date}
                onChange={handleDataChange}
                />

            <Input 
                label='Job'
                type='select'
                value={job}
                options={jobs}
                onChange={setJob}
                />

            <Input 
                label='Workers'
                type='select'
                value={worker}
                options={workers}
                onChange={setWorker}
                />

            <Input 
                label='Equipement'
                type='select'
                value={equipement}
                options={equipements}
                onChange={setEquipement}
                />
            
            <Input 
                label='Description'
                type='textarea'
                value={description}
                onChange={setDescription}
                />

            <Button 
                type='Submit'
                label='Submit'
                onClick={dailyDiary}/>
        </form>
    )
}
export {InputField}
import React, { useState } from 'react';
import { Input } from './input';
import './input.css';
import dayjs from 'dayjs';
import { Button } from './button';
import { createId, formatHours, } from '../helpers/helperFunction';

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
    const [hours, setHours] = useState(Number)
    const [equipHours, setEquipHours] = useState(Number)

    const dailyDiary = (event) =>{
        event.preventDefault()

        if(!date || !worker){
            return 
        }

        const day ={
            date: date,
            jobs: job.replace(/\b\w/g, c=> c.toUpperCase()),
            workers: worker.replace(/\b\w/g, c=> c.toUpperCase()),
            hours: formatHours(hours),
            equipement: equipement.replace(/\b\w/g, c=> c.toUpperCase()),
            equipHours: formatHours(equipHours),
            description: description,
            id: createId()
        }
        localStorage.setItem("days", JSON.stringify([...days, day]))
    }

    const handleDataChange = (event)=> {
        setDate(event.target.value);
    }

    const handleChangeWorkerHours = (event)=> {
        setHours(event.target.value);
    }

    const handleChangeEquipHours = (event)=> {
        setEquipHours(event.target.value);
    }

    return (
        <form>
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

            <input className='input'
                type="number"
                step='0.5'
                value={hours}
                onChange={handleChangeWorkerHours}
                />

            <Input 
                label='Equipement'
                type='select'
                value={equipement}
                options={equipements}
                onChange={setEquipement}
                />

            <input className='input'
                type='number'
                step='0.5'
                value={equipHours}
                onChange={handleChangeEquipHours}
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
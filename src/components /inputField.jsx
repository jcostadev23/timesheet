import React, { useState } from 'react';
import { Input } from './input';

const InputField = ()=>{
    const [job, setJob] = useState('');
    const [worker, setWorker] = useState('');
    const [machine, setMachine] = useState('');
    const [description, setDescription] = useState('')

    return (
        <div className='input'>
            <Input 
                label='Job'
                type='select'
                value={job}
                options={['higlands', 'the barn', 'sheringham']}
                onChange={setJob}
                />

            <Input 
                label='Worker'
                type='select'
                value={worker}
                options={['Vitor', 'David', 'Costa']}
                onChange={setWorker}
                />

            <Input 
                label='Machine'
                type='select'
                value={machine}
                options={['Hitachi 3t', 'BobCat', 'Volvo']}
                onChange={setMachine}
                />
            
            <Input 
                label='Description'
                type='textarea'
                value={description}
                onChange={setDescription}
                />

            <div>
                <h3>Selected</h3>
                <p>{job}</p>
                <p>{worker}</p>
                <p>{machine}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
export {InputField}
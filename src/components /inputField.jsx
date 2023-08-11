import React, { useState } from 'react';
import { Input } from './input';

const InputField = ()=>{
    const [job, setJob] = useState('');
    const [workers, setWorkers] = useState(JSON.parse(localStorage.getItem('workers')) || []);
    const [machine, setMachine] = useState('');
    const [description, setDescription] = useState('')

    return (
        <div>
            {/* <Input 
                label='Job'
                type='select'
                value={job}
                options={['higlands', 'the barn', 'sheringham']}
                onChange={setJob}
                /> */}

            <Input 
                label='Workers'
                type='select'
                value={workers}
                options={workers}
                onChange={setWorkers}
                />

            {/* <Input 
                label='Machine'
                type='select'
                value={machine}
                options={['Hitachi 3t', 'BobCat', 'Volvo']}
                onChange={setMachine}
                /> */}
            
            <Input 
                label='Description'
                type='textarea'
                value={description}
                onChange={setDescription}
                />
        </div>
    )
}
export {InputField}
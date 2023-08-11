import React, { useState } from 'react';
import { Input } from './input';

const InputField = ()=>{
    const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('jobs')) || []);
    const [workers, setWorkers] = useState(JSON.parse(localStorage.getItem('workers')) || []);
    const [tools, setTools] = useState(JSON.parse(localStorage.getItem('tools')) || []);
    const [description, setDescription] = useState('')

    return (
        <div>
            <Input 
                label='Job'
                type='select'
                value={jobs}
                options={jobs}
                onChange={setJobs}
                />

            <Input 
                label='Workers'
                type='select'
                value={workers}
                options={workers}
                onChange={setWorkers}
                />

            <Input 
                label='Tools'
                type='select'
                value={tools}
                options={tools}
                onChange={setTools}
                />
            
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
import { useState } from "react";
import { createId } from "../../src/helpers/helperFunction";
import { Input } from "../../src/components/input";
import { Button } from "./button";

export default function AddJob () {
    const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('jobs')) || [])
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const saveJob = (event) => {
        event.preventDefault()

        if(!name){
            return 
        }
        const job ={
            name: name,
            address: address,
            id: createId()
        };

        localStorage.setItem('jobs', JSON.stringify([...jobs, job]))
        setName('')
        setAddress('')
    }

    return(
        <div>
            <h3>Job</h3>
            <form > 
                <Input
                    label="Name"
                    type='text'
                    value={name}
                    onChange={setName}
                    />
                <Input
                    label='Address'
                    type='text'
                    value={address}
                    onChange={setAddress}
                    />
                <Button
                    type='Submit'
                    label='Add'
                    onClick={saveJob}/>
            </form>
                {jobs && jobs?.map((job)=> {
                    return(
                        <p className="element-card" key={job.id}>
                           <span>Name: {job.name}</span><span>Address: {job.address}</span>
                        </p>)
                })}
        </div>
    )
}
import { useState } from "react";
import { createId } from "../helpers/createId";
import { Input } from "./input";

export function AddJob () {
    const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('jobs')) || [])
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const saveJob = () => {
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
        <form > 
            <h3>Job</h3>
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
            <button onClick={saveJob}>Save</button>

        </form>
    )
}
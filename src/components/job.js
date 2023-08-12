import { useState } from "react";
import { createId } from "../../src/helpers/helperFunction";
import { Input } from "../../src/components/input";

export default function AddJob () {
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
        <div className="card">
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
                <button onClick={saveJob}>Save</button>
            </form>
                {jobs && jobs?.map((job)=> {
                    return(
                        <p className="element-card" key={job.id}>
                            Name: {job.name}, Address: {job.address}
                        </p>)
                })}
        </div>
    )
}
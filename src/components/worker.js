import { useState } from "react";
import { Input } from '../../src/components/input';
import { createId } from '../../src/helpers/helperFunction';
import { Button } from "./button";

export default function AddWorker(){
    const [workers, setWorkers] = useState(JSON.parse(localStorage.getItem('workers')) || []);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const saveWorker = (event) => {
        event.preventDefault()

        if(!name){
            return 
        }

        const worker ={
            name: name,
            phoneNumber: phoneNumber,
            id: createId()
        };

        localStorage.setItem('workers', JSON.stringify([...workers, worker]));
        setName('')
        setPhoneNumber('')
    }
    
    return (
        <div>
            <h3>Workers</h3>
            <form>
                <Input 
                    label='Name'
                    type='text'
                    value={name}
                    onChange={setName}
                    />
                <Input
                    label="Phone Number"
                    type="telf"
                    value={phoneNumber}
                    onChange={setPhoneNumber}/>
                <Button
                    type='Submit'
                    label='Add' 
                    onClick={saveWorker}/>
            </form>
                {workers && workers?.map((worker) => {
                    return (
                        <div className="element-card" key={worker.id}>
                            <span>Name: {worker.name}</span> <span>Phone: {worker.phoneNumber}</span> 
                        </div>)
                })}
        </div>
    )
}
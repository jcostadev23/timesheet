import React, { useState } from "react";
import { Input } from '../../src/components/input';
import { createId, removeItem } from '../../src/helpers/helperFunction';
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
        setWorkers([...workers, worker])
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
                        <section key={worker.id}>
                            <p>Name: {worker.name}</p> 
                            <p>Phone: {worker.phoneNumber}</p> 
                            <Button label='Delete' 
                                onClick={()=> {
                                    localStorage.setItem('workers', 
                                    JSON.stringify(removeItem(workers, worker)))
                                    window.location.reload()}}/>
                        </section>)
                })}
        </div>
    )
}
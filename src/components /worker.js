import { useState } from "react";
import { Input } from './input';
import { createId } from '../helpers/createId';

export default function AddWorker(){
    const [workers, setWorkers] = useState(JSON.parse(localStorage.getItem('workers')) || []);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const saveWorker = () => {
    
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
        <form >
            <h3>Worker</h3>
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
            <button onClick={saveWorker}>Save </button>
        </form>

    )
}
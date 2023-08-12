import { useState } from "react";
import { Input } from '../../src/components/input';
import { createId } from '../../src/helpers/helperFunction';

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
        <div className="card" >
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
                <button onClick={saveWorker}>Save </button>
            </form>
                {workers && workers?.map((worker) => {
                    return (
                    <p className="element-card" key={worker.id}>
                        Name: {worker.name},  Phone: {worker.phoneNumber}
                    </p>)
                })}
        </div>

    )
}
import { useState } from "react";
import { createId } from "../helpers/helperFunction";
import { Input } from "./input";
import { Button } from "./button";

export default function AddEquipements () {
    const [equipements, setEquipements] = useState(JSON.parse(localStorage.getItem('equipements')) || []);
    const [name, setName] = useState('');
    const [attachements, setAttachements] = useState('');

    const saveEquipement = (event) => {
        event.preventDefault()

        if(!name){
            return 
        }
        const equipement ={
            name: name,
            attachements : attachements,
            id: createId()
        }

        localStorage.setItem('equipements', JSON.stringify([...equipements, equipement]));
        setName('')
        setAttachements('')

        window.location.reload()
    }

    return (
        <div>
            <h3>Equipements</h3>
            <form>
                <Input
                    type="text"
                    label='Name'
                    value={name}
                    onChange={setName}
                    />
                <Input
                    type="text"
                    label='Attachements'
                    value={attachements}
                    onChange={setAttachements}
                    />
                <Button
                    type='Submit'
                    label='Add'
                    onClick={saveEquipement}/>
            </form>
            {equipements && equipements?.map((equipement)=>{
                return (
                    <section key={equipement.id}>
                        <p>Name: {equipement.name}</p> 
                        <p>Attachements: {equipement.attachements}</p>
                    </section>)
            })}
        </div>
    )
}
import { useState } from "react";
import { createId } from "../helpers/createId";
import { Input } from "./input";

export default function AddTools () {
    const [tools, setTools] = useState(JSON.parse(localStorage.getItem('tools')) || []);
    const [name, setName] = useState('');
    const [attachements, setAttachements] = useState('');

    const saveTools = () => {
        const tool ={
            name: name,
            attachements : attachements,
            id: createId()
        }

        localStorage.setItem('tools', JSON.stringify([...tools, tool]));
        setName('')
        setAttachements('')
    }

    return (
        <form >
            <h3>Tools</h3>
            <Input
                type="text"
                label='Tools'
                value={name}
                onChange={setName}
                />
            <Input
                type="text"
                label='Attachements'
                value={attachements}
                onChange={setAttachements}
                />
            <button onClick={saveTools}>Save Tools</button>
        </form>
    )
}
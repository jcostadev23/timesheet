import { useState } from "react";
import { createId } from "../../src/helpers/helperFunction";
import { Input } from "../../src/components/input";

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
        <div className="card">
            <h3>Tools</h3>
            <form >
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
            {tools && tools?.map((tool)=>{
                return (
                    <p className="element-card" key={tool.id}>
                        Name: {tool.name}, Attachements: {tool.attachements}
                    </p>)
            })}
        </div>
    )
}
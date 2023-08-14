
const Input = ({ label, type, value, options, onChange })=> {

    const handleChange = (event)=>{
        let newValue = event.target.value;
        newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
        onChange(newValue);
    }
    
    return (
        <div>
            {type === 'select' ? (
                <select className='input' value={value} onChange={handleChange}>
                    <option className='input' value='' disabled>
                        Select an option...
                    </option>
                    {options?.map((option)=>(
                        <option className='input' key={option.id} value={option.name}>
                            {option.name}
                        </option>
                    ))}
                </select>
                ) : type === 'textarea' ? (
                    <textarea className='input' placeholder={label}  value={value} onChange={handleChange}/>
                ) : (
                    <input className='input' 
                        type='text' 
                        placeholder={label} 
                        value={value} 
                        onChange={handleChange}/>
                    ) }
        </div>
       
    )
}
export { Input }
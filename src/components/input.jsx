import React, { useState } from 'react';

const Input = ({ label, type, value, options, onChange })=> {

    const handleChange = (event)=>{
        const newvalue = event.target.value;
        onChange(newvalue);
    }
    
    return (
        <div>
            {/* <label>{label}</label> */}
            {type === 'select' ? (
                <select className='input' value={value.name} onChange={handleChange}>
                    {options?.map((option)=>(
                        <option className='input' key={option.id} value={option.name}>
                            {option.name}
                        </option>
                    ))}
                </select>
                ) : type === 'textarea' ? (
                    <textarea className='input' value={value} onChange={handleChange}/>
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
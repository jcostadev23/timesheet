import React, { useState } from 'react';

const Input = ({ label, type, value, options, onChange })=> {
    const handleChange = (event)=>{
        const newvalue = event.target.value;
        onChange(newvalue);
    }
    return (
        <div className='input'>
            <label>{label}</label>
            {type === 'select' ? (
                <select value={value} onChange={handleChange}>
                    {options.map((option)=>(
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                ) : type === 'textarea' ? (
                    <textarea value={value} onChange={handleChange}/>
                ) : (
                    <input type='text' value={value} onChange={handleChange}/>
                    ) }
        </div>
       
    )
}
export { Input }
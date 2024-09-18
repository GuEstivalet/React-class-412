import React from 'react'

const Radio = ({pergunta, options, id, onChange, value, active}) => {

    if (active === false) return null;

    return (
        <fieldset>
            <legend style={{fontWeight: 'bold'}}>{pergunta}</legend>
            {options.map((option) => 
            <div key={option} style={{display:'flex', flexDirection:'column', padding:'1rem', fontFamily:'monospace'}}>
                <label>
                <input id={id} checked={ value === option } type="radio" value={option} onChange={onChange} />
                {option}        
                </label>
            </div> )}
        </fieldset>
    )
    }

export default Radio

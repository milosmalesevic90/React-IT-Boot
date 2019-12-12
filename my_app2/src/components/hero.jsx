import React from 'react';
import { Progress } from 'react-sweet-progress';

const Hero = ({ data: { first_name: name,
    last_name: l_name,
    age: age1,
    race: race1,
    traits: { stamina: s,
        strength: pow,
        dexterity: dex },
} }) => {

    return (
        <li className='gallery li'>
            <label>{name} </label>
            <label>{l_name} - Race: </label>
            <label>{race1}</label>
            <ul>
                <li>Age: {age1}</li>
                <li>Stamina:<Progress percent={s}/></li>
                
                <li>Strenight:<Progress percent={pow} /></li>
                <li>Dextrity:<Progress percent={dex}/></li>
                
            </ul>

        </li>
    );
}

export default Hero
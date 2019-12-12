import React from 'react';

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
                <li>Stamina: {s}</li>
                <li>Strenight: {pow}</li>
                <li>Dextrity: {dex}</li>
            </ul>

        </li>
    );
}

export default Hero
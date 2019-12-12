import React from 'react';
import Hero from './hero';


const HeroList = ({data}) => {
    
    return (
        <ul className='galery'>
            {data.map(x => { return <Hero data={x} key={x.id} /> })}
        </ul>
    );
}

export default HeroList;
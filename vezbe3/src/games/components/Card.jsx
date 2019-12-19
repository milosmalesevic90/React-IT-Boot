import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Card = ({ card,onClick,isFlipped }) => {
    return (
        <Flippy
            isFlipped={isFlipped}
            flipDirection="horizontal"
            style={{ width: '23%', height: '200px',margin:'5px',float:'left'}} /// these are optional style, it is not necessary
        >

            <FrontSide
            style={{
                backgroundColor: '#41669d',
            }} onClick={onClick}
            >
            RICK
            </FrontSide>
            <BackSide
            style={{ backgroundColor: '#175852', fontSize: '100px',textAlign: 'center', lineHeight: '10px'}}>
            {card.data}
            </BackSide>
        </Flippy>
    )
}

export default Card
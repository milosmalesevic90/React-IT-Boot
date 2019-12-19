import React from 'react';

const Score = ({score}) => {
    // TODO Dohvatanje username-a na osnovu user_id
    // let user = getUsername(score.user_id).then(flkkd)

    let user = "Михаил"
    return (
        <li>{score.score} {user}</li>
    )
}

export default Score
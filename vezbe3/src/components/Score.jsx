import React from "react"

const Score =({score})=>{
    // TODO Dohvatanje username na osnovu user_id
    //let user= getUsername(score.user_id).then(efwfew)
    let user = "Mixail";
    return(
        <li>{ score.score}{user}</li>


    )
}
export default Score
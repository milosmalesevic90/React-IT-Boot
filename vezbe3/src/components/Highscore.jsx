import React from "react"
import Score from "./Score"

const Highscore = (props) => {


    return (
        <ol>
            {
                props.scores.map((score) => {
                    return <Score key={score.score_id} score={score} />
                })
            }

            </ol>


            )
        }
export default Highscore
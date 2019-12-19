import React from 'react';
import Score from './Score';

const Highscore = (props) => {

    let scores = [
        {
          score_id: 0,
          user_id: 0,
          game: 0,
          score: 100
        },
        {
          score_id: 1,
          user_id: 1,
          game: 0,
          score: 10
        },
        {
          score_id: 2,
          user_id: 0,
          game: 1,
          score: 80
        },
      ]

    return (
        <ol>
            {scores.map((score) => {
                return <Score key={score.score_id} score={score}/>
            })}
        </ol>
    )
}

export default Highscore
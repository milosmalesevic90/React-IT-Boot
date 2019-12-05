import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Quote = ({ text, points }) => {
    return (
        <>
            <p>{text}</p>
            <p>has {points} points</p>
        </>
    )
}
const App = ({ quotes }) => {
    const [index, setIndex] = useState(4)
    const [points, setPoints] = useState((new Array(quotes.length)).fill(0))

    return (
        //<button onClick={() => setIndex(Math.floor(Math.random() * quotes.length))}>Change</button>
        //{quotes.map((quote, index) => (<Quote key={index} text={quote}></Quote>))}
        //quotes.map((quote,index)=>(<p key={index}>{quote}</p>))  //ispisuje sve paragrafe u razlicitom redu
        <>
            <Quote text={quotes[index]} points={points[index]} />



            <button onClick={() => setIndex(Math.floor(Math.random() * quotes.length))}>Change</button>
            <button onClick={() => { let x = [...points]; x[index]++;console.log(x); setPoints(x); }}>Vote</button>
            

        </>

    )
}

const anecdotes = [
    'Talk is cheap. Show me the code.',
    'Programs must be written for people to read, and only incidentally for machines to execute.',
    'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Give a man a program, frustrate him for a day.',
    'Teach a man to program, frustrate him for a lifetime.',
    'The most disastrous thing that you can ever learn is your first programming language.',
    'The most important property of a program is whether it accomplishes the intention of its user.',
    'Object-oriented programming offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches.',
    'Happiness should be a function without any parameters',
    'User interface is the process of shifting from chaotic complexity to elegant simplicity.'
]



ReactDOM.render(
    <App quotes={anecdotes} />,
    document.getElementById('root')
)
console.log(anecdotes)
console.log(Quote)
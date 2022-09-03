import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  const love = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [vachi, setVachi] = useState(0)
  const [back, setBack] = useState(new Array(love.length).fill(0))

  const handleVotesClick = () => {
    const str = [...back]
    str[vachi] += 1
    setBack(str)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{love[vachi]}</p>
      <p>has {back[vachi]} votes</p>

      <Button handleClick={handleVotesClick} text="vote" />
      <Button
        handleClick={() => {
          setVachi(Math.floor(Math.random() * love.length))
        }}
        text="next anecdote"
      />

      <h1>Anecdote with most votes</h1>
      <div>
        <p>{love[back.indexOf(Math.max(...back))]}</p>
        <p>has {back[back.indexOf(Math.max(...back))]} votes</p>
      </div>
    </>
  )
}

export default App
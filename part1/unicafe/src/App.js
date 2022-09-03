import { useState } from 'react'

const Me = ({text, onClick}) => 
  <button onClick={onClick}>{text}</button>

const Row = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Close = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const vibe = good / total * 100
  const mean = (good - bad) / (good + bad + neutral)

  if (total === 0) {
    return (
      <div>
        <h1><b>Statistics</b></h1>
        <h2>No feedback given</h2>
      </div>
    )
  }

  return (
    <div>
      <h1><b>Statistics</b></h1>

      <table>
        <tbody>
          <Row text="good" value={good} />
          <Row text="neutral" value={neutral} />
          <Row text="bad" value={bad} />
          <Row text="all" value={good+neutral+bad} />
          <Row text="average" value={mean} />
          <Row text="positive" value={vibe + " %"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>

      <Me text="good" onClick={() => setGood(good+1)} />
      <Me text="neutral" onClick={() => setNeutral(neutral+1)} />
      <Me text="bad" onClick={() => setBad(bad+1)} />

      <Close good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
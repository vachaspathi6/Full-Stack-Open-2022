const Slice = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Club = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Era = (props) => {
  return (
    <div>
      {props.parts.map(part => <Club name={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Sum = (props) => {
  const add = props.parts.reduce((u, v) => {
    return u + v.exercises
  }, 0)

  return (
    <p>Number of exercises {add}</p>
  )
}

const App = () => {
  const kiss = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Slice name={kiss.name} />
      <Era parts={kiss.parts}/>
      <Sum parts={kiss.parts} />

    </div>
  )
}

export default App
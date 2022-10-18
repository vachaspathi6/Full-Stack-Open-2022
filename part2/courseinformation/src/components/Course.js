const Read = ({name}) => <h2>{name}</h2>

const Seg = ({name, exercises}) => <p>{name} {exercises}</p>

const Text = ({parts}) => (
  <div>
    {parts.map(({id, name, exercises}) =>
      <Seg key={id} name={name} exercises={exercises} />
    )}
  </div>
)

const Full = ({parts}) => {
  const full = parts.reduce((t,q) => {
    return t + q.exercises
  }, 0)

  return (
    <b>Total of {full} exercises </b>
  )
}

const Res = ({course}) => {
  return (
    <div>
      <Read name={course.name} />
      <Text parts={course.parts}/>
      <Full parts={course.parts} />
    </div>
  )
}

export default Res

const Header = (props) => {
  return (<h1>{props.course}</h1>)
}

const Content = (props) => {
  const renderItems = props.parts.map((p) =>
      <Part part={p} key={p.name}/>
  ) 

  return (
    <div>
      {renderItems}
    </div>
  )
}

const Total = (props) => {
  const total_exercise = props.parts.reduce((sum, p) => sum + p.exercises, 0)
  return (
    <p>Number of exercises {total_exercise}</p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const App = () => {
  const course = {
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;

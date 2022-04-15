import { useState } from 'react';

const Statistics = (props) => {
  if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.good + props.bad + props.neutral}</p>
        <p>average {(props.good + props.bad + props.neutral) / 3}</p>
        <p>positive {(props.good / (props.good + props.bad + props.neutral)) * 100}%</p>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <p>no feedback given</p>
    </>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad+ 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
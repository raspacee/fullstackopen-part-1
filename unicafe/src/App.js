import { useState } from 'react';

const Statistics = (props) => {
  if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
    return (
      <>
        <h1>statistics</h1>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="all" value={props.good + props.bad + props.neutral}/>
        <StatisticLine text="average" value={(props.good + props.bad + props.neutral) / 3}/>
        <StatisticLine text="positive" value={(props.good / (props.good + props.bad + props.neutral)) * 100}/>
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

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" handleClick={() => setBad(bad + 1)}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Actor from './Actor'
import Singer from './Singer'
//import Task from './Task'

function App() {
  const [count, setCount] = useState(0)

  const actors = ['Rajani', 'Plabon', 'Mahbub', 'Atik', 'Mamun']

  const singers = [
    {id: 1, name: 'Rajani', age: 50},
    {id: 2, name: 'Plabon', age: 45},
    {id: 3, name: 'Mahbub', age: 35},
    {id: 4, name: 'Atik', age: 55},
    {id: 5, name: 'Mamun', age: 25}
  ]

  return (
    <>
      
      <h1>Vite + React</h1>

      <Actor name="Raj Rajani"></Actor>

      {
        actors.map((actor, index)=><Actor key={index} name={actor}></Actor>)
      }

      {
        singers.map((singer) => <Singer key={singer.id} singer={singer} singers={singers}></Singer>)
      }

      <Person></Person>
      <Student grade='10' score='95'></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer>
      <Device name='Laptop' price='55'></Device>
      <Device name='iPhone' price='70'></Device>
      <Device name='Smart watch' price='30'></Device>
      {/* <Task name='React JS' isDone={true}></Task>
      <Task name='TypeScript' isDone={false}></Task>
      <Task name='MongoDB' isDone={true}></Task> */}
    </>
  )
}

function Device(props){
  console.log(props)
  return(
    <div> 
      <h2>This is a Device Named {props.name} and Price: {props.price} </h2>
    </div>
  )
}

function Person(){

  const age=20;
  const money=100;
  const person = {name: 'Rajani', age:20}

  return <h3>I am {person.name} with age {person.age}</h3>
}

//const {grade, score}= {grade:'10', score:'95'}

function Student(props){
console.log(props)
  return(
    <div className='student'>
      <h3>This is a Student</h3>
      <p>Student Grade: </p>
      <p>Student Score: </p>
      
    </div>
  )
}

function Developer(){

  const developerStyle={
    border: '2px solid white',
    borderRadius: '5px',
    padding: '20px',
    margin: '20px'
  }

  return(
    <div style={{
      border: '2px solid white',
      borderRadius: '5px',
      padding: '20px',
      margin: '20px'
    }}>
      <h5>Hello, I am a React Developer</h5>
      <h3>I love to write code</h3>
    </div>
  )
}

export default App

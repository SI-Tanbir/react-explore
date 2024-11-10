import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todotask from './todo.jsx' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
       
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Gretting></Gretting>
      <Classroom name="10" grade="11"></Classroom>

      <div>
        <li>Todo list</li>
        <Todotask task='react shikbo' isDone='true'></Todotask>
        <Todotask task='app banabo' isDone='false'></Todotask>

        <Bookworm name='paki'></Bookworm>

      </div>
  

      
     
    </>
  )
}

function Bookworm(data){

  return (
    <h1> book name:{data}</h1>

  )
}




function Classroom(props){
  let classStyle={
    margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'30px'
  }
  return (
    <div style={classStyle}>
    <h2>The name of my Class is React practice</h2>
    <h2>class:{props.name}</h2>
    <h3>grade:{props.grade}</h3>

    </div>
  )
}

function Gretting(){
  return(
    <h2>Hey what's up bro</h2>
  )
}

export default App

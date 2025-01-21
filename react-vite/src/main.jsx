import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp(){
  const userName = 'with vivek singh'
  return(
    <>
      <h1>Custom App {userName}</h1> {/*This syntax {userName} is called evaluated expression*/}
    </>
  )
}

//This is simply creating a variable and passing it ot root.render function
const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser = 'with vivek'

//This is the react pre-defined syntax for creating a reactElement
const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />
  </StrictMode>,
  // anotherElement
  // reactElement
  
)

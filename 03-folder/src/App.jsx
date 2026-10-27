import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
   <>
     <div className="parent">
      <Card username = "harshit" age = {20}/>  
       <Card username = "aman" age = {17} />  
       <Card  username = "rehan" age = {19}/>  
     </div>
  
   </>
  )
}

export default App
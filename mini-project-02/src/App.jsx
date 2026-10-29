import React from 'react'
import Card from './components/Card'
import users from './data'


export const App = () => {

  return (
     <div className ='parent'>
   
       {users.map(function(user,idx){
         return <div key = {idx}>
          <Card user = {user}></Card>
          </div> 
       })}


     </div>
  )
}

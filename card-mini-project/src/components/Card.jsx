import React from 'react'
import{Bookmark} from "lucide-react"

export const Card = (props) => {
  return (
    <>
    <div className="card">
        <div className="top">
          <img src= {props.logo} alt={props.company}/>
          <button>Save <Bookmark /></button>
        </div>
        <div className="center">
          <h2>{props.company}<span>{props.posted}</span></h2>
          <h1>{props.role}</h1>
          <div>
            <h2>{props.tags[0]}</h2>
            <h2>{props.tags[1]}</h2>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h2>{props.salary}</h2>
            <p>{props.location}</p>
          </div>
          <button>Apply now</button>
        </div>


      </div>
    </>
  )
}

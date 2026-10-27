import React from 'react'
import { Card } from './components/Card'
const App = () => {

   const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    tags: ["Part-Time", "Senior Level"],
    salary: "$120/hr",
    location: "Mumbai, India",
    saved: false,
  },
  {
    id: 2,
    company: "Google",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGAxmwkCKXPl026zLJcJcFZu6Rqqs4EeMguLhOjKfmg&s=10",
    posted: "30 days ago",
    role: "Graphic Designer",
    tags: ["Part-Time", "Flexible Schedule"],
    salary: "$150-220k",
    location: "Kochi, India",
    saved: true,
  },
  {
    id: 3,
    company: "Dribbble",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHAbI9wV050iIPqlITWYIKx4OxhRcV-E7QrPQMl20yw&s=10",
    posted: "18 days ago",
    role: "Senior Motion Designer",
    tags: ["Contract", "Remote"],
    salary: "$85/hr",
    location: "Chennai, India",
    saved: false,
  },
  {
    id: 4,
    company: "Figma",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiIf5TYwdoh0PyWVFNj7Jpkj0x7xef7D00ktmLjc_KdA&s=10",
    posted: "5 days ago",
    role: "UX Designer",
    tags: ["Full-Time", "In office"],
    salary: "$200-250k",
    location: "Bangalore, India",
    saved: true,
  },
  {
    id: 5,
    company: "Airbnb",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nliJRWGHCXGsp-Mc-Lzb1gSrCITubH-qnfzBDGHpmg&s=10",
    posted: "5 days ago",
    role: "Junior UI/UX Designer",
    tags: ["Contract", "Remote"],
    salary: "$100/hr",
    location: "Delhi, India",
    saved: false,
  },
  {
    id: 6,
    company: "Apple",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2tL_LqE0tXh0tBYRxY0_FnYVAJXw_0ArGg3BGHAByw&s=10",
    posted: "5 days ago",
    role: "Graphic Designer",
    tags: ["Full-Time", "Flexible Schedule"],
    salary: "$85-120k",
    location: "Kerala, India",
    saved: true,
  },
];
      
  return (
    <div className="parent">

      {jobs.map(function(job,idx){
          return  <div key = {idx}>
            <Card  company = {job.company} logo = {job.logo}  posted = {job.posted} role = {job.role} tags = {job.tags} salary = {job.salary} location = {job.location} saved = {job.saved}/>
          </div>
      })}

      </div>
  )
}

export default App
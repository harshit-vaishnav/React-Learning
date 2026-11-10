import RightCard from "./RightCard"
const RightContent = (props) => {
  return (
    <div id = "right" className='h-full w-2/3
     p-3 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl '>
       {props.data.map((user,idx) =>{
          return <RightCard key = {idx} id = {idx} img = {user.img} tag = {user.tag} intro = {user.intro} /> 
       })}
     </div>
  )
}

export default RightContent
import RightCardContent from "./RightCardContent"


const RightCard = (user) => {
  return (
    <div className=' h-full w-60  rounded-4xl overflow-hidden relative shrink-0'>
        <img className = "h-full w-full object-cover "src={user.img} alt="" />
        <RightCardContent user = {user} />
         
    </div>
  )
}

export default RightCard

import {ArrowRight} from "lucide-react"
const RightCardContent = ({user}) => {
    console.log(user);
  return (
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
             <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-semibold object-cover">{user.id + 1}</h2>
             <div>
                <p className="text-lg leading-relaxed text-black mb-14">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nesciunt.</p>
                <div className="flex justify-between">
                    <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full">{user.tag}</button>
                    <button className="bg-blue-600 text-white font-semibold px-2 py-1 rounded-full"><ArrowRight /></button>
                </div>
             </div>
        </div>
  )
}

export default RightCardContent
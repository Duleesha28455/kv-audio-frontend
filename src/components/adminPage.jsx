import { BsGraphUp } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";
import { LuSpeaker } from "react-icons/lu";

export default function AdminPage(){
  return(
    <div className='w-full h-screen flex'>
      <div className="w-[400px] h-full bg-green-200">
        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
        <BsGraphUp />
          Dashboard
        </button>
        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center ">
        <FaRegBookmark />
          Bookings
        </button>
        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <LuSpeaker/>
          Items
        </button>
        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
        <FaRegUser />
          Users
        </button>

      </div>
      <div className="w-full bg-red-900">
      
      </div>
    </div>
  )  

}
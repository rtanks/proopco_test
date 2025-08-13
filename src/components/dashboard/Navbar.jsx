import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faHeadphones, faUser } from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect, useState } from "react"
import { toggleContext } from "./Dashboard"



export default function Navbar() {
    const [userCurrent, setUserCurrent] = useState({})
    const {changeToggleStatus} = useContext(toggleContext);

    useEffect( () => {
        const user = JSON.parse(window.localStorage.getItem("userCurrent"));
        setUserCurrent(user)
        
    }, [])

    
    const showInfo = (e) => {
        e.currentTarget.lastElementChild.classList.toggle("hidden")
    }
    return (
        <div className="w-full h-16 bg-[#151515] border-b-1 border-b-[#333] flex flex-row justify-between items-center px-2">
            <button onClick={(e) => {changeToggleStatus();e.stopPropagation()}} className="w-8 h-9 flex flex-col hover:cursor-pointer justify-center text-white gap-1">
               <div className="w-4/5 h-1 bg-[#998] rounded-md"></div>
               <div className="w-3/5 h-1 bg-[#641] rounded-md"></div>
               <div className="w-4/5 h-1 bg-[#998] rounded-md"></div>
            </button>
            <div className="w-32 h-full text-white flex flex-row justify-end gap-2 py-1 px-2">
                <button>
                    <FontAwesomeIcon icon={faHeadphones}/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faBell}/>
                </button>
                <button onClick={(e) => {showInfo(e)}} className="w-8 text-3xl relative">
                    <FontAwesomeIcon icon={faUser}/>
                    <div className="w-50 h-max p-2 absolute left-0 top-18 hidden rounded-md bg-[#151515]">
                        <p className=" text-[#998] text-xs mb-2">{userCurrent?.email}</p>
                        <p className=" text-xs text-[#888]">به وبسایت ما خوش آمدید</p>
                        <div className="w-full mt-4 h-[1px] block bg-gray-700"></div>
                        <button onClick={() => {window.localStorage.removeItem("userCurrent")}} className="text-xs text-red-500">خروج از حساب</button>
                    </div>
                </button>
            </div>
        </div>
    )
}

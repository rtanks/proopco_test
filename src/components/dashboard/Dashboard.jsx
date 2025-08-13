import MainMenu from "./MainMenu"
import TestDemo from "./TestDemo"
import LastPays from "./LastPays"
import Challenges from "./Challenges" 
import Navbar from "./Navbar"
import { createContext, useState } from "react"

export const toggleContext = createContext();
export default function Dashboard() {
    const [toggle, setToggle] = useState(false);
    const changeToggleStatus = () => {
        setToggle(prev => !prev);
    }

    return(
        <toggleContext.Provider value={{toggle, changeToggleStatus}}>
            <div className="w-full h-full bg-black flex flex-row">
                <MainMenu/>
                <div className="w-full h-full bg-transparent overflow-y-scroll">
                    <Navbar/>
                    <div className="bg-transparent flex flex-col gap-3 p-4">
                        <h1 className="text-white">داشبورد کاربری</h1>
                        <TestDemo/>
                        <div className="flex flex-col md:flex-row gap-2 bg-black w-full h-max">
                            <Challenges/>
                            <LastPays/>
                        </div>
                    </div>
                </div>
            </div>
        </toggleContext.Provider>
    )
}
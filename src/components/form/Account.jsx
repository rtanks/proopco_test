import { Outlet } from "react-router-dom";
import ErrorModal from "./ErrorModal"


export default function Account() {
    
    return(
        <div className="w-full h-screen overflow-y-scroll relative bg-[#1f1f1f]">
            <div className="w-full md:w-3/5 h-max md:h-screen bg-white flex flex-col gap-4 overflow-y-scroll justify-center items-center p-2">
                <Outlet/>
            </div>
            <ErrorModal/>
        </div>
    )
}
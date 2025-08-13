
import { useRef } from "react"

export default function LoginWithPhone({typeLog,changeTypeLog}) {
    const modalRef = useRef()

    const modalHandler = () => {
        modalRef.current.classList.toggle("flex")
        modalRef.current.classList.toggle("hidden")
    }

    return (
        <form className="w-full h-36">
            <p className="text-xs mb-2">شماره تلفن</p>
            <div className="flex flex-row justify-between items-center w-full h-10 p-1 border border-[#dfdfdf] rounded-lg text-xs">
                <input type="text" placeholder="09121234567" className="text-left w-2/3 h-full p-2 outline-0 border-l border-l-[#dfdfdf]"/>
                
                <div onClick={() => {modalHandler()}} className="relative w-1/3 p-1">
                    <div className="w-full h-full flex flex-row justify-between items-center">
                        <span>{typeLog.country}</span>
                        <div className={`w-6 h-6 rounded-full bg-[url('${typeLog.icon}')] bg-cover bg-center shadow-sm`}></div>
                    </div>
                    <div ref={modalRef} className="bg-white absolute left-1 top-9 w-50 shadow-sm rounded-lg p-1 hidden flex-col">
                        <div onClick={() => changeTypeLog({type: typeLog.type, country: "ایران", icon: "/public/iran-flag.jpg"})} className="w-full h-8 flex flex-row hover:cursor-pointer hover:bg-gray-100 p-1 justify-between items-center">
                            <span>ایران</span>
                            <div className="w-6 h-6 rounded-full bg-[url('/public/iran-flag.jpg')] bg-cover bg-center shadow-sm"></div>
                        </div>
                        <div onClick={() => changeTypeLog({type: typeLog.type, country: "اتباع ایران", icon: "/public/japan.png"})} className="w-full h-8 flex flex-row hover:cursor-pointer hover:bg-gray-100 p-1 justify-between items-center">
                            <span>اتباع ایران</span>
                            <div className="w-6 h-6 rounded-full bg-[url('/public/japan.png')] bg-cover bg-center shadow-sm"></div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="w-full hover:cursor-pointer rounded-lg bg-[#252527] py-1 h-10 text-xs text-white mt-4">مرحله بعد</button>
        </form>
    )
}
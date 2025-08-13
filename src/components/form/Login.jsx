import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginWithPass from "./LoginWithPass";
import LoginWithPhone from "./LoginWithPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
    const [typeLog, setTypeLog] = useState({type:"code", country: "ایران", icon: "/public/iran-flag.jpg"})
    const navigate = useNavigate();
    const changeTypeLog = (obj) => {
        setTypeLog(obj)
    }
    
    return(
        <div className="w-[350px] h-max my-4 relative md:my-0 p-1">
            <h1 className="text-black text-center font-bold mb-5 text-3xl">
                <span>PR</span>
                <span className="text-yellow-600">OO</span>
                <span>PCO</span>
            </h1>
            <div className="w-full h-max relative">
                <h2 className="text-xl font-bold text-[#ca7]">ورود به حساب</h2>
                <p className="text-xs text-gray-400">لطفا برای ورود ایمیل یا شماره تلفن خود را وارد کنید.</p>
                <button onClick={() => navigate("/")} className="text-[#ca7] w-6 h-7 rounded-md shadow-md absolute left-1 top-1">
                    <FontAwesomeIcon icon={faHome}/>
                </button>
            </div>
            <div className="w-full h-10 p-1 flex flex-row justify-between items-center rounded-lg border-1 mt-4 mb-5 border-[#dfdfdf] bg-[#eee9] text-xs">
                <button onClick={() => {setTypeLog({type:"code", country: "ایران", icon: "/public/iran-flag.jpg"})}} className={`hover:cursor-pointer ${typeLog.type == "code"? "bg-[#ca7] text-white": "bg-transparent text-black"}  w-1/2 h-full  rounded-lg`}>ورود با کد تایید</button>
                <button onClick={() => {setTypeLog({type: "password"})}} className={`hover:cursor-pointer ${typeLog.type == "password"? "bg-[#ca7] text-white": "bg-transparent text-black"} w-1/2 h-full rounded-lg`}>ورود با رمز عبور</button>
            </div>
           
            <div className={`w-full relative mb-4 ${typeLog.type === "password"? "h-60":"h-36"}`}>
                <LoginWithPhone typeLog={typeLog} changeTypeLog={changeTypeLog}/>
                <div className={`w-full h-max ${typeLog.type === "password"? "block":"hidden"} overflow-y-hidden bg-white absolute left-0 bottom-0`}>
                  <LoginWithPass typeLog={typeLog}/>
                </div>
            </div>

            <Link to={"/register"} className="block w-full hover:cursor-pointer text-center py-2.5 h-10 text-xs rounded-lg bg-[#ca7] text-white mt-4">ثبت نام</Link>
        </div>
    )
}
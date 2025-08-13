import { Link, useNavigate } from "react-router-dom";
import RegisterCountry from "./RegisterCountry";
import { useState } from "react";
import RegisterInfo from "./RegisterInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
    const [country, setCountry] = useState("")
    const navigate = useNavigate();

    const getCountry = (country) => {
        setCountry(country)
    }
    
    return(
        <div className="w-[350px] h-max my-4 md:my-2 p-1">
            <h1 className={`text-black text-center font-bold mb-4 text-3xl ${country ? "mt-23":""}`}>
                <span>PR</span>
                <span className="text-yellow-600">OO</span>
                <span>PCO</span>
            </h1>
            <div className="w-full h-max relative">
                <h2 className="text-xl font-bold text-[#ca7]">ثبت نام</h2>
                <p className="text-xs text-gray-400">از ثبت نام تا برداشت در کمتر از یک هفته</p>
                <button onClick={() => navigate("/")} className="text-[#ca7] w-6 h-7 rounded-md shadow-md absolute left-1 top-1">
                    <FontAwesomeIcon icon={faHome}/>
                </button>
            </div>
            
            <div className={`w-full relative mb-4 ${country ? "h-[550px]":" h-72"}`}>
                <RegisterCountry getCountry={getCountry}/>
                <div className={`w-full h-max ${country? "block":"hidden"} overflow-y-hidden bg-white absolute left-0 bottom-0`}>
                  <RegisterInfo getCountry={getCountry} country={country}/>
                </div>
            </div>
        </div>
    )
}
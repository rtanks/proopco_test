import { faClose, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export default function TestDemo() {
    const refElement = useRef();
    const [close, setClose] = useState(false);

    const closeContainer = () => {
        setClose(!close)
    }
    const copyHandler = () => {
        console.log(refElement.current)
        navigator.clipboard.writeText(refElement.current.value)
    }
    return(
        <div className={`${close ? "hidden" : "block"} flex flex-col bg-[#151515] p-3 rounded-lg`}>
            <div className="w-full bg-transparent text-left">
                <button onClick={() => closeContainer()} className="text-white">
                    <FontAwesomeIcon icon={faClose}/>
                </button>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-2 text-xs">
                <div className="w-full md:w-1/3 h-10 border-1 border-[#a974] rounded-lg flex flex-row justify-between items-center py-1 px-2">
                    <input type="text" readOnly ref={refElement} value={""} className="outline-0 w-1 border-0 text-[#a97]"/>
                    <span className="text-white">Server: ProopCoFX-Live / Platform: MT5</span>
                </div>
                <div className="w-full md:w-1/3 h-10 border-1 border-[#a974] rounded-lg flex flex-row justify-between items-center py-1 px-2">
                    <div onClick={() => {copyHandler()}} className="text-[#a97] w-1/6">
                        <FontAwesomeIcon icon={faCopy}/>
                    </div>
                    <input type="text" readOnly ref={refElement} value={"Proopco!Test1"} className="outline-0 text-[#a97] w-3/6 border-0"/>
                    <span className="text-white w-2/6 text-center">Master Pass</span>
                </div>
                <div className="w-full md:w-1/3 h-10 border-1 border-[#a974] rounded-lg flex flex-row justify-between items-center py-1 px-2">
                    <div onClick={() => {copyHandler()}} className="text-[#a97] w-1/6">
                        <FontAwesomeIcon icon={faCopy}/>
                    </div>
                    <input type="text" readOnly ref={refElement} value={"200000"} className="outline-0 w-3/6 border-0 text-[#a97]"/>
                    <span className="text-white w-2/6 text-center">Log In</span>
                </div>
            </div>
        </div>
    )
}
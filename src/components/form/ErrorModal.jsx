import { useContext } from "react"
import { toolsContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


export default function ErrorModal() {
    const {showError,changeShowStatus} = useContext(toolsContext);
    console.log(showError)
    
    return (
        <div className={`w-full h-full ${showError.show? "flex": "hidden"} justify-center items-center absolute left-0 top-0 bg-transparent backdrop-blur-xs`}>
            <div className="w-72 h-80 flex justify-center flex-col gap-3 items-center relative bg-[#171717] rounded-lg shadow-lg">
                <button onClick={() => changeShowStatus()} className="bg-transparent absolute left-4 top-2 text-white">X</button>
                <span className="text-red-500 px-3 py-2.5 border border-red-500 rounded-full">
                    <FontAwesomeIcon icon={faClose}/>
                </span>
                <h2 className="text-white font-bold text-xl">خطا</h2>
                <div className="flex flex-col justify-start gap-2 px-3 p-2 items-center text-white">
                    {
                        showError.errors.map((item,index) => <p key={index} className="text-xs">{item.message}</p>)
                    }
                </div>
            </div>
        </div>
    )
}
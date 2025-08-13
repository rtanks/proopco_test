import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Challenges() {
    
    return(
        <div className="w-full md:w-96 md:3/5 h-80 rounded-lg text-white bg-[#151515] px-4 py-5">
            <h2 className="text-sm flex flex-row justify-between items-center">
                <span>آمار چالش ها</span>
                <span className="text-[#a97]">مشاهده همه</span>
            </h2>
            <div className="w-full h-3/4 mt-2">

            </div>
            <button className="bg-[#a97] text-xs p-3 rounded-lg flex flex-row items-center">
                <span>خرید چالش</span>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    )
}
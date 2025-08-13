import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCartShopping, faDashboard, faGear, faSignOut, faTrophy, faUndo, faWallet } from "@fortawesome/free-solid-svg-icons";
import { toggleContext } from "./Dashboard";


export default function MainMenu() {
    const {toggle, changeToggleStatus} = useContext(toggleContext);

    useEffect(() => {
       window.onclick = () => {
        if(toggle) {
            console.log(toggle)
            changeToggleStatus()
        }
       }
    }, [toggle])
    return (
        <div className={`w-50 ${toggle ? "block": "hidden"} md:block ${toggle ? "md:w-20": "md:w-1/5"} absolute top-0 right-0 md:relative h-full bg-[#151515] border-l-1 border-l-[#333] p-2 flex flex-col gap-3`}>
            <h1 className="text-white text-center font-bold text-3xl line-clamp-1">
                <span className={toggle? "md:hidden": ""}>PR</span>
                <span className="text-yellow-600">OO</span>
                <span className={toggle? "md:hidden": ""}>PCO</span>
            </h1>
            <h2 className="text-xs text-[#998] pt-2 pr-1 line-clamp-1">منو اصلی</h2>
            <div className={`border-b-1 border-b-[#444] w-full h-max flex flex-col ${toggle ? "md:items-center": "items-start"} gap-1 px-2 py-3`}>
                <div className="flex flex-row items-center gap-2 p-1">
                    <FontAwesomeIcon icon={faDashboard} className="text-yellow-600"/>
                    <span className={`block ${toggle? "md:hidden": ""} text-sm text-white`}>داشبورد</span>
                </div>
                <div className="flex flex-row items-center gap-2 p-1">
                    <FontAwesomeIcon icon={faCartShopping} className="text-yellow-600"/>
                    <span className={`block ${toggle? "md:hidden": ""} text-sm text-white`}>خرید اکانت</span>
                </div>
                <div className="flex flex-row items-center gap-2 p-1">
                    <FontAwesomeIcon icon={faTrophy} className="text-yellow-600"/>
                    <span className={`block ${toggle? "md:hidden": ""} text-sm text-white`}>مدیریت چالش</span>
                </div>
                <div className="flex flex-row items-center gap-2 p-1">
                    <FontAwesomeIcon icon={faWallet} className="text-yellow-600"/>
                    <span className={`block ${toggle? "md:hidden": ""} text-sm text-white`}>سرتیفیکیت ها</span>
                </div>
                <div className="flex flex-row items-center gap-2 p-1">
                    <FontAwesomeIcon icon={faCalendar} className="text-yellow-600"/>
                    <span className={`block ${toggle? "md:hidden": ""} text-sm text-white`}>تقویم اقتصادی</span>
                </div>

            </div>

            <h2 className="text-xs text-[#998] pt-2 pr-1 line-clamp-1">تنظیمات حساب</h2>
            <div className={`border-b-1 border-b-[#444] w-full h-max flex flex-col ${toggle ? "md:items-center": "items-start"} gap-1 px-2 py-3`}>
                <div className="flex flex-row items-center gap-2 p-1">
                    <FontAwesomeIcon icon={faGear} className="text-yellow-600"/>
                    <span className={`block ${toggle? "md:hidden": ""} text-sm text-white`}>پروفایل کاربر</span>
                </div>
                <div className="flex flex-row items-center gap-2 p-1">
                    <FontAwesomeIcon icon={faSignOut} className="text-yellow-600"/>
                    <span className={`block ${toggle? "md:hidden": ""} text-sm text-white`}>احراز هویت</span>
                </div>
                <div className="flex flex-row items-center gap-2 p-1 pr-4 mt-3">
                    <FontAwesomeIcon icon={faUndo} className="text-green-600"/>
                    <span className={`block ${toggle? "md:hidden": ""} text-sm text-white`}>بازگشت به وبسایت</span>
                </div>
                <div className="flex flex-row items-center gap-2 p-1 pr-4">
                    <FontAwesomeIcon icon={faSignOut} className="text-red-600"/>
                    <span className={`block ${toggle? "md:hidden": ""} text-sm text-white`}>خروج از حساب</span>
                </div>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"

export default function RegisterCountry({getCountry}) {
    return (
        <div className="w-full h-72 p-1 mt-1 text-[0.65rem] text-gray-700">
            <div onClick={() => {getCountry("ایران")}} className="w-full h-11 mb-2 flex flex-row justify-between items-center border border-[#dfdfdf] px-2 rounded-lg ">
                <span>ایران</span>
                <div className="flex flex-row justify-between items-center gap-2">
                    <span>Iran</span>
                    <div className="w-8 h-8 shadow-sm bg-[url('/public/iran-flag.jpg')] bg-cover bg-center bg-no-repeat rounded-full"></div>
                </div>
            </div>
            <div onClick={() => {getCountry("اتباع ایران")}} className="w-full h-11 mb-2 flex flex-row justify-between items-center border border-[#dfdfdf] px-2 rounded-lg">
                <span>اتباع ایران</span>
                <div className="flex flex-row justify-between items-center gap-2">
                    <span>Iranian Nationals</span>
                    <div className="w-8 h-8 shadow-sm bg-[url('/public/japan.png')] bg-cover bg-center bg-no-repeat rounded-full"></div>
                </div>
            </div>
            <div onClick={() => {getCountry("سایر کشورها")}} className="w-full h-11 mb-5 flex flex-row justify-between items-center border border-[#dfdfdf] px-2 rounded-lg">
                <span>سایر کشورها</span>
                <div className="flex flex-row justify-between items-center gap-2">
                    <span>Other Countries</span>
                    <div className="w-8 h-8 shadow-sm bg-[url('/public/earth.jpg')] bg-cover bg-center bg-no-repeat rounded-full"></div>
                </div>
            </div>

            <p className="text-[0.65rem] text-center text-gray-400">با ثبت‌نام، بدین‌وسیله تأیید می‌نمایم که نام درج‌شده صحیح بوده و با اطلاعات شناسایی صادره از سوی مراجع
             ذی‌صلاح دولتی مطابقت دارد. همچنین، موافقت خود را با قرارداد کاربر و سیاست حفظ حریم خصوصی اعلام می‌دارم.
                در صورت بروز هرگونه مشکل یا وجود پرسش در خصوص این فرم، لطفاً با شماره 02191098999 تماس حاصل فرمایید.
            </p>
            <p className="text-xs text-center mt-4 mb-6">آیا حساب کاربری دارید؟<Link to={"/login"} className="text-[#ca7] hover:cursor-pointer hover:text-[#a85]">وارد شوید</Link></p>
        </div>
    )
}
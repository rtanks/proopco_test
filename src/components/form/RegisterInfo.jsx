import { motion } from "motion/react"
import { useContext, useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColonSign, faEnvelope, faEye, faEyeSlash, faPhone, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import {v4} from "uuid"
import { toolsContext } from "../../App";

export default function RegisterInfo({getCountry, country}) {
    const [show, setShow] = useState(false);
    const [optionalCode, setOptionalCode] = useState(false)
    const {getError} = useContext(toolsContext);

    const showPass = () => {
        if(show === false) {
            setShow(true);
        } else {
            setShow(false)
        }
    }
    const optionalCodeShow = () => {
        setOptionalCode(!optionalCode);
    }

    const schema = yup.object().shape({
        phone: yup.string().required("تکمیل گزینه شماره تلفن الزامی است"),
        email: yup.string().required("تکمیل گزینه ایمیل الزامی است").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "ایمیل وارد شده معتبر نیست"),
        password: yup.string().required("تکمیل گزینه رمز عبور الزامی است").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, "رمز عبور باید حداقل شامل یک حرف و یک عدد باشد.")
    })
    
    const {register, handleSubmit, reset, formState: {errors}} = useForm({resolver: yupResolver(schema)})
    
    useEffect(() => {
        getError(errors.email, errors.phone, errors.password)
    }, [errors])

    const onSubmitHandle = (data) => {
        getCountry({});
        reset();
        if(localStorage.getItem("user")) {
            localStorage.setItem("user",JSON.stringify([...JSON.parse(localStorage.getItem("user")),{id: v4(),phoneNumber: data.phone, email: data.email, password: data.password, country: country, challenge: []}]));
        } else {
            localStorage.setItem("user",JSON.stringify([{id: v4(),phoneNumber: data.phone, email: data.email, password: data.password, country: country, challenge: []}]));
        }
        location.pathname = "/login";
    }
    return (
        <motion.form action="#" onSubmit={handleSubmit(onSubmitHandle)} className="bg-white w-full h-[550px] p-1" initial={{height: 0}} animate={{height: country ? 550 : 100, transition: {duration: 0.5}}}>
           <p className="text-[0.65rem] mb-2"> شماره تلفن:</p>
           <div className="mb-3 flex flex-row justify-between items-center w-full h-10 p-1 border border-[#dfdfdf] rounded-lg text-[0.65rem]">
               <input {...register("phone")} type="text" placeholder="09121234567" className="text-left w-10/12 h-full p-2 outline-0 border-l border-l-[#dfdfdf]"/>
               <div className="text-gray-300 text-lg w-2/12 text-center">
                   <FontAwesomeIcon icon={faPhone}/>
               </div>
           </div>
           <p className="text-[0.65rem] mb-2">ایمیل:</p>
           <div className="mb-3 flex flex-row justify-between items-center w-full h-10 p-1 border border-[#dfdfdf] rounded-lg text-[0.65rem]">
               <input {...register("email")} type="text" placeholder="example@gmail.com" className="text-left w-10/12 h-full p-2 outline-0 border-l border-l-[#dfdfdf]"/>
               <div className="text-gray-300 text-lg w-2/12 text-center">
                   <FontAwesomeIcon icon={faEnvelope}/>
               </div>
           </div>
           <p className="text-[0.65rem] mb-2">رمز عبور:</p>
           <div className="mb-1 flex flex-row justify-between items-center w-full h-10 p-1 border border-[#dfdfdf] rounded-lg text-[0.65rem]">
               <input {...register("password")} type={show? "text": "password"} placeholder="رمز عبور" className="text-left w-10/12 h-full p-2 outline-0 border-l border-l-[#dfdfdf]"/>
               <div onClick={() => {showPass()}} className="text-gray-300 text-lg w-2/12 text-center hover:cursor-pointer">
                   <FontAwesomeIcon icon={show? faEyeSlash: faEye} />
               </div>
           </div>
           <p className="text-[#a97] text-[0.6rem]">رمز عبور باید شامل حروف انگلیسی واعداد باشد.</p>
           
           <div className="text-[0.65rem] w-full h-max mt-4 mb-6">
                <div className="w-full h-10 flex flex-row justify-between mb-2 items-center">
                    <span>آیا کد معرف دارید؟</span>
                    <div className={`w-12 rounded-xl h-6 flex flex-row items-center p-0.5 ${optionalCode? "justify-start bg-green-400": "justify-end bg-[#ddd]"}`}>
                        <div onClick={() => {optionalCodeShow()}} className="w-5 h-5 rounded-full bg-white"></div>
                    </div>
                </div>
                <div className={optionalCode ? "block": "hidden"}>
                    <div className="mb-1 flex flex-row justify-between items-center w-full h-10 p-1 border border-[#dfdfdf] rounded-lg text-[0.65rem]">
                       <input type="text" placeholder="کد معرف (اختیاری)" className="text-left w-10/12 h-full p-2 outline-0 border-l border-l-[#dfdfdf]"/>
                       <div className="text-gray-300 text-lg w-2/12 text-center hover:cursor-pointer">
                           <FontAwesomeIcon icon={faUserGroup} />
                       </div>
                    </div>
                </div>
           </div>
           
           <input type="submit" className="w-full rounded-lg bg-[#252527] mb-4 py-1 h-10 text-xs text-white hover:cursor-pointer border-0 outline-0" value={"ثبت نام و ادامه"}/>
          
           <p className="text-[0.65rem] text-center text-gray-400">با ثبت‌نام، بدین‌وسیله تأیید می‌نمایم که نام درج‌شده صحیح بوده و با اطلاعات شناسایی صادره از سوی مراجع
             ذی‌صلاح دولتی مطابقت دارد. همچنین، موافقت خود را با قرارداد کاربر و سیاست حفظ حریم خصوصی اعلام می‌دارم.
                در صورت بروز هرگونه مشکل یا وجود پرسش در خصوص این فرم، لطفاً با شماره 02191098999 تماس حاصل فرمایید.
            </p>
            <p className="text-xs text-center mt-4 mb-6">آیا حساب کاربری دارید؟
            <Link to={"/login"} className="text-[#ca7] hover:cursor-pointer hover:text-[#a85]">وارد شوید</Link>
            </p>
        </motion.form>
    )
}
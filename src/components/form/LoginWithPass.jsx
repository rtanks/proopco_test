import { faEye, faEyeSlash, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {motion} from "motion/react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { toolsContext } from "../../App"

export default function LoginWithPass({typeLog}) {
    const [show, setShow] = useState(false)
    const {changeLoginStatus,getError} = useContext(toolsContext);
    const navigate = useNavigate();

    const showPass = () => {
        if(show === false) {
            setShow(true);
        } else {
            setShow(false)
        }
    }
    const schema = yup.object().shape({
        phoneEmail: yup.string().required("تکمیل گزینه ایمیل یا شماره تلفن الزامی است"),
        password: yup.string().required("تکمیل گزینه رمز عبور الزامی است")
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});
    useEffect(() => {
        getError(errors.password, errors.phoneEmail)
    }, [errors])
    
    const onSubmitHandle = (data) => {
        let users = JSON.parse(localStorage.getItem("user"));
        let findUser = users.find(user => (user.password === data.password) && (user.email === data.phoneEmail || user.phoneNumber === data.phoneEmail))
        window.localStorage.setItem("userCurrent", JSON.stringify(findUser));
        changeLoginStatus()
        navigate("/dashboard")
    }
    return (
        <motion.form onSubmit={handleSubmit(onSubmitHandle)} className="bg-white w-full h-60" initial={{height: 0}} animate={{height: typeLog.type === "password"? 240 : 100, transition: {duration: 0.5}}}>
            <p className="text-xs mb-2">ایمیل یا شماره تلفن:</p>
            <div className="flex flex-row justify-between items-center w-full h-10 p-1 border border-[#dfdfdf] rounded-lg text-xs">
                <input {...register("phoneEmail")} type="text" placeholder="09121234567" className="text-left w-10/12 h-full p-2 outline-0 border-l border-l-[#dfdfdf]"/>
                <div className="text-gray-300 text-lg w-2/12 text-center">
                    <FontAwesomeIcon icon={faUserPlus} />
                </div>
            </div>

            <p className="text-xs mb-2">رمز عبور:</p>
            <div className="flex flex-row justify-between items-center w-full h-10 p-1 border border-[#dfdfdf] rounded-lg text-xs">
                <input {...register("password")} type={show? "text": "password"} placeholder="رمز عبور" className="text-left w-10/12 h-full p-2 outline-0 border-l border-l-[#dfdfdf]"/>
                <div onClick={() => {showPass()}} className="text-gray-300 text-lg w-2/12 text-center hover:cursor-pointer">
                    <FontAwesomeIcon icon={show? faEyeSlash: faEye} />
                </div>
            </div>
            
            <p className="text-xs text-center mt-4 mb-6">رمز عبور خود را فراموش کرده اید؟ <span className="text-[#ca7] hover:cursor-pointer hover:text-[#a85]">بازیابی رمز عبور</span></p>
            <button type="submit" className="w-full rounded-lg bg-[#252527] py-1 h-10 text-xs text-white hover:cursor-pointer">ورود</button>
        </motion.form>
    )
}
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav className="w-full h-20 px-3 bg-[#2225] backdrop-blur-[3px] flex justify-end items-center">
            <div className="text-white bg-[#ca7] h-10 flex flex-row items-center rounded-lg ">
                <Link to="login" className="px-3 hover:cursor-pointer relative before:absolute before:left-0 before:top-1 before:w-[1px] before:h-5/6 before:bg-white">ورود</Link>
                <Link to="register" className="px-3 ">عضویت</Link>
            </div>
        </nav>
    )
}
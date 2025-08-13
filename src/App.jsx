import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/form/Account"
import Login from "./components/form/Login"
import Register from "./components/form/Register"
import Dashboard from "./components/dashboard/Dashboard";
import { createContext, useState } from "react";


export const toolsContext = createContext();
export default function App() {
  const [login, setLogin] = useState(false);
  const [showError, setShowError] = useState({
        show: false,
        errors: []
    })
  const changeLoginStatus = () => {
    setLogin(prev => !prev)
  }
    const getError = (...error) => {
      if(error.every(item => item != undefined)) {
        setShowError({
          show: true,
          errors: [...error]
        }) 
        console.log(error)
      } 
    }
    const changeShowStatus = () => {
        setShowError(prev => ({
            show: !prev.show,
            errors: prev.errors
        })) 
    }
  return(
    <div className="w-full h-screen bg-[url('/public/bg.jpg')] bg-cover bg-no-repeat">
        <toolsContext.Provider value={{login, changeLoginStatus,showError, getError, changeShowStatus}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route element={<Account/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
              </Route>
              <Route path="dashboard" element={<Dashboard/>}/>
            </Routes>
            <Outlet/>
          </BrowserRouter>
        </toolsContext.Provider>
    </div>
  )
}
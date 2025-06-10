import { useEffect } from "react"
import axios from "./api/axiosConfig"
import { asyncGetUsers } from "../store/userActions"
import {useDispatch, useSelector} from "react-redux"
import Mainroutes from "./routes/Mainroutes"
import Nav from "./components/Nav"

const App = () => {
    
    return (
    <div className="px-[10%] text-white font-thin w-screen h-screen bg-blue-900">
           <Nav/>
        <Mainroutes>
         
        </Mainroutes>
        </div>);
}

export default App;
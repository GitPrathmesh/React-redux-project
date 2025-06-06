import { useEffect } from "react"
import axios from "./api/axiosConfig"
import { asyncGetUsers } from "../store/userActions"
import {useDispatch, useSelector} from "react-redux"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
    
    return (<div className="text-white font-thin w-screen h-screen bg-blue-900">
        
        <Mainroutes>
            
        </Mainroutes>
        </div>);
}

export default App;
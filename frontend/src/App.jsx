import Mainroutes from "./routes/Mainroutes"
import Nav from "./components/Nav"
import { useEffect } from "react";
import { asyncCurrentUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(asyncCurrentUser());
    },[])
    return (
    <div className="px-[10%] text-white font-thin w-screen h-screen bg-blue-900">
           <Nav/>
        <Mainroutes>
         
        </Mainroutes>
        </div>);
}

export default App;
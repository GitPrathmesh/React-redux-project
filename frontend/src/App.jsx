import { useEffect } from "react"
import axios from "./api/axiosConfig"
import { asyncGetUsers } from "../store/userActions"
import {useDispatch, useSelector} from "react-redux"

const App = () => {
    const data = useSelector((state) => state)
    const dispatch = useDispatch();

    console.log(data)
        
    useEffect(() => {
        dispatch(asyncGetUsers());
    }, [])
    return <div>Chaman</div>
}

export default App;
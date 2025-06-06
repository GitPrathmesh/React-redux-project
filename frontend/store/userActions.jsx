//Api call karna for data}
import axios from "../src/api/axiosConfig";
import { loadUser } from "./userSlice";

export const asyncGetUsers =()=> async (dispatch, getState) => {
    try {
        console.log("CurrentS State>>>>", getState());

        const res = await axios.get("/users");
      
        dispatch(loadUser(res.data));
    }
    catch (error) {
        console.log(error)
    }
};
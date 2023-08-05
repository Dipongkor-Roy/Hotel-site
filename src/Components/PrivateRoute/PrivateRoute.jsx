
import { Navigate, useLocation } from "react-router-dom";
import  UserContext, { AuthContext } from "../Contexts/UserContext";


 
const PrivateRoute = ({children}) => {
    const {user,loading}=UserContext(AuthContext);
    console.log(user)
    const location=useLocation();
    if(loading){
        return <div>Loading In process</div>
    }
    if(!user){
        return children;
    }
    return <Navigate to="/logIn" state={{from:location}} replace></Navigate>
   
};

export default PrivateRoute;
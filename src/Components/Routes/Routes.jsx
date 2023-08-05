import { createBrowserRouter } from "react-router-dom";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import SignleRoom from "../SignleRoom/SignleRoom";
import DoubleRoom from "../DoubleRoom/DoubleRoom";
import PremiumRoom from "../PremiumRoom/PremiumRoom";
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Mainpart from "../Layouts/Mainpart";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainpart></Mainpart>,
        children:[
            
            {
               path:'/logIn',
               element: <LogIn/>
            },
            {

               path:'/signUp',
               element: <SignUp/>
            },
            {
               path:'/singleRoom',
               element:<PrivateRoute><SignleRoom/></PrivateRoute> 
            },
            {
               path:'/doubleroom',
               element: <PrivateRoute><DoubleRoom/></PrivateRoute>
            },
            {
               path:'/premiumroom',
               element: <PrivateRoute><PremiumRoom/></PrivateRoute>
            },

        ]
    }
])
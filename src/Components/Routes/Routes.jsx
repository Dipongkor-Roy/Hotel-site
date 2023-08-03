import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import SignleRoom from "../SignleRoom/SignleRoom";
import DoubleRoom from "../DoubleRoom/DoubleRoom";
import PremiumRoom from "../PremiumRoom/PremiumRoom";



export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
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
               element: <SignleRoom/>
            },
            {
               path:'/doubleroom',
               element: <DoubleRoom/>
            },
            {
               path:'/premiumroom',
               element: <PremiumRoom/>
            },

        ]
    }
])
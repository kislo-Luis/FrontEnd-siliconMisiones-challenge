import { Navigate } from "react-router-dom"


 export const ProtectedRoutes=({children})=>{  
    
    if (!user){
        return   <Navigate to='/login'/>  
    }
    return children

}
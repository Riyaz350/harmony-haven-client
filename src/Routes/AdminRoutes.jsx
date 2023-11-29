import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useUserRole from "../Hooks/useUserRole";


const AdminRoutes = ({children}) => {
    const {user, loading} =useContext(AuthContext)
    const [userRole, roleLoading] = useUserRole()
    const location = useLocation()
    
    if(loading || roleLoading){
       return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && userRole == 'admin'){
        return children
    }
    return <Navigate to='/' state={{form: location}} replace></Navigate>
};

export default AdminRoutes;
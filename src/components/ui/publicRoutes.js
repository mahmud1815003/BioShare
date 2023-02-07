import { useNavigate, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";

export default function PublicRoute({ children }) {
    const isLoggedIn = useAuth();
    const navigate = useNavigate();
    const user = useSelector(state => state?.login?.user?.role);
    if(!isLoggedIn){
        return children;
    }else{
        if(user == 'patient'){
            return <Navigate to="/patient" />
        }else if(user == 'doctor'){
            return <Navigate to="/doctor" />
        }else if(user == 'staff'){
            return <Navigate to="/" />
        }else if(user == 'researcher'){
            return <Navigate to="/" />
        }else if(user == 'hospitaladmin'){
            return <Navigate to="/hospitaladmin" />
        }else if(user == 'admin'){
            return <Navigate to="/admin" />
        }else{
            return <Navigate to="/" />
        }
    }
}

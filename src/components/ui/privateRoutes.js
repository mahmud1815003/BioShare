import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Admin from "../../pages/Admin";
import Doctor from "../../pages/Doctor";
import Home from "../../pages/Home";
import HospitalAdmin from "../../pages/HospitalAdmin";
import Patinet from "../../pages/Patinet";

export default function PrivateRoute({ children }) {
    const isLoggedIn = useAuth();
    const user = useSelector(state => state?.login?.user?.role);
    console.log(isLoggedIn);
    console.log(user);
    if(isLoggedIn){
        if(user == 'patient'){
            return <Navigate to="/patient" />
        }else if(user == 'doctor'){
            console.log('Hello')
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
    }else{
        return <Navigate to="/" />
    }
}

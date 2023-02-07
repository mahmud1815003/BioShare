import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const PatientRoute = ({children}) => {
    const auth = useAuth();
    const role = useSelector(state => state.login?.user?.role);
    if(auth && (role == 'patient')){
        return children
    }else{
        return <Navigate to={'/'} />
    }
}

export default PatientRoute
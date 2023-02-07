import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Hospitals from './pages/Hospitals';
import Institues from './pages/Institues';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Patinet from './pages/Patinet';
import Doctor from './pages/Doctor';
import HospitalAdmin from './pages/HospitalAdmin';
import Admin from './pages/Admin';
import useAuthCheck from './hooks/useAuthCheck';
import PublicRoute from './components/ui/publicRoutes';
import PrivateRoute from './components/ui/privateRoutes';
import PatientRoute from './components/ui/PatientRoute';
import DoctorRoute from './components/ui/DoctorRoute';
import HospitalAdminRoute from './components/ui/HospitalAdmin';
import AdminRoute from './components/ui/Admin';
import Staff from './pages/Staff';

function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div>Checking Authentication</div>
  ) : (<div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/institues" element={<Institues />} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
        <Route path="/patient" element={<PatientRoute><Patinet /></PatientRoute>} />
        <Route path="/doctor" element={<DoctorRoute><Doctor /></DoctorRoute>} />
        <Route path="/hospitaladmin" element={<HospitalAdminRoute><HospitalAdmin /></HospitalAdminRoute>} />
        <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </BrowserRouter>
  </div>)
}

export default App;

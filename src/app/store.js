import { configureStore } from '@reduxjs/toolkit';
import api from '../redux/API/api';
import instituteSlice from '../redux/Instittute/instituteSlice';
import loginSlice from '../redux/Login/loginSlice';
import patientSlice from '../redux/Patient/patientSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    institutes: instituteSlice.reducer,
    login: loginSlice,
    patient: patientSlice,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(api.middleware);
  }
});

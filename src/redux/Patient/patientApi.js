import api from '../API/api';
import { addDoctors } from './patientSlice';

const patientApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addPatient: builder.mutation({
            query: (data) => ({
                url: '/patient/add',
                method: 'POST',
                body: data,
            }),
        }),
        addReport: builder.mutation({
            query: (data) => ({
                url: '/patient/add',
                method: 'POST',
                body: data,
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }),
        }),
        getPatientData: builder.query({
            query: () => '/patient/getPatient',
        }),
        getPatientsDoctors: builder.query({
            query: (medical) => `/patient/all`,
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result.data.doctors);
                    dispatch(
                        addDoctors({
                            doctors: result.data.doctors,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        getAppointment: builder.mutation({
            query: (data) => {
                return {
                    method: "POST",
                    url: "/patient/appointment",
                    body: data,
                }
            }
        })
    }),
});

export const {useAddPatientMutation, useGetPatientDataQuery, useGetPatientsDoctorsQuery, useAddReportMutation, useGetAppointmentMutation} = patientApi;
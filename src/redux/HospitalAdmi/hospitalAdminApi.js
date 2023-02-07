import api from '../API/api';

const instituteApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addDoctor: builder.mutation({
            query: (data) => ({
                url: '/hospitaladmin/doctor/add',
                method: 'POST',
                body: data,
            }),
        }),
        addStaff: builder.mutation({
            query: (data) => ({
                url: '/hospitaladmin/staff/add',
                method: 'POST',
                body: data,
            }),
        }),
        getHospitalInfo: builder.query({
            query: (email) => {
                return `/hospitaladmin/${email}`;
            },
        }),
        getHospitalDoctors: builder.query({
            query: (email) => {
                return `/hospitaladmin/doctors/:email`;
            }
        })
    }),
});

export const {useAddDoctorMutation, useAddStaffMutation, useGetHospitalInfoQuery, useGetHospitalDoctorsQuery} = instituteApi;
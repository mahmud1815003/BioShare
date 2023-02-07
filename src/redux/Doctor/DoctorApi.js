import api from '../API/api'
import { loggedInDoctor } from './DoctorSlice';

const doctorApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getDocInfo: builder.query({
            query: () => '/doctor/getDoctor',
            providesTags: ['getDoctors'],
        }),
        updateDoctor: builder.mutation({
            query: (data) => {
                return {
                    url: '/doctor/updatedoctor',
                    method: "POST",
                    body: data,
                }
            },
            async onQueryStarted(arg, {dispatch, queryFulfilled}){
                try{
                    await queryFulfilled;
                    dispatch(api.util.invalidateTags(['getDoctors']));
                }catch(error){

                }
            }
        })
    }),
});

export const {useGetDocInfoQuery, useUpdateDoctorMutation} = doctorApi;
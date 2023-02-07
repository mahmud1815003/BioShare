import api from '../API/api';

const hospitalApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addHospital: builder.mutation({
            query: (data) => ({
                url: '/hospital/add',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}){
                try{
                    await queryFulfilled;
                    dispatch(api.util.invalidateTags(['getHospital']));
                }catch(error){
                    console.log(error);
                }
            }
        }),
        getHospital: builder.query({
            query: () => '/hospital/all',
            providesTags: ['getHospital'],
        }),
    }),
});

export const {useAddHospitalMutation, useGetHospitalQuery} = hospitalApi;
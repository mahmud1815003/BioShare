import api from '../API/api';

const instituteApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addInstitute: builder.mutation({
            query: (data) => ({
                url: '/institues/add',
                method: 'POST',
                body: data,
            }),
        }),
        getInstitutes: builder.query({
            query: () => '/institues/all',
        }),
    }),
});

export const {useAddInstituteMutation, useGetInstitutesQuery} = instituteApi;
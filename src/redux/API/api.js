import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const api = createApi({
    reducerPath: 'hospital-api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_APP_SERVER,
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = getState()?.login?.accessToken;
            if (token) {
                headers.set("Authorization", `${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['getHospital', 'getDoctors'],
    endpoints: (builder) => ({}),
});

export default api;
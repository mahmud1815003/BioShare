import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    doctors: undefined,
    filer: "",
    tags: "",
};

const doctorSlice = createSlice({
    name: 'patient',
    initialState: initialState,
    reducers: {
        addDoctors: (state, action) => {
            state.doctors = action.payload.doctors;
        },
        addFilter: (state, action) =>{
            state.filter = action.payload;
        },
        addTags: (state, action) => {
            state.tags = action.payload;
        }
    }
});

export const { addDoctors, addFilter, addTags } = doctorSlice.actions;
export default doctorSlice.reducer;
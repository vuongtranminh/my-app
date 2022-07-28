import { createSlice } from '@reduxjs/toolkit';

const language = localStorage.getItem('language') !== null ? JSON.parse(localStorage.getItem('language')) : 'vi';

const initialState = {
    language,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            const language = action.payload;
            state.language = language;
            localStorage.setItem('language', JSON.stringify(state.language));
        },
    },
});

export const { setLanguage } = userSlice.actions;

export default userSlice.reducer;

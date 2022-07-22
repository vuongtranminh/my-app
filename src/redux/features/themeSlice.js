import { createSlice } from '@reduxjs/toolkit';

const themeMode =
    localStorage.getItem('themeMode') !== null ? JSON.parse(localStorage.getItem('themeMode')) : 'theme-mode-dark';

const initialState = {
    themeMode,
};

export const themeSlice = createSlice({
    name: 'themeMode',
    initialState,
    reducers: {
        setMode: (state, action) => {
            const themeMode = action.payload;
            state.themeMode = themeMode;
        },
    },
});

export const { setMode } = themeSlice.actions;

export default themeSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const theme = localStorage.getItem('theme') !== null ? JSON.parse(localStorage.getItem('theme')) : 'theme-mode-dark';

const initialState = {
    theme,
};

export const themeSlice = createSlice({
    name: 'themeMode',
    initialState,
    reducers: {
        setMode: (state, action) => {
            const theme = action.payload;
            state.theme = theme;
            localStorage.setItem('themeMode', JSON.stringify(state.theme));
        },
    },
});

export const { setMode } = themeSlice.actions;

export default themeSlice.reducer;

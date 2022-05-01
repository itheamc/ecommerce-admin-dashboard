/**
 * This is the themeSlice state.
 * To manage the theme - light and dark state
 */

import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial theme state
 */
const initialState = {
    value: 'light',
};


/**
 * Theme slice
 */
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        /**
         * Change theme
         */
        toggleTheme: (state, _) => {
            state.value = state.value === 'light' ? 'dark' : 'light';
        }
    }
});


/**
 * Export reducer actions
 */
export const { toggleTheme } = themeSlice.actions;


/**
 * Theme value selector
 */
export const themeValueSelector = (state) => state.theme.value;


/**
 * Finally Exporting the themeSlice itself
 */
export default themeSlice.reducer;
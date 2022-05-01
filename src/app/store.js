import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../states/theme/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice
  },
});

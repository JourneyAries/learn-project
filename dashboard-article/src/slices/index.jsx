import { configureStore } from '@reduxjs/toolkit';
import { articleReducer } from './article';

const store = configureStore({
	reducer: {
		articles: articleReducer,
	},
});

export { store };

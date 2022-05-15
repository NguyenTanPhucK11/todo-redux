import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../features/TodoList/reducers/todoSlice';

export default configureStore({
  reducer: {
    todo: todoSlice,
  },
});

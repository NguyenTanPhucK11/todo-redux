import { createSlice } from '@reduxjs/toolkit';

const initTodoList = [
  {
    id: 0,
    title: 'Eat',
    status: 'uncompleted',
  },
  {
    id: 1,
    title: 'Sleep',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Work',
    status: 'uncompleted',
  },
];

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initTodoList,
  reducers: {
    addTodo: (state, action) => {
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    },
    changeStatus: (state, action) => {
      const newState = [...state];

      newState[action.payload] = {
        ...newState[action.payload],
        status:
          newState[action.payload].status === 'completed'
            ? 'uncompleted'
            : 'completed',
      };
      return newState;
    },
  },
});

export const { addTodo, changeStatus } = todoSlice.actions;
export default todoSlice.reducer;

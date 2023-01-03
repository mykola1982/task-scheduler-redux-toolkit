//=============== Before ========================

// import { statusFilters } from './constants';

// Імпортуємо функцію композиції редюсерів
// import { combineReducers } from 'redux';

// const taskInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// Відповідає лише за оновлення властивості tasks
// Тепер значенням параметра state буде масив завдань

// const tasksReducer = (state = taskInitialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return [...state, action.payload];

//     case 'tasks/deleteTask':
//       return state.filter(task => task.id !== action.payload);

//     case 'tasks/toggleCompleted':
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       });
//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// Відповідає лише за оновлення властивості filters
// Тепер значенням параметра state буде об'єкт фільтрів

// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

//=============== After ========================//=============== Before ========================
// import { createReducer } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';
// import {
//   addTask,
//   deleteTask,
//   toggleCompleted,
//   setStatusFilter,
// } from './actions';

// const taskInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

//=============== After ========================//=============== Before ========================
// export const tasksReducer = (state = taskInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];

//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);

//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       });
//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case setStatusFilter.type:
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

//=============== After ========================
// export const tasksReducer = createReducer(taskInitialState, {
//   [addTask]: (state, action) => {
//     // return [...state, action.payload];

//     // ✅ Immer замінить це на операцію оновлення
//     state.push(action.payload);
//   },

//   [deleteTask]: (state, action) => {
//     // return state.filter(task => task.id !== action.payload);

//     // ✅ Immer замінить це на операцію оновлення
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index, 1);
//   },

//   [toggleCompleted]: (state, action) => {
//     // return state.map(task => {
//     //   if (task.id !== action.payload) {
//     //     return task;
//     //   }
//     //   return {
//     //     ...task,
//     //     completed: !task.completed,
//     //   };
//     // });

//     // ✅ Immer замінить це на операцію оновлення

//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//       }
//     }
//   },
// });

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     // return {
//     //   ...state,
//     //   status: action.payload,
//     // };

//     // ✅ Immer замінить це на операцію оновлення

//     state.status = action.payload;
//   },
// });

// Нам більше не потрібний файл reducer.js, тому що під кожен слайс ми створимо окремий файл.
// Для слайсу завдань це буде файл tasksSlice.js.

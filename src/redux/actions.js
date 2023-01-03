//=============== Before ========================

// import { nanoid } from 'nanoid';

// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };

// export const deleteTask = taskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };

//=============== After ========================
// import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// export const addTask = createAction('tasks/addTask', text => {
//   return {
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// });

// export const deleteTask = createAction('tasks/deleteTask', taskId => {
//   return {
//     payload: taskId,
//   };
// });

// export const toggleCompleted = createAction('tasks/toggleCompleted', taskId => {
//   return {
//     payload: taskId,
//   };
// });

// export const setStatusFilter = createAction(
//   'filters/setStatusFilter',
//   value => {
//     return {
//       payload: value,
//     };
//   }
// );

// Генератори екшенів тепер створюються автоматично для кожного слайсу.
// Це означає, що нам більше не потрібно вручну оголошувати їх в окремому файлі.createAction().
// Ми можемо видалити файл actions.js та оновити імпорти генераторів екшенів у файлах компонентів.
// Структура файлів проекту тепер буде виглядати так.

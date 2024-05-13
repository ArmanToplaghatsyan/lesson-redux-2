import { data } from './state';

export const taskReduser = (state = data, action: any) => {
  state = { ...state };

  switch (action.type) {
    case 'addTask':
      state.tasks.push(action.payload);
      break;
    case 'deleteTaskById':
      state.tasks = state.tasks.filter((elm) => elm.id != action.payload);
      break;
    // case 'findUserById':
    //   const us = state.users.find((elm) => elm.id == action.payload);
    //   if (us) {
    //     state.user = us;
    //   }
    //   break

    case 'changeDone':
      const task = state.tasks.find((elm) => elm.id == action.payload);
      if(task){
        task.done = !task.done
      }
      break;
  }
  return state;
};
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITask } from '../../type/type';
import { deleteTaskById } from '../../store/task/action';

export const Tasks: React.FC = React.memo((): JSX.Element => {
 const {tasks} = useSelector((state: any) =>state.task)
 console.log(tasks);
 
 const dispatch = useDispatch()
 
  return (
    <div>
      <h2>To Do List: </h2>
      {
        tasks.map((elm: ITask) => {
          return(
          <div key={elm.id}>
            <p>Name:</p>
            <h3>- {elm.name}.</h3>
            <p>Description:</p>
            <h4>- {elm.description}.</h4>
            <button onClick={() => dispatch(deleteTaskById(elm.id))}>&times;</button>
            <button>Done</button>
          </div>
          )
        })
      }
    </div>
  );
});

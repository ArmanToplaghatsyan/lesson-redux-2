import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/task/action';
import { ITask } from '../../type/type';
import './style.scss'

export const AddTask: React.FC = React.memo((): JSX.Element => {
 const dispatch = useDispatch()
 
 
  const {register, handleSubmit, reset, formState: {errors}} = useForm<ITask>()
 const save = (data: ITask):void => {
  dispatch(addTask({...data, id: Date.now()}))
  console.log(data);
  reset();
 }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit(save)}>
      <h2>Add Tasks</h2>
      <label>name</label>
      <br />
       <input placeholder='name' {...register('name', {required: 'Enter name'})}></input>
       {errors.name && <p>{errors.name.message}</p>}
       <br /><br />

       <label>description</label>
      <br />
       <input placeholder='description' {...register('description', {required: 'Enter description'})}></input>
       {errors.description && <p>{errors.description.message}</p>}
       <br /><br />
       <button>save</button>
      </form>
    </div>
  );
});

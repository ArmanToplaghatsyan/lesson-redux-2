import { ITask } from "../../type/type";

export const addTask = (payload: ITask) => {
    return({type: 'addTask', payload})
}

export const deleteTaskById = (payload: number) => {
    return({type: 'deleteTaskById', payload})
}

export const changeDone = (payload: number) => {
    return({type: 'changeDone', payload})
    
    
}


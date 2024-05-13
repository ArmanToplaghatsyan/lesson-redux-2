import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITask } from "../../type/type";
import { deleteTaskById, changeDone } from "../../store/task/action";
import "./style.scss";

export const Tasks: React.FC = React.memo((): JSX.Element => {
    const { tasks } = useSelector((state: any) => state.task);
    console.log(tasks);

    const dispatch = useDispatch();

    return (
        <div className="tasks">
            <h2>To Do List: </h2>
            {tasks.map((elm: ITask) => {
                return (
                    <div key={elm.id}>
                        <p>Name: - {elm.name}.</p>
                        <p className={elm.done == true ? "line-through" : ""}>
                            Description: - {elm.description}.
                        </p>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width={30}
                                onClick={() => dispatch(changeDone(elm.id))}
                            >
                                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width={30}
                                onClick={() => dispatch(deleteTaskById(elm.id))}
                            >
                                <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                            </svg>
                        </div>
                    </div>
                );
            })}
        </div>
    );
});

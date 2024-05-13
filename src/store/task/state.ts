import { ITask } from "../../type/type";

export const data: { tasks: ITask[], task: ITask } = {
    tasks:[
        {id: 1, name: "Design", description: "It's first project 'bout style", done: true},
        {id: 2, name: "Theatre", description: "It's second project 'bout art", done: false},
        {id: 3, name: "Cooking", description: "It's second project 'bout cooking", done: false},
        {id: 4, name: "Programming", description: "It's first project 'bout codeing", done: false},
        {id: 5, name: "Couching", description: "It's fifth project 'bout teaching", done: true},
        {id: 6, name: "Medicine", description: "My congratilations! It's last project bout medicine", done: false},
    ],
    task :{} as ITask
    
}
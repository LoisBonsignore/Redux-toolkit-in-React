import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],
    reducers: {
        addTask: (state, action) => {
            // { type: "todo/addTask", payload: "Passer l'aspirateur"}
            const newTask = {
                id: Date.now(),
                done: false,
                text: action.payload
            }

            state.push(newTask);
        },
        toggleTask: (state, action) => {
            // { type: "todo/toggleTask", payload: 20 } // le payload correspond à l'id de la tache
            const task = state.find(t => t.id === action.payload);
            task.done = !task.done;
        },
        deleteTask: (state, action) => {
            // { type: "todo/deleteTask", payload: 20 }
            state = state.filter(t => t.id !== action.payload); // ne garder que les taches ne correspondant pas à action.payload(içi 20)
            return state;
        },
    }
});

export const { addTask, deleteTask, toggleTask } = todoSlice.actions;

// store global
export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
})

// action creator
/* export const createToggle = (id) => {
    return {
        type: "todo/toggleTask",
        payload: id,
    }
} */
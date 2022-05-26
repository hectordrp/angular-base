interface ToDo {
    id: number;
    text: string;
};

export interface AppState { 
    // AppState is the root of the application state tree.
    todos: ToDo[];
    currentTodo: ToDo;
}
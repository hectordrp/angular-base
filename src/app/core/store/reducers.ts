import { actions } from './actions';
import { AppState } from './app-state';

export interface Action {
    type: string;
    payload?: any;
}

export interface Reducer<T> {
    (state: T, action: Action): T;
}

export const storeReducers: Reducer<AppState> = (state: any = {}, action: Action): AppState => {
    switch (action.type) {
      case actions.add:
        return {
          ...state,
          todos: [...state.todos, action.payload.todo],
          currentTodo: {...action.payload.todo}
        };
      case actions.update:
        const filtered = state.todos.filter((c:any) => c.id !== action.payload.currentTodo.id);
        return {
          ...state,
          todos: [...filtered, action.payload.todo],
          currentTodo: {...action.payload.todo}
        };
      case actions.remove:
        const todos = state.todos.filter((c:any) => c.id !== action.payload.todo.id);
        return {
          ...state,
          todos
        };
      default:
        return state;
    }
  };
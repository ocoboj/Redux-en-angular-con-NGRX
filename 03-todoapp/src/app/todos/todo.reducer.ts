import { createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from './models/todo.model';



export const estadoInicial: Todo[] = [
  new Todo ('Comprar'),
  new Todo ('Limpiar '),
  new Todo ('Descansar'),
  new Todo ('Cocinar')
];

const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo( texto)]),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
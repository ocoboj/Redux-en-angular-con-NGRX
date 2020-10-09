import { createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, multiplicar, dividir } from './contador.actions';

// Crear estado inicial de la app o del reducer
export const initialState = 20;

//Crear una función privada con el reducer (es el ActionReducer)
const _contadorReducer = createReducer(initialState,
    on(incrementar, state => state + 1),
    on(decrementar, state => state - 1),
    on(multiplicar, ( state, { numero } ) => state * numero ),
    on(dividir, ( state, { numero } ) => state / numero)
);

//crear la funci´-on que estamos exportando, recibe el state y el action
//va a utilizar el reducer que creamos.
export function contadorReducer(state, action) {
    return _contadorReducer(state, action);
}
//Definimos el sotre
import { Action, Reducer } from './ngrx-fake/ngrx';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction, mutiplicarAction } from './contador/contador.actions';


class Store<T> {

    /* private state: T; */

    constructor(private reducer: Reducer<T>,
        private state: T) {

        /* this.state = state; */
    }

    getState() {
       return this.state;
    }

    dispatch( action: Action) {

        this.state = this.reducer( this.state, action);
    }
}

const store = new Store( contadorReducer, 10);

console.log(store.getState());

store.dispatch(incrementadorAction);
console.log(store.getState());

store.dispatch(mutiplicarAction);
console.log(store.getState());
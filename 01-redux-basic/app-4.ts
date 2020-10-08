//libreria redux
import { createStore, Store } from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction, mutiplicarAction } from './contador/contador.actions';

const store: Store = createStore( contadorReducer);

//subscribir a los cambios que sucedan en el store
store.subscribe(() => {
    console.log('Subs: ', store.getState());
})



store.dispatch(incrementadorAction);
store.dispatch(mutiplicarAction);


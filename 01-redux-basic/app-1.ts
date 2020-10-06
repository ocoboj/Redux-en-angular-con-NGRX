
//Crear una accion (dice lo que tiene que hacer)
interface Action {
    type: string;
    payload?: any;
}

//Para utilizar action creamos una constante
/* const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}; */

//Action se usará en un reducer que recibe 2 paramatros(state, action)
//Reducer debe regresar siempre un estado
function reducer( state = 10, action: Action ) {

    if (action.type === 'INCREMENTAR') {
        return state += 1;
    }
    
    return state;
}

//Usar el reduce
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};
console.log(reducer(10, incrementadorAction));
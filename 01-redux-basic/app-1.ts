
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
function reducer(state = 10, action: Action) {

    /*   if (action.type === 'INCREMENTAR') {
          return state += 1;
      }
       */

    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;

        case 'DECREMENTAR':
            return state -= 1;

        case 'MUTIPLICAR':
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;

        default:
            return state;
    }

}

//Usar el reduce
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};
console.log(reducer(10, incrementadorAction)); //11

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};
console.log(reducer(10, decrementadorAction)); //9

const mutiplicarAction: Action = {
    type: 'MUTIPLICAR',
    payload: 2
};
console.log(reducer(10, mutiplicarAction)); //20

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
};
console.log(reducer(10,dividirAction)); //5
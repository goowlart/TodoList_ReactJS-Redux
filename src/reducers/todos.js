export default function todos(state = [], action) {
    // { type: 'ADD_TODO', text: 'Fazer café' }

    switch (action.type) {
        case 'ADD_TODO':
            // addiciona novo todo 
            return [ ...state, {
                id: Math.random(),
                text: action.text,
            }]
        default:
          return state;
        }
    
}

//{todos:[],}
const { createStore } = require('redux');
const initialState = {
    count: 10
};
function rootReducer(state = initialState, action) {
    newState = { ...state }
    switch (action.type) {
        case 'INCREMENT':
            newState.count += action.payload;
            return newState;
        case 'DECREMENT':
            newState.count -= action.payload;
            return newState;
        default:
            return newState;
    }
}

const store = createStore(rootReducer);
store.subscribe(() => { console.log("Store: " + JSON.stringify(store.getState())) });

store.dispatch({ type: 'INCREMENT', payload: 5 });
store.dispatch({ type: 'INCREMENT', payload: 10 });
store.dispatch({ type: 'INCREMENT', payload: 25 });
store.dispatch({ type: 'INCREMENT', payload: 15 });
store.dispatch({ type: 'DECREMENT', payload: 35 });
store.dispatch({ type: 'DECREMENT', payload: 25 });
store.dispatch({ type: 'DECREMENT', payload: 45 });


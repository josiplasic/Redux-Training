import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ({ resetCount = 0} = {}) => ({
    type: 'RESET',
    resetCount
});

const setCount = ({count = 101} = {}) => ({
    type: 'SET',
    count
});

const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {

        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };

        case 'RESET':
            return {
                count: action.resetCount
            };

        case 'SET':
            return {
                count: action.count
            }
            
        default: 
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 10}));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount());
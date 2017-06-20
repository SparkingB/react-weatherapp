const { WeatherApp, reducers } = window.App;
const { createStore, combineReducers, applyMiddleware } = Redux;
const { Provider } = ReactRedux;


const thunkMiddleware = ({ dispatch, getState }) => {
    return (next) => (action) => {
        if (typeof action === 'function') {
            console.log("thunkMiddleware");
            return action(dispatch, getState);
        }
        return next(action);
    };
};

const composedReducer = combineReducers(reducers);
const store = createStore(
    composedReducer,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <WeatherApp />
    </Provider>,
    document.getElementById('app')
);

import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import CFAApp from './CFAApp';
import cfaApp from './reducers';

const store = createStore(cfaApp);

class App extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <CFAApp />
                </Provider>
            </div>
        )
    }
}

ReactDOM.render(<App />, content);

/*
0D0A0B
454955
F3EFF5
72B01D
3F7D20
*/

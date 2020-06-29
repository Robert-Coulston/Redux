import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import counter_reducer from './store/reducers/counter_reducer';
import result_reducer from './store/reducers/result_reducer';
import {Provider} from 'react-redux';


const root_reducer = combineReducers({counterReducer: counter_reducer, resultReducer: result_reducer})
const store = createStore(root_reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

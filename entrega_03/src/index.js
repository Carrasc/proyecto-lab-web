import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

import Amplify from 'aws-amplify';
import config from './aws-exports';
import { Provider } from 'react-redux';
import store from './store';

Amplify.configure(config)

const Application = () => (
    <Provider store ={store}>
        <App/>
    </Provider>
)

ReactDOM.render(<Application />, document.getElementById('root'));
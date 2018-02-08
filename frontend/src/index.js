import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

//root component
import App from './components/App';

//for testing backend routes on window
import axios from 'axios';
window.axios = axios;

ReactDOM.render(<App />, document.getElementById('root'));

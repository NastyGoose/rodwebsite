import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import bootstrap from  'react-bootstrap';
import FormContainer from "../src/components/container/FormContainer";



import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

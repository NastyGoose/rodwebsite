import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import bootstrap from 'react-bootstrap';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import './css/reset.css';
import './css/common.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();

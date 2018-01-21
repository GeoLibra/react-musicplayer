import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import './css/reset.css';
import './css/common.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();

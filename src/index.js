import focusVisible from 'focus-visible';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

console.log('focusVisible: ', focusVisible);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

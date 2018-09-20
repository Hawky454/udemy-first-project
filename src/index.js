import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import Footer from './components/Footer/Footer';

ReactDOM.render(<App title="Vid Trent & His Delerium Tremens"/>, document.getElementById('root'));
ReactDOM.render(<Footer title="Vid Trent & His Delerium Tremens"/>, document.getElementById('footer'));
registerServiceWorker();

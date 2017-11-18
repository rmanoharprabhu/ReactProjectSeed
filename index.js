import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import Stateless from './containers/Stateless';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Stateless />, document.getElementById('stateless'));

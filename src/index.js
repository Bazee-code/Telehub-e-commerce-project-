import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// local
import {ProductProvider} from './components/Context.js';

ReactDOM.render(
	<ProductProvider>
		<App />
	</ProductProvider>
	, document.getElementById('root'));


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
// import IndexProvider from "./app/IndexProvider";
// import services from "./app/config/services";

// import "./index.scss";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<BrowserRouter basename="/">
		<Switch>
			<Route
				path="/" // ? => unnecessary
				render={() => <App />}
			/>
		</Switch>
	</BrowserRouter>
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>
);

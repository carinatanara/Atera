import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';
import express, { Request, Response } from 'express';

const container = document.getElementById('root');
if (!container) {
	throw new Error('Root container missing in index.html');
}
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// const app = express();
// app.get();

// const PORT = 3000;
// app.listen(PORT, () => {
// 	console.log(`server started at http://localhost:${PORT}`)
// }); 


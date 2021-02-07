import React, { useState } from 'react';
import Form from './Form';
import ToDoListData from '../data';
import Items from './Items';

export default function App(props) {
	const [todo, setTodo] = useState(ToDoListData);

	return (
		<div className="app-wrapper">
			<header>
				<h1>Rosa's To Do App</h1>
			</header>
			<Form />
			<Items />
		</div>
	);
}

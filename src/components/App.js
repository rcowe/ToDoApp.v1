import React, { useState } from 'react';
import Form from './Form';
import ToDoListData from '../data';
import Items from './Items';

export default function App(props) {
	// useState to display the items in a ul
	const [todo, setTodo] = useState(ToDoListData);
	// useState to grab input data and render in ul input --> todo
	const [input, updateInput] = useState([]);

	return (
		<div className="app-wrapper">
			<header>
				<h1>Rosa's To Do App</h1>
			</header>
			<Form
				setTodo={setTodo}
				todo={todo}
				updateInput={updateInput}
				input={input}
			/>
			<Items todo={todo} setTodo={setTodo} />
		</div>
	);
}

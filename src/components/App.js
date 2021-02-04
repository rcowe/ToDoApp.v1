import React, { useState } from 'react';
import Form from './Form'

export default function App(props) {
	const [todo, setTodo] = useState('');



	return <div className="app-wrapper">
		<header>
			<h1>
				Rosa's To Do App
			</h1>
		</header>
		<Form />
	</div>;
}

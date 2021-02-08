import React from 'react';
import _uniqueId from 'uniqid';

export default function Form({ updateInput, setTodo, todo, input }) {
	// const inputTextHandler = e => {
	// 	console.log(e.target.value);
	// 	updateInput(e.target.value);
	// };

	const handleChange = e => {
		updateInput(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setTodo([...todo, { id: _uniqueId(), title: input, completed: false }]);
		console.log(input);
		updateInput('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				id="input"
				value={input}
				type="text"
				className="input-line"
			/>
			{/*<button onClick={handleSubmit} className="input-submit" type="submit">*/}
			{/*	+*/}
			{/*</button>*/}
			<input className="input-submit" type="submit" value="+" />
			<div className="selection-drop">
				<select className="filtering">
					<option value="all"> See All Items </option>
					<option value="completed"> Completed Items </option>
					<option value="deleted"> Deleted Items </option>
				</select>
			</div>
		</form>
	);
}

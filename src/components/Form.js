import React from 'react';
import _uniqueId from 'uniqid';

export default function Form({ updateInput, setTodo, todo, input }) {
	const handleChange = e => {
		updateInput(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setTodo([...todo, { id: _uniqueId(), title: input, completed: false }]);
		// console.log(input);
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
			<input className="input-submit" type="submit" value="+" />
		</form>
	);
}

import React from 'react';

export default function SingleItem({ todo, todos, title, completed, setTodo }) {
	const handleDelete = () => {
		setTodo(todo.filter(el => el.id !== todos.id));
		console.log(todos);
	};
	const handleComplete = () => {
		setTodo(
			todo.map(item => {
				if (item.id === todos.id) {
					return {
						...item,
						completed: !item.completed
					};
				}
				return item;
			})
		);
	};

	return (
		<div className="todo">
			<li
				key={todo.id}
				className={`single-item ${todos.completed ? 'completed' : ''}`}
			>
				{title.toString()}
			</li>
			<button onClick={handleComplete} className="complete-btn">
				COMPLETE
			</button>
			<button onClick={handleDelete} className="delete-btn">
				DELETE
			</button>
		</div>
	);
}

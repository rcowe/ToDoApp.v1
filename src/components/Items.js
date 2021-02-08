import React from 'react';
import SingleItem from './SingleItem';

export default function Items({ todo, setTodo }) {
	return (
		<div className="container-items">
			<ul className="todo-items">
				{todo.map(todos => {
					return (
						<SingleItem
							key={todos.id}
							todos={todos}
							todo={todo}
							setTodo={setTodo}
							title={todos.title}
							completed={todos.completed}
						/>
					);
				})}
			</ul>
		</div>
	);
}

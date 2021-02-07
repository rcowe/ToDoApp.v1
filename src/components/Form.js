import React from 'react';

export default function Form(props) {
	return (
		<form>
			<input type="text" className="input-line" />
			<button className="input-submit" type="submit">
				+
			</button>
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

import React, {useState} from 'react';
import './PartItem.css';

const putPartsQuantityURL = 'http://localhost:5555/parts/';

export function PartItem(props) {
	const [inputValue, setInputValue] = useState(null);

	function onInputChange(e: Event) {
		setInputValue(e.target.value);
	}

	function onSave(id) {
		if (!isNaN(inputValue)) {
			const requestOptions = {
				method: 'PUT',
				body: JSON.stringify({quantity: inputValue})
			};
			fetch(`${putPartsQuantityURL}${id}`, requestOptions)
				.then(resp => {
					if (resp.ok) {
						console.log('succesfully put to', id);
						return resp.json();
					}
				});
		}
	}

	return (
		<div className="PartItem_root">
			<div className="PartItem_name">
				{props.file_name}
			</div>
			<div className="PartItem_inputAndSave">
				<input 
					className="PartItem_input" 
					onChange={(e: Event) => onInputChange(e)}
					placeholder="Quantity">
				</input>
				<button className="PartItem_button" onClick={() => onSave(props.id)}>Save</button>
			</div>
		</div>
	);
}
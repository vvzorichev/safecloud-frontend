import React from 'react';
import Checkbox from '../checkbox';

const FileListItem = ({ file = {} }) => {
	const { id, name, size, type, date_added } = file;

	return (
		<tr>
			<td>
				<Checkbox id={id}/>
			</td>
			<td>{name}</td>
			<td>{size}</td>
			<td>{type}</td>
			<td>{date_added}</td>
		</tr>
	);
};

export default FileListItem;
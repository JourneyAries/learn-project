import React from 'react';

const Table = ({ data, config, keyFn }) => {
	const renderHeader = config.map((column) => {
		return <th key={keyFn}>{column.label}</th>;
	});

	const renderRows = data.map((rowData) => {
		const renderCell = config.map((column) => {
			return <td>{column.render(rowData)}</td>;
		});
		return <tr key={keyFn(rowData)}>{renderCell}</tr>;
	});

	return (
		<table id='dtables'>
			<thead>
				<tr>{renderHeader}</tr>
			</thead>
			<tbody>{renderRows}</tbody>
		</table>
	);
};

export default Table;

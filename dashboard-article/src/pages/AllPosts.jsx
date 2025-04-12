import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import { useSelector } from 'react-redux';
import Action from '../components/Action';

const AllPosts = () => {
	const [tab, setTab] = useState('all');
	const tabs = [
		{ title: 'All', value: 'all' },
		{ title: 'Publish', value: 'publish' },
		{ title: 'Draft', value: 'draft' },
		{ title: 'Trashed', value: 'trashed' },
	];

	const data = useSelector((state) => {
		if (tab === 'all') {
			return state.articles.data;
		}
		const datas = state.articles.data.filter((item) => item.status === tab);
		return datas;
	});

	const configs = [
		{
			label: 'Title',
			type: 'Text',
			render: (item) => item.title,
		},
		{
			label: 'Category',
			type: 'Text',
			render: (item) => item.category,
		},
		{
			label: 'Status',
			type: 'Text',
			render: (item) => item.status,
		},
		{
			label: 'Action',
			type: 'Text',
			render: (item, handleEdit, handleDelete) => (
				<Action handleEdit={handleEdit} handleDelete={handleDelete} />
			),
		},
	];

	const keyFn = (item) => {
		return item.id;
	};

	return (
		<div className='app'>
			<Navbar />
			<div className='layout'>
				<div className='header'>
					<div className='flex-row gap-12'>
						{tabs.map((item) => {
							return (
								<div
									className={`tab ${tab === item.value ? 'tab-active' : ''}`}
									onClick={() => setTab(item.value)}>
									{item.title}
								</div>
							);
						})}
					</div>
				</div>
				<div className='dynamicTable'>
					<div className='table'>
						<div className='tableHeader'>
							<div className='title'>Article</div>
						</div>
						<div className='tableContent'>
							<Table data={data} config={configs} keyFn={keyFn} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllPosts;

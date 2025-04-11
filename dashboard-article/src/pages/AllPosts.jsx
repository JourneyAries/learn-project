import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const AllPosts = () => {
	const [tab, setTab] = useState('all');
	const tabs = [
		{ title: 'All', value: 'all' },
		{ title: 'Published', value: 'published' },
		{ title: 'Draft', value: 'draft' },
		{ title: 'Trashed', value: 'trashed' },
	];

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
			</div>
		</div>
	);
};

export default AllPosts;

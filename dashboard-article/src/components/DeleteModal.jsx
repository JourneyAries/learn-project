import React from 'react';

const DeleteModal = () => {
	return (
		<div className='modalContainer'>
			<div className='modal flex-col gap-16'>
				<div className='title'>Delete</div>
				<div className='text'>Are you sure to delete this modal?</div>
				<div className='flex-row gap-16'>
					<button className='flex-1 button-cancel'>Cancel</button>
					<button className='flex-1 button-submit'>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteModal;

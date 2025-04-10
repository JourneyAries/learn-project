import React from 'react';

const ProjectItems = ({ title, backgroundImg, tech, projectUrl }) => {
	return (
		<div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-slate-600 rounded-xl group hover:bg-white hover:scale-[1.05] ease-in-out duration-500'>
			<img
				className='rounded-xl group-hover:opacity-10'
				src={backgroundImg}
				alt={title}
			/>
			<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
				<h2 className='text-2xl text-slate-600 font-black text-center tracking-wider'>
					{title}
				</h2>
				<h2 className='pb-4 pt-2 text-slate-600 font-black text-center'>
					{tech}
					<a href={projectUrl} target='_blank'>
						<p className='text-center py-3 rounded-lg bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)] font-sora cursor-pointer font-bold text-lg hover:shadow-md hover:shadow-slate-500 duration-500 ease-in'>
							Go To Demo
						</p>
					</a>
				</h2>
			</div>
		</div>
	);
};

export default ProjectItems;

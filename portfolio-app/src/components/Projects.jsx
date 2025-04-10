import React from 'react';
import ProjectItems from './ProjectItems';
import ProjectBackground from '../assets/project-unsplash1.jpg';

const Projects = () => {
	return (
		<div id='projects' className='w-full'>
			<div className='flex flex-col'>
				<div className='text-[20px] md:text-[40px] font-sora text-[#fbfbfb] md:leading-[72px]'>
					What I have Build
				</div>
			</div>
			<div className='grid p-8 md:p-12 md:grid-cols-2 gap-8'>
				{/* Project Items */}
				<ProjectItems
					title='Youtube Clone'
					backgroundImg={ProjectBackground}
					projectUrl='https://youtube.com'
					tech='React JS'
				/>
				<ProjectItems
					title='Youtube Clone'
					backgroundImg={ProjectBackground}
					projectUrl='https://youtube.com'
					tech='React JS'
				/>
				<ProjectItems
					title='Youtube Clone'
					backgroundImg={ProjectBackground}
					projectUrl='https://youtube.com'
					tech='React JS'
				/>
				<ProjectItems
					title='Youtube Clone'
					backgroundImg={ProjectBackground}
					projectUrl='https://youtube.com'
					tech='React JS'
				/>
			</div>
		</div>
	);
};

export default Projects;

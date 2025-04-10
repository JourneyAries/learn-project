import React from 'react';
import { globe, instagram, twitter, facebook } from '../assets/svg/svg';
import iconPortofolio from '../assets/icon-portofolio.png';

const Main = () => {
	return (
		<div id='home' className='py-[30px] flex flex-col'>
			<div className='font-sora font-bold md:text-[56px] text-[24px] md:leading-[72px] md:tracking-[1px] w-full md:w-[80%] bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)] text-transparent bg-clip-text'>
				Hi I'm Aries, a software engineer with various programming language and
				little curiosity
			</div>

			<div className='flex flex-col md:flex-row gap-[30px] md:gap-[35px] md:mt-[69px]'>
				<div className='flex-[2]'>
					<div className='text-[15px] md:text-[28px] font-sora text-[#d6d6d6] md:leading-[72px]'>
						What I do
					</div>
					<div className='text-[10px] md:text-[18px] text-[#d6d6d6] mb-[36px] md:mb-0'>
						Create the computer applications that allow users to do specific
						tasks and the underlying systems that run the devices or control
						networks. I also do Freelance and teach programming in youtube.
					</div>
				</div>

				<div className='flex flex-col md:flex-row gap-[30px] flex-[3]'>
					<div className='relative flex flex-col items-center px-3 pt-8 pb-4 w-full md:w-[262px] bg-[#323443] rounded-[12px] hover:scale-110 transition-transform duration-300 ease-in-out'>
						<div className='absolute top-[-36px] p-[1px] rounded-full bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)]'>
							<div className='bg-[#3a3636] p-[17px] rounded-full'>{globe}</div>
						</div>
						<div className='font-sora text-white text-[16px] font-semibold leading-[72px] tracking-[1px]'>
							Freelance
						</div>
						<div className='text-slate-400 text-[14px] tracking-[1px] leading-6 text-center'>
							Most of the freelance work I take is as a frontend engineer, but
							also open for opportunity
						</div>
					</div>

					<div className='relative flex flex-col items-center px-3 pt-8 pb-4 w-full md:w-[262px] bg-[#323443] rounded-[12px] hover:scale-110 transition-transform duration-300 ease-in-out'>
						<div className='absolute top-[-36px] p-[1px] rounded-full bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)]'>
							<div className='bg-[#3a3636] p-[17px] rounded-full'>{globe}</div>
						</div>
						<div className='font-sora text-white text-[16px] font-semibold leading-[72px] tracking-[1px]'>
							Content Creator
						</div>
						<div className='text-slate-400 text-[14px] tracking-[1px] leading-6 text-center'>
							Teach various programming language in youtube. The channel called
							Kenapa Coding.
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col md:flex-row mt-[35px] md:mt-[45px]'>
				<div className='flex md:items-start items-center justify-center md:justify-normal gap-3'>
					<div className='md:w-[159px] md:h-[159px] w-[50px] rounded-full bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)] flex justify-center items-center'>
						<div className='md:w-[157px] md:h-[157px] w-[49px] rounded-full bg-[#3a3636]'>
							<img src={iconPortofolio} alt='icon-portofolio' />
						</div>
					</div>
				</div>
				<div className='flex flex-col ml-2 md:ml-9 mr-5 flex-1 max-w-[499px]'>
					<div className='text-[15px] md:text-[28px] font-sora text-[#fbfbfb] md:leading-[72px]'>
						Life Goals
					</div>
					<div className='text-[10px] md:text-[18px] text-[#d6d6d6]'>
						My greatest mission or life goal is to share every knowledge I have
						acquired for the benefit of the development of technology human
						resources in Indonesia
					</div>
				</div>
				<div className='md-[35px] md:mt-3 md:ml-[86px] flex flex-col gap-3'>
					<div className='font-sora text-[15px] md:text-[28px] text-[#fbfbfb] md:leading-[72px]'>
						Lets Connect
					</div>
					<div className='flex gap-[17px]'>
						<div className='hove:scale-[150%] ease-in-out duration-300 cursor-pointer'>
							{instagram}
						</div>
						<div className='hove:scale-[150%] ease-in-out duration-300 cursor-pointer'>
							{twitter}
						</div>
						<div className='hove:scale-[150%] ease-in-out duration-300 cursor-pointer'>
							{facebook}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;

import React from 'react';
import ProjectBackground from '../assets/project-unsplash1.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contacts = () => {
	return (
		<div id='contacts' className='w-full text-[#fbfbfb]'>
			<div className='flex flex-col'>
				<div className='text-[20px] md:text-[40px] font-sora text-[#fbfbfb] md:leading-[72px]'>
					Get in Touch
				</div>
			</div>
			<div className='m-auto p-4 w-full font-sora'>
				<div className='grid p-4 lg:grid-cols-5 gap-8'>
					{/* left */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl bg-[#323443] rounded-xl p-4'>
						<div className='lg:p-4 h-full'>
							<div>
								<img
									className='rounded-xl hover:scale-105 ease-in duration-300'
									src={ProjectBackground}
								/>
							</div>
							<div className='font-poppins'>
								<h2 className='py-2 text-white font-bold text-2xl'>Aries</h2>
								<p>Full Stack Engineer</p>
								<p className='py-4'>
									I am available for freelance or full time positions. contact
									me and lets talk.
								</p>
							</div>
							<div>
								<p className='uppercase pt-8 font-poppins'>Connect with me</p>
								<div className='flex items-center justify-between py-4'>
									<a href='#'>
										<div className='rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaLinkedin />
										</div>
									</a>
									<a href='#'>
										<div className='rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaGithub />
										</div>
									</a>
									<a href='#'>
										<div className='rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
											<AiOutlineMail />
										</div>
									</a>
									<a href='#'>
										<div className='rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
											<BsFillPersonLinesFill />
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* right */}
					<div className='col-span-3 w-full h-auto bg-[#323443] rounded-xl lg:p-4'>
						<div className='p-4'>
							<form
								className='text-black'
								action='https://getform.io/f/bkkyznmb'
								method='POST'
								encType='multipart/form-data'
								target='_blank'>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-white text-sm py-2'>
											Name
										</label>
										<input
											className='border-2 rounded-lg p-3 flex border-slate-300 outline-bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)] bg-white'
											type='text'
											name='name'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-white text-sm py-2'>
											Phone Number
										</label>
										<input
											className='border-2 rounded-lg p-3 flex border-slate-300 outline-bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)] bg-white'
											type='text'
											name='phone'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-white text-sm py-2'>
										Email
									</label>
									<input
										className='border-2 rounded-lg p-3 flex border-slate-300 outline-bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)] bg-white'
										type='text'
										name='email'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-white text-sm py-2'>
										Subject
									</label>
									<input
										className='border-2 rounded-lg p-3 flex border-slate-300 outline-bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)] bg-white'
										type='text'
										name='subject'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-white text-sm py-2'>
										Message
									</label>
									<textarea
										className='border-2 rounded-lg p-3 flex border-slate-300 outline-bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)] bg-white'
										rows={10}
										name='message'
									/>
								</div>
								<button
									className='w-full p-4 bg-[linear-gradient(134deg,#3bf686_50.75%,#4ca9ff_90.52%)] mt-4 rounded-xl'
									type='submit'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;

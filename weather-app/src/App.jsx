import { useState } from 'react';
import { PUBLIC_ASSET } from './utils/public-assets';

function App() {
	return (
		<>
			<div className='flex h-screen justify-center items-center'>
				<div className='bg-night h-[600px] w-[500px] rounded-[10px] p-8'>
					<div className='flex justify-between items-center gap-3'>
						<input
							className='bg-white py-2 px-4 rounded-full text-[14px] text-slate-400 w-full outline-none focus:shadow-lg focus:shadow-slate-500'
							type='text'
							placeholder='Search'
							name=''
							id=''
						/>
						<div className='bg-white rounded-full p-2 hover:scale-110 cursor-pointer'>
							<svg
								className='text-slate-400 w-[20px]'
								data-name='Layer 1'
								fill='currentcolor'
								id='Layer_1'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<title />
								<path d='M16.57,16.15A9,9,0,1,0,15,17.46h0l6.25,6.25,1.42-1.42Zm-3-.14a7.07,7.07,0,1,1,1.56-1.28A6.88,6.88,0,0,1,13.59,16Z' />
							</svg>
						</div>
					</div>
					<div className='flex justify-center mt-5'>
						<img
							width={150}
							height={150}
							src='/assets/04d.png'
							alt=''
						/>
					</div>
					<div className='flex justify-center mt-1 text-[70px] text-white'>
						25 &deg;C
					</div>
					<div className='mt-[-10px] text-white flex flex-col justify-center items-center'>
						<div className='text-[40px] font-bold'>Washington</div>
						<div className='text-[24px]'>Precipitations</div>
						<div className='flex gap-6'>
							<span>Min: 25 &deg;C</span>
							<span>Max: 27 &deg;C</span>
						</div>
					</div>
					<div className='mt-10 p-4 relative rounded-full flex justify-between'>
						<div className='absolute top-0 rigth-0 left-0 bottom-0 bg-[#001026] opacity-30 w-full rounded-full'></div>
						<div className='flex z-10 text-white gap-2 text-[16px]'>
							<img src={PUBLIC_ASSET.weather.rain} />
							<span>90%</span>
						</div>
						<div className='flex z-10 text-white gap-2 text-[16px]'>
							<img src={PUBLIC_ASSET.weather.humidity} />
							<span>90%</span>
						</div>
						<div className='flex z-10 text-white gap-2 text-[16px]'>
							<img src={PUBLIC_ASSET.weather.wind} />
							<span>90km/h</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

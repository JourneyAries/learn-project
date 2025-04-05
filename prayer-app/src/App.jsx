import { useState } from 'react';
import bgPray from './assets/bg-pray.jpg';
import { useEffect } from 'react';

function App() {
	const [input, setInput] = useState('');
	const [term, setTerm] = useState('Jakarta');
	const [data, setData] = useState({});

	useEffect(() => {
		fetch(
			`https://api.aladhan.com/v1/timingsByAddress/01-01-2025?address=${term}`,
		)
			.then((res) => res.json())
			.then((res) => setData(res));
	}, [term]);

	return (
		<div className='h-screen flex flex-col gap-5 bg-pray bg-cover bg-center justify-center items-center'>
			<div className='flex flex-col w-full justify-between items-center gap-3 absolute top-5'>
				<div className='w-full flex justify-between px-[70px] text-[#e3e6e3]'>
					<div>
						<div>Wednesday</div>
						<div>25 Jan, 2024</div>
					</div>
					<div>Jakarta</div>
				</div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setTerm(input);
						setInput('');
					}}>
					<input
						className='bg-white focus:shadow-lg w-[250px] py-2 px-4 rounded-full text-[14px] text-slate-400 outline-0'
						type='text'
						placeholder='Search Prayer by City'
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<input type='submit' value='' />
				</form>
			</div>
			<div>
				<ul className='w-[200px] bg-[#0d0d0d] flex flex-col rounded-xl py-2'>
					<li className='odd:text-[#26a767] even:text-[#dbdbd9] flex justify-between p-2'>
						<div>Fajr</div>
						<div className='font-bold'>04.30</div>
					</li>
					<li className='odd:text-[#26a767] even:text-[#dbdbd9] flex justify-between p-2'>
						<div>Fajr</div>
						<div className='font-bold'>04.30</div>
					</li>
					<li className='odd:text-[#26a767] even:text-[#dbdbd9] flex justify-between p-2'>
						<div>Fajr</div>
						<div className='font-bold'>04.30</div>
					</li>
					<li className='odd:text-[#26a767] even:text-[#dbdbd9] flex justify-between p-2'>
						<div>Fajr</div>
						<div className='font-bold'>04.30</div>
					</li>
					<li className='odd:text-[#26a767] even:text-[#dbdbd9] flex justify-between p-2'>
						<div>Fajr</div>
						<div className='font-bold'>04.30</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;

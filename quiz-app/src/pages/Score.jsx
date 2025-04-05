import React from 'react';

const Score = ({ score, setDisplay, setIndex }) => {
	const handleClick = () => {
		setDisplay('review');
		setIndex(0);
	};
	return (
		<div className='h-full p-[15px] flex flex-col items-center justify-center'>
			<div className='text-copper text-center font-alfa text-[100px]'>
				YOUR SCORE
			</div>
			<div className='rounded-[280px] w-[280px] h-[280px] border-[6px] border-english-lavender font-alfa text-[120px] flex justify-center items-center text-pastelPink'>
				{Math.floor(score.score)}
			</div>
			<div className='flex gap-[100px] font-alfa text-english-lavender text-[28px]'>
				<div>True: {score.true}</div>
				<div>False: {score.false}</div>
			</div>
			<div
				onClick={handleClick}
				className='cursor-pointer flex mt-4 font-alfa text-[32px] bg-copper text-pastelPink p-2 border-pastelPink border-[6px] hover:scale-110 hover:text-white hover:border-white '>
				Review Answer
			</div>
		</div>
	);
};

export default Score;

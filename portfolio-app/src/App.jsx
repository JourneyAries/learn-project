import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
	return (
		<div
			id='porto'
			className='px-[30px] md:px-[100px] w-full bg-black-2 flex flex-col'>
			<Navbar />
			<div className='mt-[70px] md:mt-[100px]'>
				<hr className='bg-[#4d4d4d] border-none h-[1px]' />
				<Main />
				<hr className='bg-[#4d4d4d] border-none h-[1px]' />
				<About />
				<hr className='bg-[#4d4d4d] border-none h-[1px]' />
				<Skills />
				<hr className='bg-[#4d4d4d] border-none h-[1px]' />
				<Projects />
				<hr className='bg-[#4d4d4d] border-none h-[1px]' />
				<Contacts />
			</div>
		</div>
	);
}

export default App;

import { Routes, Route } from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import Edit from './pages/Edit';
import Preview from './pages/Preview';
import AllNew from './pages/AllNew';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<AllPosts />} />
				<Route path='/edit' element={<Edit />} />
				<Route path='/new' element={<AllNew />} />
				<Route path='/preview' element={<Preview />} />
			</Routes>
		</>
	);
}

export default App;

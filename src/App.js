import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ReviewDetails from './pages/reviewDetails';
import HomePage from './pages/homePage'
import Images from './pages/images'

import Header from './components/header';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route exact path='/' element={<HomePage />}> </Route>

					<Route path='/tests/:id' element ={<ReviewDetails />}></Route>

					<Route path='/uploads/:id' element={<Images />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyClHuaAaaSiD95wC48ewEs7s4NzFTp4jf8';
//create a new components. this components produce some html
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}
//take this components generated HTML and put in the page dom
ReactDom.render(<App />, document.querySelector('.container'));
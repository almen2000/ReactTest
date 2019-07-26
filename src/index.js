import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBY6YAitZeDnhv1TYoJx7NDbfMVT93pNTY';

// Create w new component.
// This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// Take this component's generated HTML
// and put it on the page(int the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

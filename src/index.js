import React from 'react';
import ReactDOM from 'react-dom';

// Create w new component.
// This component should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}


// Take this component's generated HTML
// and put it on the page(int the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

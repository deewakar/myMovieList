import React from 'react';

import './App.css';
import Searchbar from './components/search-with-dropdown-options/Search';
const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchCategory, setSearchCategory] = React.useState('');
  return (<div className="App">
            <Searchbar searchTermSetter={setSearchTerm} searchCatSetter={setSearchCategory}/>
              <div>Searching for {searchTerm} under {searchCategory}</div>
          </div>
         );
};

export default App;

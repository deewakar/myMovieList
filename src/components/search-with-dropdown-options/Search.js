import React from 'react';
import './Search.css'

const Searchbar = (props) => {
  const selectOption = React.useRef(null);
  const [placeHolder, setPlaceHolder] = React.useState('Search ...');

  const searchHandler = (e) => {

    if(e.key === "Enter"){
      console.log(e.target.value);
      props.searchTermSetter(e.target.value);
      props.searchCatSetter(selectOption.current.value);
    }
      
  };


  const searchFocus = (e) => {
    const options = {'actor': 'e.g. "Tom Hanks"',
                     'director': 'e.g. "George Miller"',
                     'genre': 'e.g. "Horror"',
                     'daterange': 'e.g. "1952-2002"',
                    };

    setPlaceHolder(options[selectOption.current.value]);
  }

  return (
    <div className="searchform">
      <div className="custom-select" >
        <select id="select" ref={selectOption}>
          <option value="actor">By Actor</option>
          <option value="genre">By Genre</option>
          <option value="director">By Director</option>
          <option value="daterange">By Date range</option>
        </select>
      </div>
      <input id="searchinput" type="text" placeholder={placeHolder} onFocus={searchFocus} onKeyUp={searchHandler}></input>
    </div>
  );
};

export default Searchbar;

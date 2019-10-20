import React from 'react';

const Option = (props) => {
    return (<div id={
        'searchBar'+props.id
    } className="search-option">{props.name}</div>)
}


export default Option
import React from 'react';


const CategoryOption = (props) => {
    return ( 
        <React.Fragment>
            <option value={props.value} >{props.value}</option> 
        </React.Fragment>
    )
}

export default CategoryOption;
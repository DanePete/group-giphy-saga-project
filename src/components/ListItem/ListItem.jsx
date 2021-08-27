import React from 'react';

const ListItem = ({search}) => {
    console.log('serach url', search);
    return (
        <li>
            <img src={search.images.original.url} alt={search.title}/>
        </li> 
    )
}

export default ListItem;
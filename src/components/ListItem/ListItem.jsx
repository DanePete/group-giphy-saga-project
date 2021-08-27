import React from 'react';
import { search } from '../../../server/routes/favorite.router';


const ListItem = ({search}) => {

    return (
        <li>
            <img src={search.url} alt={search.title}/>
        </li> 
    )
}
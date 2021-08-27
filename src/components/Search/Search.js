import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GiphList from '../GiphList/GiphList';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [newSearch, setNewSearch] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        console.log('got here?!');
        console.log('Add new search', newSearch.search_query);

        setNewSearch({
            search_query: ''
        })

        dispatch({
            type: 'CREATE_NEW_SEARCH',
            payload: newSearch
        })
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="add-search-form">
            <input
                required
                placeholder="Search for Something"
                value={newSearch.search_query}
                onChange={(event) => setNewSearch(
                    // ...newSearch,
                    event.target.value
                )}
            />
        {/* <input type="submit" value="search" /> */}
        <button type="submit">
          Search
        </button>
        </form>
        <GiphList />
        </>
    )
}
export default SearchForm; 
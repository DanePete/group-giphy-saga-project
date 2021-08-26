import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [newSearch, setNewSearch] = useState({
        search_query: ''
    })

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Add new search', newSearch);

        setNewSearch({
            search_query: ''
        })

        dispatch({
            type: 'CREATE_NEW_SEARCH',
            payload: newSearch
        })
    };

    return (
        <form on Submit={handleSubmit} className="add-search-form">
            <input
                required
                placeholder="Search for Something"
                value={newSearch.search_query}
                onChange={(event) => setNewSearch({
                    ...newSearch,
                    search_query: event.target.value
                })}
            />
        <button type="submit">
            Search
        </button>
        </form>
    )
}
export default SearchForm; 
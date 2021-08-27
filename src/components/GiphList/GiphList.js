import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import ListItem from '../ListItem/ListItem';

function GiphList() {
    const giphList = useSelector(store => store.giphList);
    const dispatch = useDispatch();

    return (
        <>
        <h1>GOT HERE YO</h1>
        <ul>
            {giphList.data?.map((search, index) => {
                return (
                    <ListItem 
                        key={index}
                        search={search}
                    />
                )
            })}
        </ul>
        </>
    )
}
export default GiphList;

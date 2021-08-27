import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import ListItem from '../ListItem/ListItem'

function SearchList() {
    const searchList = useSelector(store => store.giphList);
    const dispatch = useDispatch();

let exampleData = [{url:"https://giphy.com/gifs/cheeseburger-burger-king-food-sEjcayPGhu1Xi", title:"burger1"}, 
                    {url:'https://giphy.com/gifs/shakingfoodgifs-food-shaking-efgsSvAvMjOpy', title:"burger2"}];



return (
    <ul>
        {searchList.map((search, index) => (
          <ListItem key={index} search={search}/> 
        ))}
    </ul>

    
)




}
export default SearchList
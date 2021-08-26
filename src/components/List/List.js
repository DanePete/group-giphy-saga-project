import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

function SearchList() {
    const searchList = useSelector(store => store.searchList);
    const dispatch = useDispatch();

let exampleData = [{url:"https://giphy.com/gifs/cheeseburger-burger-king-food-sEjcayPGhu1Xi", title:"burger1"}, 
                    {url:'https://giphy.com/gifs/shakingfoodgifs-food-shaking-efgsSvAvMjOpy', title:"burger2"}];



return (
    <ul>
        {searchList.map((search, index) => 
          <li key={index}>{search.search_query}</li> 
        )}
    </ul>

    
)




}
export default SearchList
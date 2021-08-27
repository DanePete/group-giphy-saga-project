import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

function GiphList() {
    const giphList = useSelector(store => store.giphList);
    const dispatch = useDispatch();
    console.log("giphList", giphList);
let exampleData = [{url:"https://giphy.com/gifs/cheeseburger-burger-king-food-sEjcayPGhu1Xi", title:"burger1"}, 
                    {url:'https://giphy.com/gifs/shakingfoodgifs-food-shaking-efgsSvAvMjOpy', title:"burger2"}];



return (
    <>
    <h1>GOT HERE YO</h1>
    <ul>
        {giphList.data?.map((search, index) => {


            // REPLACE CURRENT RETURN WITH COMMENTED Out RETURN ONCE WE HAVE THE INDIVIDuAL COMPONENT  

            // return (
            //     <ListItem 
            //         data={search}
            //     />
            // )
            return (
                <li key={index}>{search.url}</li> 
            )
        })}
    </ul>
    </>
    
)




}
export default GiphList;

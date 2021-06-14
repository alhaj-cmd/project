import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
// const event = [
   
//     {
//         name:'Marks Full Cream Milk Powder Foil',
//         pic:'https://i.ibb.co/4PxkND8/image-32.png'
//     },
//     {
//         name:'Moushum Bay Leaves- 200gm',
//         pic:'https://i.ibb.co/1Z93Pp7/image-33.png'
//     },
//     {
//         name:'Onion Local - 1 Kg',
//         pic:'https://i.ibb.co/C77ysrX/image-34.png'
//     },
//     {
//         name:'Rashid Minicate Rice - 50 Kg',
//         pic:'https://i.ibb.co/d5czwgr/image-35.png'
//     },
    
//     {
//         name:'Omera LPG Refill 12 KG',
//         pic:'https://i.ibb.co/MgZpH2z/image-36.png'
//     },
//     {
//         name:'Bombay Sweets Mr.Twist– 25 gm',
//         pic:'https://i.ibb.co/fpvJBNn/image-37.png'
//     },
//     {
//         name:'Lifeboy Soap Bar Tota - 100 gm',
//         pic:'https://i.ibb.co/txnDGkq/image-38.png'
//     },
//     {
//         name:'Ruchi BBQ Chanachur - 350 gm',
//         pic:'https://i.ibb.co/nwVfhYy/image-39.png'
//     },
//     {
//         name:'Parachute Coconut Oil - 200ml',
//         pic:'https://i.ibb.co/wpmV5gf/image-40.png'
//     }
// ];

const Home = () => {
    const [events,setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])

    return (
        <div className='row'>
            {
                events.map(event =><Event event={event}></Event> )
            }
            
        </div>
    );
};

export default Home;
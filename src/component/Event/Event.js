import React, {useEffect,useState} from 'react';

const Event = ({event}) => {
   //console.log(event);
    return (
        <div className="card col-md-4">
           
              <img  className='img-fluid' src={event.imageURL} alt=''/>
              <h5>{event.name}</h5>
              <h6>$ {event.price} <button onClick={[]}>Buy Now</button></h6>   
        
        </div>
    );
};

export default Event;
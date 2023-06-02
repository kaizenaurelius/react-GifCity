
import React from 'react';
import ShareSocial from './ShareSocial';

const GifItem = ({ title, url, id}) => {
    return (

            <div className='card'>

            <img src= { url } alt={title}/>
            <p> { title } </p>

            <ShareSocial 
                url={ url }
            />
            </div>
              
    )

};

export default GifItem;
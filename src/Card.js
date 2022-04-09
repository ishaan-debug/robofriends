import React from 'react';

const Card= (props) => {
    const {name ,email,id} =props;
    return(
        <div className='bg-light-blue shadow-5 dib pa3 br3 ma2 grow bw2 tc f5'>
            <img alt="robot" src={`https://robohash.org/${id}?200x200`}/>
            <div>
            <p>{name}</p>
            <h2>{email}</h2>
            </div>
        </div>
    );
}
export default Card ;
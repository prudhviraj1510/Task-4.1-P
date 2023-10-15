import React from 'react';
import './Card.css';
import { AiFillStar } from 'react-icons/ai';

const Card = (props) => {
  return (
    <div className='column'>
      <div className='fa'>
      <img  src={props.image} alt='' />
      </div>
      <h3>{props.name}</h3>
      <h4>{props.description}</h4>

      <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
        <AiFillStar size={22} color={'orange'} className='star' />
        <p>{props.star}</p>
      </div>
    </div>
  );
};
export default Card;

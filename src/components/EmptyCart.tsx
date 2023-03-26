import React from "react";
import emptyCartImg from '../assets/emptycart.png'
import {Link} from "react-router-dom";

export const EmptyCart: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>Cart is empty</h2>
      <p>
        You didn't buy anything yet
        <br />
        Go to the main page to actually buy something?
      </p>
        <img src={emptyCartImg} alt='empty cart'/>
        <Link to='/' className='button button--black'>
            <span>Go back</span>
        </Link>
    </div>
  );
};

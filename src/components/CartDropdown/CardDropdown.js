import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart-selectors';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';

function CartDropDown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))
        }
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);

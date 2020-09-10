import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';

function CartDropDown({ history, cartItems, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?
            cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            )) :
            <div className="empty-message">Your cart is empty</div>
        }
      </div>
      <CustomButton
        onClick={() => {
          history.push('checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));

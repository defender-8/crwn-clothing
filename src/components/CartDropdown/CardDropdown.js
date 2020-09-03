import React from 'react';

import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';

function CartDropDown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
}

export default CartDropDown;

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase-utils';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartIsHidden } from '../../redux/cart/cart-selectors';

import { ReactComponent as Logo } from '../../assets/img/crown.svg';

import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropdown/CardDropdown';
import './Header.scss';

function Header({ currentUser, isHidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {
        isHidden ? null : <CartDropDown />
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartIsHidden,
});

export default connect(mapStateToProps)(Header);

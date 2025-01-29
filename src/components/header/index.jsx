import { useMemo, useState } from 'react';

// Components
import Cart from '../cart/index';

// Styles
import * as Styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import UserActionTypes from '../../redux/user/action-types';
import { loginUser, logoutUser } from '../../redux/user/actions';
import { selectProductsCount } from '../../redux/cart/cart.selectors';

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const dispatch = useDispatch();

  const productsCount = useSelector(selectProductsCount)

  const handleCartClick = () => {
    setCartIsVisible(true);
  };
  const handleLoginClick = () => {
    dispatch(loginUser({ name: 'Lucas', email: 'teste' }));
  };
  const handleLogOutClick = () => {
    dispatch(logoutUser());
  };
  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogOutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;

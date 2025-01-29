// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
import CartItem from "../cart-item";
import { selectTotalPrice } from "../../redux/cart/cart.selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const { products} = useSelector((rootReducer) => rootReducer.cartReducer);
const productsTotalPrice = useSelector(selectTotalPrice)
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.length && products.map((product) => (
          <CartItem product={product} />
        ))}
        <Styles.CartTotal>Total: R${productsTotalPrice}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;

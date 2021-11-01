import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageLayout from '../../components/PageLayout';
import { CartContext } from '../../core/context/CartContext';

const CartItemsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const CardItem = styled.article`
  width: 300px;
  padding: 8px;
  margin: 0 8px 16px 8px;
  border: 1px solid black;
`;

const CardItemCover = styled.img`
  width: 50px;
  height: 50px;
`;

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cart) {
      const total = cart.reduce((acc, curr) => {
        acc += curr.product.price * curr.quantity;
        return acc;
      }, 0);
      setTotalAmount(total);
    }
  }, [cart]);

  return (
    <PageLayout>
      <h1>Mon panier</h1>

      {cart.length > 0 ? (
        <>
          <CartItemsContainer>
            {cart.map((item) => (
              <CardItem key={item.product.id}>
                <CardItemCover
                  src={item.product.cover}
                  alt={item.product.name}
                />
                <h1>{item.product.name}</h1>
                <p>{item.quantity}</p>
                <div>
                  <button
                    onClick={() => {
                      removeFromCart(item.product);
                    }}
                  >
                    Supprimer
                  </button>
                </div>
              </CardItem>
            ))}
          </CartItemsContainer>
          <div>Montant: {totalAmount}</div>
        </>
      ) : (
        <section>
          <p>Votre panier est vide</p>
          <p>
            <Link to="/menu">Consulter la liste des produits</Link>
          </p>
        </section>
      )}
    </PageLayout>
  );
}

export default Cart;

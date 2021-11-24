import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageLayout from '../../components/PageLayout';
import { AuthContext } from '../../core/context/AuthContext';
import { CartContext } from '../../core/context/CartContext';
import { useHistory } from 'react-router';
import CommandApi from '../../core/api/command.api';

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
  width: 100px;
  height: 100px;
`;

function Cart() {
  const history = useHistory();
  const { isLogged, username } = useContext(AuthContext);
  const { cart, removeFromCart } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (cart) {
      const total = cart.reduce((acc, curr) => {
        acc += curr.product.price * curr.quantity;
        return acc;
      }, 0);
      setTotalAmount(total);
    }
  }, [cart]);

  const onValidCart = () => {
    if (isLogged) {
      const productOrderList = cart.map((item) => ({
        unitPrice: item.product.price,
        quantity: item.quantity,
        productId: item.product.id,
      }));

      CommandApi.create({
        user: username,
        productOrderList: productOrderList,
      });
    } else {
      history.push('/connexion');
    }
  };

  return (
    <PageLayout>
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
                <div className="flex felx-row m-4">
                  <p>quantité: {item.quantity} </p> &nbsp;
                  <p>prix unitaire: {item.product.price} €</p>
                </div>

                <div className="">
                  <button
                    className="bg-black text-white  border-2 rounded-md px-2 mx-4"
                    onClick={() => {
                      removeFromCart(item.product);
                    }}
                  >
                    Supprimer
                  </button>
                  <button
                    className="bg-white text-black  border-2 rounded-md px-2 mx-4"
                    onClick={() => {
                      addToCart(item.product);
                    }}
                  >
                    ajouter
                  </button>
                </div>
              </CardItem>
            ))}
          </CartItemsContainer>
          <div className="p-2">
            Total : {totalAmount} €
            <button
              className=" flex justify-center bg-green-500 text-black border-2 p-2"
              onClick={() => {
                onValidCart();
              }}
            >
              Valider votre panier
            </button>
          </div>
        </>
      ) : (
        <section className="bg-image">
          <p className="text-2xl text-blue-900 font-semibold text-center p-4">
            Votre panier est vide
          </p>
        </section>
      )}
      <p className="text-2xl text-blue-900 font-semibold text-center">
        <Link to="/menu">Voir la liste des produits</Link>
      </p>
    </PageLayout>
  );
}

export default Cart;

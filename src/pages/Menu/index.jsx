import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import PageLayout from '../../components/PageLayout';
import { CartContext } from '../../core/context/CartContext';
import productListMock from '../../datas/productListMock';
import Filter from './components/Filter';
import { FilterContext } from './context/FilterContext';

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
`;

const PageContentContainer = styled.section`
  display: flex;
`;

const PageContent = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 12px;
`;

const ProductCard = styled.article`
  width: 300px;
  padding: 8px 12px;
  margin: 0 8px 16px 8px;
  border: 1px solid black;
`;

const ProductCover = styled.img`
  width: 50px;
  height: 50px;
`;

function Menu() {
  const [productList, setProductList] = useState([]);
  const { categories, minPrice, maxPrice } = useContext(FilterContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setProductList(productListMock);
  }, []);

  useEffect(() => {
    let products = productListMock;
    products = filterByCategory(categories, products);
    products = filterByMinPrice(minPrice, products);
    products = filterByMaxPrice(maxPrice, products);

    setProductList(products);
  }, [categories, minPrice, maxPrice]);

  /**
   *
   * @param {*} categoryList
   * @param {*} products
   * @returns
   */
  const filterByCategory = (categoryList, products) => {
    if (categoryList) {
      let newProductList = products;
      if (categoryList.length > 0) {
        newProductList = products.filter((product) => {
          return categoryList.includes('' + product.categoryId);
        });
      }
      return newProductList;
    }
    return products;
  };

  /**
   *
   * @param {*} price
   * @param {*} products
   * @returns
   */
  const filterByMinPrice = (price, products) => {
    if (price) {
      const newProductList = products.filter(
        (product) => product.price >= price
      );
      return newProductList;
    }
    return products;
  };

  /**
   *
   * @param {*} price
   * @param {*} products
   * @returns
   */
  const filterByMaxPrice = (price, products) => {
    if (price) {
      const newProductList = products.filter(
        (product) => product.price <= price
      );
      return newProductList;
    }
    return products;
  };

  return (
    <PageLayout>
      <PageTitle>Un savoir faire artisanal</PageTitle>
      <PageContentContainer>
        <Filter></Filter>
        <PageContent>
          {productList.map((product) => {
            return (
              <ProductCard key={product.id}>
                <header>
                  <ProductCover src={product.cover} alt={product.name} />
                  <div>{product.name}</div>
                </header>
                <p>description here</p>
                <p>prix: {product.price}</p>
                <div>
                  <button
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Ajouter
                  </button>
                </div>
              </ProductCard>
            );
          })}
        </PageContent>
      </PageContentContainer>
    </PageLayout>
  );
}
export default Menu;

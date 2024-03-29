import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import PageLayout from '../../components/PageLayout';
import ProductApi from '../../core/api/product.api';
import { CartContext } from '../../core/context/CartContext';
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
  //width: 50px;
  //height: 50px;
`;

function Menu() {
  const [baseProductList, setBaseroductList] = useState([]);
  const [productList, setProductList] = useState([]);
  const { categories, minPrice, maxPrice } = useContext(FilterContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    ProductApi.findAll().then((data) => {
      console.log(data);
      setBaseroductList(data);
      setProductList(data);
    });
  }, []);

  useEffect(() => {
    let products = baseProductList;
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
      <PageTitle className="text-black font-semibold">
        Un savoir faire artisanal
      </PageTitle>
      <PageContentContainer className="">
        <Filter></Filter>
        <PageContent className="m-2">
          {productList.map((product) => {
            return (
              <ProductCard key={product.id} className="rounded">
                <header className="">
                  <ProductCover
                    src={product.cover}
                    alt={product.name}
                    className="align-center"
                  />
                  <div className="font-serif flex items-center justify-center underline">
                    {product.name}
                  </div>
                </header>
                <p className="px-4">Description here</p>
                <p className="px-4">Prix: {product.price} €</p>
                <div>
                  <button
                    className="w-20 flex justify-center bg-white text-black mx-16 border-2 rounded-md px-2"
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

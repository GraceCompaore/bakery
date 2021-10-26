import { useContext } from 'react';
import styled from 'styled-components';
import { FilterContext } from '../../context/FilterContext';
import Categories from '../Categories';

const Content = styled.aside`
  flex-shrink: 0;
  width: 150px;
  padding: 8px;
`;

const Filter = () => {
  const { setMinPrice, setMaxPrice } = useContext(FilterContext);

  const handleMinPriceChange = (value) => {
    setMinPrice(value);
  };

  const handleMaxPriceChange = (value) => {
    setMaxPrice(value);
  };

  return (
    <Content>
      <Categories></Categories>
      <h3>Par tranche de prix</h3>
      <div>
        <label htmlFor="min-price">Min</label>
        <input
          type="number"
          id="min-price"
          placeholder="Min price"
          onChange={(e) => {
            handleMinPriceChange(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="max-price">Max</label>
        <input
          type="number"
          id="max-price"
          placeholder="Max price"
          onChange={(e) => {
            handleMaxPriceChange(e.target.value);
          }}
        />
      </div>
    </Content>
  );
};

export default Filter;

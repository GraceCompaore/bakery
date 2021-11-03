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
    <Content className="mx-10 my-32 px-20 border-2 border-black w-44 h-full rounded ">
      <Categories></Categories>
      <h3 className="font-semibold font-sans">Par prix</h3>
      <div className="">
        <label htmlFor="min-price">Min</label>
        <input
          className="w-32"
          type="number"
          id="min-price"
          placeholder="Min price"
          onChange={(e) => {
            handleMinPriceChange(e.target.value);
          }}
        />
      </div>
      <div className="">
        <label htmlFor="max-price">Max</label>
        <input
          className="w-32"
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

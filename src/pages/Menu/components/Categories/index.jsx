import { useContext } from 'react';
import categorieMock from '../../../../datas/categorieMock';
import { FilterContext } from '../../context/FilterContext';

function Categories() {
  const { categories, setCategories } = useContext(FilterContext);

  const handleCategoriesChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    let newList;

    if (isChecked) {
      newList = [...categories, value];
    } else {
      newList = categories.filter((category) => category !== value);
    }

    setCategories(newList);
  };

  return (
    <section className="">
      <h3 className="font-semibold font-sans">Par catégorie</h3>
      {categorieMock.map((category) => {
        return (
          <div key={category.id}>
            <input
              type="checkbox"
              id={'categorie-' + category.id}
              value={category.id}
              onChange={(e) => {
                handleCategoriesChange(e);
              }}
            />
            <label htmlFor={'categorie-' + category.id}>{category.label}</label>
          </div>
        );
      })}
    </section>
  );
}

export default Categories;

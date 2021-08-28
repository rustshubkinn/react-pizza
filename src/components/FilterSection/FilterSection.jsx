import FilterByType from 'components/FilterByType/FilterByType';
import SortSection from 'components/SortSection/SortSection';

import './FilterSection.module.scss';

const MOCK_TYPES = [
  {
    value: '',
    name: 'Все',
  },
  {
    value: 'meat',
    name: 'Мясные',
  },
  {
    value: 'vegan',
    name: 'Вегетарианские',
  },
  {
    value: 'grill',
    name: 'Гриль',
  },
  {
    value: 'hot',
    name: 'Острые',
  },
  {
    value: 'closed',
    name: 'Закрытые',
  },
];

const MOCK_OPTIONS = [
  {
    value: 'pop',
    name: 'популярности',
  },
  {
    value: 'price',
    name: 'по цене',
  },
  {
    value: 'alphabet',
    name: 'по алфавиту',
  },
];

const FilterSection = () => (
  <section>
    <FilterByType id="filter" types={MOCK_TYPES} />
    <SortSection id="sort" options={MOCK_OPTIONS} />
  </section>
);

export default FilterSection;

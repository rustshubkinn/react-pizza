import { fetchOptions, fetchPizza } from 'api';

export const fetchAllPizza = () => async (dispatch) => {
  dispatch({
    type: 'FETCH_PIZZA_REQUEST',
    payload: {
      pizza: [],
      options: [],
      loading: true,
    },
  });

  const pizzaResult = await fetchPizza();
  const optionsResult = await fetchOptions();

  dispatch({
    type: 'FETCH_PIZZA_SUCCESS',
    payload: {
      pizza: pizzaResult,
      options: optionsResult,
      loading: false,
    },
  });
  return true;
};

export const filterPizzaByType = (type) => async (dispatch) => {
  dispatch({
    type: 'FILTER_PIZZA_REQUEST',
    payload: { loading: true },
  });

  const result = await fetchPizza();

  if (type.value === 'all') {
    dispatch({
      type: 'FILTER_PIZZA_SUCCESS',
      payload: {
        pizza: result,
        loading: false,
      },
    });
  } else {
    const filteredPizza = result.filter((pizza) => pizza.type === type.value);

    dispatch({
      type: 'FILTER_PIZZA_SUCCESS',
      payload: {
        pizza: filteredPizza,
        loading: false,
      },
    });
  }
};

export const sortPizza = (option) => async (dispatch) => {
  dispatch({
    type: 'SORT_PIZZA_REQUEST',
    payload: { loading: true },
  });

  const result = await fetchPizza();

  if (option.value === 'pop') {
    const sortedPizza = result.sort((a, b) => (a.rating > b.rating ? -1 : 1));

    dispatch({
      type: 'SORT_PIZZA_SUCCESS',
      payload: { loading: false, pizza: sortedPizza },
    });
  }

  if (option.value === 'price') {
    const sortedPizza = result.sort((a, b) => (a.price > b.price ? -1 : 1));

    dispatch({
      type: 'SORT_PIZZA_SUCCESS',
      payload: { loading: false, pizza: sortedPizza },
    });
  }

  if (option.value === 'alphabet') {
    const sortedPizza = result.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    dispatch({
      type: 'SORT_PIZZA_SUCCESS',
      payload: { loading: false, pizza: sortedPizza },
    });
  }
};

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

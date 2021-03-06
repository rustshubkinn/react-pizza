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

export const fetchFilterOptions = () => async (dispatch) => {
  dispatch({
    type: 'FETCH_FILTER_OPTIONS_REQUEST',
    payload: { loading: true },
  });

  const options = await fetchOptions();
  const filterOptions = options.types.map((res) => ({
    value: res.value,
    name: res.name,
  }));

  const sortOptions = options.sort_options.map((res) => ({
    value: res.value,
    name: res.name,
  }));

  dispatch({
    type: 'FETCH_FILTER_OPTIONS_SUCCESS',
    payload: { filterOptions, sortOptions, loading: false },
  });
};

export const filterPizzaByType = (type) => async (dispatch) => {
  dispatch({
    type: 'FILTER_PIZZA_REQUEST',
    payload: { loading: true },
  });

  const activeFilter = type.name;

  const result = await fetchPizza();

  if (type.value === 0) {
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
        activeFilter,
        loading: false,
      },
    });
  }
};

export const sortPizza = (value, isReversed) => async (dispatch) => {
  dispatch({
    type: 'SORT_PIZZA_REQUEST',
    payload: { loading: true },
  });

  const result = await fetchPizza();

  const dictionary = {
    0: 'rating',
    1: 'price',
    2: 'name',
  };

  const sortedPizza = result.sort(
    (a, b) => a[dictionary[value]] - b[dictionary[value]]
  );

  if (isReversed) {
    sortedPizza.reverse();
  }

  dispatch({
    type: 'SORT_PIZZA_SUCCESS',
    payload: { loading: false, pizza: sortedPizza },
  });
};

export const addToCart =
  ({ pizzaId }) =>
  async (dispatch) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { pizzaId },
    });
  };

export const clearCart = () => async (dispatch) => {
  dispatch({
    type: 'CLEAR_CART',
    payload: {},
  });
};

export const deletePizza = (id, pizzaInCart) => async (dispatch) => {
  const updatedPizza = pizzaInCart;

  const deletePizzaIndex = pizzaInCart.findIndex((piz) => piz.id === id);

  pizzaInCart.splice(deletePizzaIndex, 1);

  dispatch({
    type: 'DELETE_PIZZA',
    payload: { updatedPizza },
  });
};

export const increasePizza = (id, pizzaInCart) => async (dispatch) => {
  const updatedPizza = pizzaInCart;

  const increasePizzaIndex = pizzaInCart.findIndex((piz) => piz.id === id);

  updatedPizza[increasePizzaIndex].quantity += 1;

  dispatch({
    type: 'INCREASE_PIZZA',
    payload: { updatedPizza },
  });
};

export const decreasePizza = (id, pizzaInCart) => async (dispatch) => {
  const updatedPizza = pizzaInCart;

  const decreasePizzaIndex = pizzaInCart.findIndex((piz) => piz.id === id);

  updatedPizza[decreasePizzaIndex].quantity -= 1;

  dispatch({
    type: 'DECREASE_PIZZA',
    payload: { updatedPizza },
  });
};

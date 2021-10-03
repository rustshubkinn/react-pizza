export const INITIAL_STATE = {
  pizza: [],
  options: [],
  filterOptions: [],
  sortOptions: [],
  addedPizza: {},
  newOrder: { orderPrice: 0 },
  loading: false,
};

export const home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_PIZZA_REQUEST': {
      const { pizza, loading, options } = action.payload;
      return { ...state, pizza, options, loading };
    }
    case 'FETCH_PIZZA_SUCCESS': {
      const { pizza, loading, options } = action.payload;
      return { ...state, pizza, options, loading };
    }
    case 'FETCH_FILTER_OPTIONS_REQUEST': {
      const { loading } = action.payload;
      return { ...state, loading };
    }
    case 'FETCH_FILTER_OPTIONS_SUCCESS': {
      const { loading, filterOptions, sortOptions } = action.payload;
      return { ...state, loading, filterOptions, sortOptions };
    }
    case 'FILTER_PIZZA_REQUEST': {
      const { loading } = action.payload;
      return { ...state, loading };
    }
    case 'FILTER_PIZZA_SUCCESS': {
      const { pizza, loading } = action.payload;
      return { ...state, pizza, loading };
    }
    case 'SORT_PIZZA_REQUEST': {
      const { loading } = action.payload;
      return { ...state, loading };
    }
    case 'SORT_PIZZA_SUCCESS': {
      const { pizza, loading } = action.payload;
      return { ...state, pizza, loading };
    }
    case 'ADD_TO_CART': {
      const { pizzaId } = action.payload;
      const orderedPizza = state.addedPizza;
      if (state.addedPizza[pizzaId]) {
        orderedPizza[pizzaId] += 1;
      } else {
        orderedPizza[pizzaId] = 1;
      }
      return { ...state, orderedPizza };
    }
    default:
      return { ...state };
  }
};

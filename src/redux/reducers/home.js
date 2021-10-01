export const INITIAL_STATE = {
  pizza: [],
  options: [],
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
    case 'ORDER_PIZZA_REQUEST': {
      const { loading } = action.payload;
      return { ...state, loading };
    }
    case 'ORDER_PIZZA_SUCCESS': {
      const { loading, newOrder } = action.payload;
      return { ...state, loading, newOrder };
    }
    default:
      return { ...state };
  }
};

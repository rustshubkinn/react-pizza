export const INITIAL_STATE = {
  pizza: [],
  options: [],
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
    default:
      return { ...state };
  }
};

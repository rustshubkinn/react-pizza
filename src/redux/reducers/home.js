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
    default:
      return { ...state };
  }
};

export const INITIAL_STATE = {
  pizza: [],
  options: [],
  filterOptions: [],
  sortOptions: [],
  addedPizza: {},
  activeFilter: 'Все',
  pizzaInCart: [],
  totalPrice: 0,
  loading: false,
};

const getTotalPrice = (pizzaInCart) =>
  pizzaInCart
    .map((piz) => piz.price * piz.quantity)
    .reduce((total, amount) => total + amount, 0);

export const reducers = (state = INITIAL_STATE, action) => {
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
      const { pizza, loading, activeFilter } = action.payload;
      return { ...state, pizza, loading, activeFilter };
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
      const arrOfAddedPizzaIds = Object.keys(orderedPizza);

      const currentAddedPizza = state.pizza.filter((piz) =>
        arrOfAddedPizzaIds.includes(piz.id)
      );

      const pizzaInCart = currentAddedPizza.map((piz) => ({
        ...piz,
        quantity: orderedPizza[piz.id],
      }));

      const totalPrice = getTotalPrice(pizzaInCart);

      return { ...state, pizzaInCart, totalPrice };
    }
    case 'CLEAR_CART': {
      const clearCart = [];
      const totalPrice = 0;
      return { ...state, pizzaInCart: clearCart, totalPrice };
    }
    case 'DELETE_PIZZA': {
      const { updatedPizza } = action.payload;
      const totalPrice = getTotalPrice(updatedPizza);
      return { ...state, pizzaInCart: updatedPizza, totalPrice };
    }
    case 'INCREASE_PIZZA': {
      const { updatedPizza } = action.payload;
      const totalPrice = getTotalPrice(updatedPizza);
      return { ...state, pizzaInCart: updatedPizza, totalPrice };
    }
    case 'DECREASE_PIZZA': {
      const { updatedPizza } = action.payload;
      const totalPrice = getTotalPrice(updatedPizza);
      return { ...state, pizzaInCart: updatedPizza, totalPrice };
    }
    default:
      return { ...state };
  }
};

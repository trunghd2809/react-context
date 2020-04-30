export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const CartReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_CART:
      console.log('state', state);
      const { carts } = state;
      const newCarts = [...carts, action.product];
      return { carts: newCarts };
    case REMOVE_CART:
      return {}
    default:
      return state;
  }
}
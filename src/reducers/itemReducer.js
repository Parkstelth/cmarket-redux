import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      //TODO
      return Object.assign({},state,{
        cartItems:[...state.cartItems,action.payload]
      })

    case REMOVE_FROM_CART:
      let a = state.cartItems.filter((el)=>el.itemId!==action.payload.itemId)
      return Object.assign({},state,{
        cartItems:a
      })

  
    case SET_QUANTITY:
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
     
      state.cartItems[idx].quantity=action.payload.quantity

      return Object.assign({},state,{
        cartItems:state.cartItems
      })


    default:
      return state;
  }
}

export default itemReducer;
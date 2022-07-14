import { createSlice, current } from "@reduxjs/toolkit";
import utils from "../../utils";
const initialState = [];
export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder(state,{payload}) {
        const copyArr=[...current(state)]
        copyArr.push({_id:utils.functions.random(0,9999),...payload})
        return copyArr
    },
    updateOrder(state,{payload}){
      let copyArr=[...current(state)]
      copyArr=copyArr.map(order=>{
        if(order._id===payload._id){
          order={...order,...payload}
        }
        return order
      })
      return copyArr
      
    }
  },
});
export const selectOrders=(state)=>state.orders
export const { addOrder,updateOrder } = orderSlice.actions;
export default orderSlice.reducer;

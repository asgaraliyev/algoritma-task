import { createSlice, current } from "@reduxjs/toolkit";
import utils from "../../utils";
const initialState=[]
export const alertSlice=createSlice({
    name:"alerts",
    initialState,
    reducers:{
        open(state,{payload}){
            const newAlert={}
            newAlert._id=utils.functions.random(0,9999)
            newAlert.title=payload.title
            if(payload.desc)newAlert.desc=payload.desc
            if(payload.type)newAlert.type=payload.type
            else newAlert.type="info"//info,success,danger,warning
            if(payload.ms)newAlert.ms=payload.ms
            else newAlert.ms=1500//milliseconds
            const copyArr=[...current(state)]
            copyArr.push(newAlert)
            return copyArr
        },
        remove(state,{payload}){
            const copyArr=[...current(state)]
            const index=copyArr.findIndex(alert=>alert._id===payload._id)
            copyArr.splice(index,1)
            return copyArr
        }
    }
})
export const selectAlerts=(state)=>state.alerts
export const { open,remove } = alertSlice.actions;
export default alertSlice.reducer;

import CONSTANT from "./constants";

const functions={
    random(min,max){
        return Math.floor(Math.random() * (max - min)) + min; 
    },
    getOrderStatusByValues(values){
        return CONSTANT.ORDER_STATUS_TYPES.find(type=>type.value===values)
    }
}
export default functions
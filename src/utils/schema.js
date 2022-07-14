import { type } from "@testing-library/user-event/dist/type";
import * as Yup from "yup";
import CONSTANT from "./constants";
const requiredStr = "Vacib bölmə";
const schema = {
  product() {
    return Yup.object({
      name: Yup.string().min(2, "Min 2 xana daxil edin").required(requiredStr),
      price: Yup.number().min(0, "Min 1").required(requiredStr),
      category: Yup.string().required(requiredStr),
    });
  },
  order() {
    return Yup.object({
      number: Yup.number().min(1, "Min 1").required(requiredStr),
      amount: Yup.number().min(1, "Min 1").required(requiredStr),
      tableId: Yup.string().required(requiredStr),
      servantId: Yup.string().required(requiredStr),
      status: Yup.mixed().oneOf(
        CONSTANT.ORDER_STATUS_TYPES.map((type) => type.value)
      ),
      finishedAt: Yup.date().nullable(),
    });
  },
};
export default schema;

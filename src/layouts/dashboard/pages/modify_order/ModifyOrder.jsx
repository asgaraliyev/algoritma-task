import React from "react";
import { Field, Form, Formik } from "formik";
import ReactDatePicker from "react-datepicker";
import Box from "../../../../components/common/box/Box";
import Button from "../../../../components/common/button/Button";
import ErrorText from "../../../../components/common/error_text/ErrorText";
import utils from "../../../../utils";
import Page from "../../components/page/Page";
import "./ModifyOrder.scss";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, updateOrder } from "../../../../store/slices/orderSlice";
import Loading from "../../../../components/common/loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "../../../../components/common/alert/Alert";
const newOrderState={
  number: "",
  tableId: "",
  servantId: "",
  status:utils.CONSTANT.ORDER_STATUS_TYPES[0].value ,
  finishedAt:null,
}
function ModifyOrder() {
  const [initialValues,setInitialValues]=React.useState()
  const dispatch=useDispatch()
  const alert=useAlert()
  const [finishedAt,setfinishedAt]=React.useState()
  const {_id}=useParams()
  const order=useSelector(state=>state.orders.find(order=>order._id==_id))
  const navigate=useNavigate()
  const onSubmit = (values) => {
    let alertOptions
    if(order){
      dispatch(updateOrder(values))
      alertOptions={title:"Uğurla redaktə edildi",type:"success"}
    }else{
      dispatch(addOrder(values))
      alertOptions={title:"Uğurla əlavə edildi",type:"success"}
    }
    navigate(-1)
    alert.open(alertOptions)

  };
  React.useEffect(()=>{
    if(!order)setInitialValues(newOrderState)
    else setInitialValues(order)
  },[])
  
  if(!initialValues)return <Loading/>
  return (
    <Page title="Yeni sifariş">
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={utils.schema.order()}
      >
        {(props) => {
          return (
            <Form className="flex flex-col w-full p-2 ">
              <div className="flex flex-row">
                <Box className={"flex-1 flex-col flex"}>
                  <p className="font-bold text-primary">Əsas məlumatlar</p>
                  <br />
                  <label htmlFor="number">Sıra</label>
                  <Field
                    id="number"
                    name="number"
                    type="number"
                    className="my-input"
                    placeholder="1"
                  />
                  <ErrorText formik={props} field="number" />
                  <br />
                  <label htmlFor="amount">Məbləğ (AZN)</label>
                  <Field
                    id="amount"
                    name="amount"
                    type="number"
                    className="my-input"
                    placeholder="1"
                  />
                  <ErrorText formik={props} field="amount" />
                  <br />
                  <label htmlFor="tableId">Masa</label>
                  <Field
                    id="tableId"
                    name="tableId"
                    className="my-input"
                    placeholder="1"
                    component="select"
                  >
                    <option value="">Seç</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Field>
                  <ErrorText formik={props} field="tableId" />
                  <br />
                  <label htmlFor="servantId">Xidmətçi</label>
                  <Field
                    id="servantId"
                    name="servantId"
                    className="my-input"
                    placeholder="1"
                    component="select"
                  >
                    <option value="">Seç</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Field>
                  <ErrorText formik={props} field="servantId" />
                </Box>
                <Box className={"flex-1 flex-col flex"}>
                  <p className="font-bold text-primary">Digər məlumatlar</p>
                  <br />
                  <label htmlFor="status">Status</label>
                  <Field
                    id="status"
                    name="status"
                    className="my-input"
                    component="select"
                  >
                    {utils.CONSTANT.ORDER_STATUS_TYPES.map((type,i) => {
                      return <option key={i} value={type.value}>{type.label}</option>;
                    })}
                  </Field>
                  <ErrorText formik={props} field="status" />
                  <br />
                  <label htmlFor="finishedAt">Sonlanma tarixi</label>
                  <Field
                    id="finishedAt"
                    name="finishedAt"
                    className="my-input"
                    showTimeSelect
                    selected={finishedAt}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    onChange={(date) => {
                      setfinishedAt(date)
                      props.setFieldValue("finishedAt",date)
                    }}
                    component={ReactDatePicker}
                  ></Field>
                  <ErrorText formik={props} field="finishedAt" />
                </Box>
              </div>
              <div className="p-2 flex flex-row items-end justify-end">
                <Button
                  type="submit"
                  text="Göndər"
                  bg="primary"
                  color="light"
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </Page>
  );
}

export default ModifyOrder;

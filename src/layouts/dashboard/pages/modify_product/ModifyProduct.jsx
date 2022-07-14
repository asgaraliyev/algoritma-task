import { Field, Form, Formik } from "formik";
import Button from "../../../../components/common/button/Button";
import ErrorText from "../../../../components/common/error_text/ErrorText";
import utils from "../../../../utils";
import Page from "../../components/page/Page";
import "./ModifyProduct.scss";
function ModifyProduct() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Page title={"Yeni məhsul"} titleCenter={true}>
      <div className="flex justify-center align-middle items-center">
        <Formik
          validationSchema={utils.schema.product()}
          initialValues={{
            name: "",
            price: "",
            category: "",
          }}
          onSubmit={onSubmit}
        >
          {(props) => {
            return (
              <Form className="flex flex-col w-1/2">
                <br />
                <label htmlFor="name">Ad</label>
                <Field
                  id="name"
                  name="name"
                  className="my-input"
                  placeholder="Lülə"
                />
                <ErrorText formik={props} field="name"/>
                <br />
                <label htmlFor="price">Qiymət</label>
                <Field
                  id="price"
                  name="price"
                  className="my-input"
                  type="number"
                  placeholder="18"
                />
                <ErrorText formik={props} field="price"/>
                <br />
                <label htmlFor="category">Kateqoriya</label>
                <Field
                  component="select"
                  className="my-input"
                  id="category"
                  name="category"
                >
                  <option value="">Seç</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Field>
                <ErrorText formik={props} field="category"/>
                <br />
                <Button
                  type="submit"
                  text="Göndər"
                  bg="primary"
                  color="light"
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </Page>
  );
}

export default ModifyProduct;

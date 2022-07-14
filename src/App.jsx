import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AlertProvider from "./components/common/alert/Alert";
import Loading from "./components/common/loading/Loading";
import Auth from "./layouts/auth/auth/Auth";
import Dashboard from "./layouts/dashboard/dashboard/Dashboard";
import ModifyOrder from "./layouts/dashboard/pages/modify_order/ModifyOrder";
import ModifyProduct from "./layouts/dashboard/pages/modify_product/ModifyProduct";
import Orders from "./layouts/dashboard/pages/orders/Orders";
import store from "./store";

const Login = React.lazy(() => import("./layouts/auth/pages/login/Login"));
const SignUp = React.lazy(() => import("./layouts/auth/pages/signup/SignUp"));
const Charts = React.lazy(() =>
  import("./layouts/dashboard/pages/charts/Charts")
);
const Products = React.lazy(() =>
  import("./layouts/dashboard/pages/products/Products")
);
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AlertProvider />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              index
              element={<Navigate to="/dashboard/charts" replace />}
            ></Route>
            <Route exact path="/dashboard" element={<Dashboard />}>
              <Route exact index path="charts" element={<Charts />} />
              <Route exact path="products" element={<Products />} />
              <Route exact path="products/:_id" element={<ModifyProduct />} />
              <Route exact path="orders" element={<Orders />} />
              <Route exact path="orders/:_id" element={<ModifyOrder />} />
            </Route>
            <Route exact path="auth" element={<Auth />}>
              <Route exact path="login" element={<Login />} />
              <Route exact index path="sign-up" element={<SignUp />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/common/button/Button";
import Table from "../../../../components/common/table/Table";
import { selectOrder, selectOrders } from "../../../../store/slices/orderSlice";
import utils from "../../../../utils";
import Page from "../../components/page/Page";
import "./Orders.scss";
function NewOrderBtn({ ...rest }) {
  return (
    <Button
      className={"text-xs"}
      text="Yeni sifariş"
      bg="primary"
      color="light"
      {...rest}
    />
  );
}

function OrderRow(props) {
  return (
    <tr>
      <td>{props.index+1}</td>
      <td className="flex flex-row">
        <Link  to={`/dashboard/orders/${props.order._id}`}>
          <Button text="Redaktə" bg="primary" color="light" />
        </Link>
        <Button text="Sil" bg="danger" color="light"  />

      </td>
      <td>{props.order.number}</td>
      <td>
        <Link
          className="text-primary"
          to={`/dashboard/tables/${props.order.tableId}`}
        >
          {props.order.tableId}
        </Link>
      </td>
      <td>
        <Link
          className="text-primary"
          to={`/dashboard/users/${props.order.servantId}`}
        >
          {props.order.servantId}
        </Link>
      </td>
      <td>{utils.functions.getOrderStatusByValues(props.order.status)?.label}</td>
      <td>{props.order.amount} AZN</td>
      <td>{props.order.finishedAt?props.order.finishedAt.toDateString():""}</td>
    </tr>
  );
}

function Orders() {
  const navigate = useNavigate();
  const orders = useSelector(selectOrders);
  const onNewOrder = () => {
    navigate("/dashboard/orders/new");
  };
  return (
    <Page
      title="Sifarişlər"
      actions={[<NewOrderBtn onClick={onNewOrder} key="1" />]}
    >
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Əməliyyatlar</th>
            <th>Sıra</th>
            <th>Masa</th>
            <th>Xidmətçi</th>
            <th>Status</th>
            <th>Məbləğ</th>
            <th>Sonlanma tarixi</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => {
            return <OrderRow key={i} index={i} order={order}></OrderRow>;
          })}
        </tbody>
      </Table>
    </Page>
  );
}
export default Orders;

import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/common/button/Button";
import Table from "../../../../components/common/table/Table";
import Page from "../../components/page/Page";
import "./Products.scss";
function Products() {
  const navigate = useNavigate();
  return (
    <Page title="Məhsullar">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Əməliyyatlar</th>
            <th>Ad</th>
            <th>Qiymət</th>
            <th>Kateqoriya</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Button
                text="Redaktə"
                bg="primary"
                color="light"
                onClick={() => navigate(`/dashboard/products/1`)}
              />
            </td>
            <td>Lülə</td>
            <td>18 AZN</td>
            <td>
              <Link to="/dashboard/categories/1" className="text-primary">
                Milli
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </Page>
  );
}
export default Products;

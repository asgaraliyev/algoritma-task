import "./Page.scss"
import Header from "../../../../components/common/header/Header";

function Page({ children,actions,title,titleCenter=false }) {
  return (
    <div className="w-full">
      <Header title={title} titleCenter={titleCenter} actions={actions}/>
      {children}
    </div>
  );
}
export default Page;

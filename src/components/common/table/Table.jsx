import "./Table.scss"
function Table({ children }) {
  return <table className=" my-table w-full">
    {children}
  </table>;
}
export default Table
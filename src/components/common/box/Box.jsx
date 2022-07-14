import "./Box.scss";
function Box({ className, children, ...rest }) {
  return (
    <div
      className={`border-2 rounded-md m-2 border-light  py-4 px-4 shadow-normal shadow-md ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
export default Box;

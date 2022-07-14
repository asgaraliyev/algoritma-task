import "./Button.scss";
function Button({
  text,
  className,
  Icon,
  iconSize = 20,
  bg = "primary_dark",
  color,
  ...rest
}) {
  return (
    <button
      className={`flex  flex-row place-content-center items-center rounded-md p-1 bg-${bg} text-${color} ${className}   hover:shadow-xl hover:shadow-${bg} `}
      {...rest}
    >
      {Icon ? (
        <>
          <span>
            <Icon size={iconSize} />
          </span>
          <span>
            <p>{text}</p>
          </span>
        </>
      ) : (
        text
      )}
    </button>
  );
}
export default Button;

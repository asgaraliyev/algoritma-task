import "./Header.scss";
import { IoMdNotifications } from "react-icons/io";
function TitleArea({title,actions}) {
  return (
    <p className="text-xl font-bold text-primary flex flex-row ">
      <span className="mr-2">{title}</span>

      <span>{actions}</span>
    </p>
  );
}
function Header({ title, titleCenter, actions }) {
  return (
    <header className="flex flex-row justify-between w-full p-2">
      {titleCenter === true ? (
        <>
          <p>{}</p>
          <TitleArea title={title} actions={actions}/>
        </>
      ) : (
        <TitleArea title={title} actions={actions}/>
      )}

      <div className="flex flex-row">
        <NotificationIcon number={2} size={25} className="text-primary" />
      </div>
    </header>
  );
}

function NotificationIcon({ number = 0, ...rest }) {
  return (
    <span className="cursor-pointer relative">
      <IoMdNotifications {...rest} />
      <span
        style={{ top: "-2px", right: "-2px" }}
        className="absolute  bg-danger w-3 h-3 text-light text-xs rounded-2xl flex justify-center items-center"
      >
        {number}
      </span>
    </span>
  );
}
export default Header;

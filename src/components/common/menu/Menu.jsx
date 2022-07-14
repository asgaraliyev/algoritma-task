import ReactDOM from "react-dom";
import "./Menu.scss";
import React from "react";
import { MdProductionQuantityLimits, MdMenu } from "react-icons/md";
import { MdOutlineWidgets } from "react-icons/md";
import { NavLink, useSearchParams } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { FiSettings,FiShoppingCart } from "react-icons/fi";
import Button from "../button/Button";
import utils from "../../../utils";
const menu_list = [
  {
    path: "/dashboard/charts",
    title: "Vigitlər",
    Icon: MdOutlineWidgets,
  },
  {
    path: "/dashboard/products",
    title: "Məhsullar",
    Icon: MdProductionQuantityLimits,
  },
  {
    path: "/dashboard/orders",
    title: "Sifarişlər",
    Icon: FiShoppingCart,
  },
  {
    path: "/dashboard/settings",
    title: "Paramterlər",
    Icon: FiSettings,
    isBottom: true,
  },
  {
    path: "/auth/login",
    title: "Hesabdan çıx",
    Icon: FaSignOutAlt,
    isBottom: true,
  },
];
function Menu() {
  let [searchParams, setSearchParams] = useSearchParams();
  const onMenuToggle = () => {
    if (searchParams.get("extended_menu")) {
      searchParams.delete("extended_menu");
    } else {
      searchParams.set("extended_menu", true);
    }
    setSearchParams(utils.url.serializeSearchParams(searchParams));
  };
  const isExtended = searchParams.get("extended_menu");
  const topList = React.useMemo(
    () => menu_list.filter((item) => item.isBottom !== true),
    []
  );
  const bottomList = React.useMemo(
    () =>
      menu_list.filter((item) => {
        return item.isBottom === true;
      }),
    []
  );
  return (
    <nav id="menu" className="bg-primary text-light p-1 h-screen flex flex-col justify-between sticky ">
      <Button
        bg="primary"
        color="light"
        Icon={isExtended ? BiLeftArrowAlt : AiOutlineMenuUnfold}
        onClick={onMenuToggle}
        text={isExtended ? "Bağla" : ""}
        className="w-full"
      />
      <div className="h-full flex flex-col justify-between">
        <div>
          {topList.map((item, i) => {
            return (
              <MenuItem
                isExtended={isExtended}
                key={item.path}
                path={item.path}
                title={item.title}
                Icon={item.Icon}
              />
            );
          })}
        </div>
        <div>
          {bottomList.map((item, i) => {
            return (
              <MenuItem
                isExtended={isExtended}
                key={item.path}
                path={item.path}
                title={item.title}
                Icon={item.Icon}
              />
            );
          })}
        </div>
      </div>
    </nav>
  );
}
function MenuContainer() {
  return <Menu />;
}
const defaultNavLinkClassName =
  "p-1 my-2 flex flex-row place-content-evenly items-center ";
function MenuItem({ Icon, isExtended, ...props }) {
  return (
    <NavLink
      to={props.path}
      className={({ isActive }) =>
        isActive
          ? defaultNavLinkClassName + "bg-primary_dark rounded-md"
          : defaultNavLinkClassName
      }
    >
      <span className="mx-1 text-md">
        <Icon size={25} />
      </span>
      {isExtended ? <span className="mx-5">{props.title}</span> : null}
    </NavLink>
  );
}
export default MenuContainer;

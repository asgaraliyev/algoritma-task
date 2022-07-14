import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { open, remove, selectAlerts } from "../../../store/slices/alertSlice";
import "./Alert.scss";
import ReactDOM from "react-dom";
import {
  MdDangerous,
  MdInfo,
  MdOutlineDoneOutline,
  MdWarning,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
const Icons = {
  success: MdOutlineDoneOutline,
  warning: MdWarning,
  info: MdInfo,
  danger: MdDangerous,
};
function AlertProvider() {
  let alerts = useSelector(selectAlerts);
  return ReactDOM.createPortal(
    <ul className="fixed  top-0 right-0">
      <AnimatePresence exitBeforeEnter>
        {alerts.map((alert, i) => {
          return <OneAlertItem key={i} alert={alert} />;
        })}
      </AnimatePresence>
    </ul>,
    document.querySelector("#alerts")
  );
}
function OneAlertItem({ alert }) {
  const TheIcon = Icons[alert.type];
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(remove({ _id: alert._id }));
    }, alert.ms);
  }, []);
  return (
    <motion.li
      key={alert._id}
      positionTransition
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0.5, scale: 0.8, transition: { duration: 0.2 } }}
      className=" bg-light shadow-md shadow-normal rounded-md p-2 my-4  mr-2 flex flex-col"
    >
      <div className="flex flex-row items-center justify-center">
        <TheIcon className={`text-${alert.type} text-2xl mr-2`} />
        <p className={`text-${alert.type} text-lg`}>{alert.title}</p>
      </div>
      {alert.desc ? <p>{alert.desc}</p> : null}
    </motion.li>
  );
}
export const useAlert = () => {
  const dispatch = useDispatch();
  const data = {
    open: (data) => dispatch(open(data)),
  };
  return data;
};

export default AlertProvider;

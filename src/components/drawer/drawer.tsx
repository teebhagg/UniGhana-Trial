import Avatar from "../avatar";
import "./drawer.css";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer = (props: Props) => {
  const { isOpen, setIsOpen } = props;

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const menu_icon = require("../images/menu.svg");
  const clear_icon = require("../images/clear.svg");

  return (
    <div className="drawer">
      <button className="drawer-toggle" onClick={toggleDrawer}>
        <i className="material-icons">
          {isOpen ? (
            <img
              style={{ cursor:'pointer' }}
              onClick={() => {
                toggleDrawer();
              }}
              src={clear_icon.default}
              alt=""
              height={"25px"}
              />
              ) : (
                <img
                style={{ cursor:'pointer' }}
              onClick={() => {
                toggleDrawer();
              }}
              src={menu_icon.default}
              alt=""
              height={"25px"}
            />
          )}
        </i>
      </button>
      <div className={`drawer-content${isOpen ? " open" : ""}`}>
        <div className="nav" >
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Avatar/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;

import "./Header.css";
import logo from "../../assets/givexp_arany.png";
import cart from "../../../public/images/shopping-cart.svg";
import account from "../../../public/images/account-circle.svg";
import Search from "../Search/Search";
import "@fontsource/poppins";
import { fnIsMobile } from "../../utils/utils";
import dropdown from "../../../public/images/menu.png";

const Header = () => {
  const isMobile = fnIsMobile();

  const menuItems = [
    "Kategóriák",
    "Helyszínek",
    "Újdonságok",
    "Ajándékválasztó",
    "Ajándékkártya",
    "Élménybeváltás",
    "Kapcsolat",
  ];

  console.log("In Header");

  return (
    <div className={isMobile ? "mobileheader" : "header"}>
      {
        //Check if message failed
        isMobile ? (
          <>
            <div className="mobilefirstline">
              <img width={"100px"} src={dropdown} />
              <img src={logo} />
            </div>
            <Search />
          </>
        ) : (
          <>
            <div className="line1">
              <img src={logo} />
              <Search />
              <img src={cart} />
              <img src={account} />
            </div>
            <div className="line2">
              {menuItems.map((item) => {
                return <div className="button">{item}</div>;
              })}
            </div>
          </>
        )
      }
    </div>
  );
};

export default Header;

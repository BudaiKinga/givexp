import "./Header.css";
import logo from "../../assets/givexp_arany.png";
import cart from "../../../public/images/shopping-cart.svg";
import account from "../../../public/images/account-circle.svg";
import Search from "../Search/Search";
import "@fontsource/poppins";

const Header = () => {
  const menuItems = [
    "Kategóriák",
    "Helyszínek",
    "Újdonságok",
    "Ajándékválasztó",
    "Ajándékkártya",
    "Élménybeváltás",
    "Kapcsolat",
  ];

  return (
    <div className="header">
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
    </div>
  );
};

export default Header;

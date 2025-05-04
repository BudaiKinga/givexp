import { fnIsMobile } from "../../utils/utils";
import "./Search.css";
import "@fontsource/inter";

const Search = () => {
  const isMobile = fnIsMobile();
  return (
    <input
      className={isMobile ? "mobilesearch" : "search"}
      placeholder="Keresés..."
      type="text"
    ></input>
  );
};

export default Search;

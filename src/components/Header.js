import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul style={{listStyle: "none"}}>
        <li>
            <Link to={"/"}>GetAllRetrospective</Link>
        </li>
        <li>
            <Link to={"getretrospectivesbydate"}>GetRetrospectiveByDate</Link>
        </li>
        <li>
            <Link to={"createretrospective"}>CreateRetrospective</Link>
        </li>        
      </ul>
    </header>
  );
}
export default Header;

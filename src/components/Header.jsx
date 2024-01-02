import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const state = useSelector((store) => store.basket);

  const totalAmount = state.basket.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <nav className="navbar bg-body-tertiary position-sticky top-0 z-3 shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="vite.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Redux Thunk
        </Link>
        <div className="d-flex gap-3 ">
          <NavLink className="btn btn-primary " to={"/"}>
            Anasayfa
          </NavLink>
          <NavLink className="btn btn-success " to={"/sepet"}>
            <span>Sepet</span>
            <span className="badge bg-danger mx-2">{totalAmount}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;

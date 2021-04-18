import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import PersonIcon from "@material-ui/icons/Person";
import { AppBar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <AppBar
      style={{ bottom: 0, top: "auto", backgroundColor: "#ffffff" }}
      position="fixed"
    >
      <div
        style={{ display: "flex", flexDirection: "row", padding: 16 }}
        className="Menu_Bar"
      >
        <div
          style={{ display: "flex", flexDirection: "column", paddingRight: 45 }}
          className="home_icon"
        >
          <NavLink to="/">
            <HomeIcon style={{ fontSize: 40, color: "#4E589F" }} />
          </NavLink>
          <text style={{ color: "#4E589F" }}>Home</text>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", paddingRight: 45 }}
          className="search_icon"
        >
          <NavLink to="/search">
            <SearchIcon style={{ fontSize: 40, color: "#4E589F" }} />
          </NavLink>
          <text style={{ color: "#4E589F" }}>Search</text>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", paddingRight: 45 }}
          className="transaction_icon"
        >
          <NavLink to="/transaction">
            <AccountBalanceWalletIcon
              style={{ fontSize: 40, color: "#4E589F" }}
            />
          </NavLink>

          <text style={{ color: "#4E589F" }}>Transaction</text>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", paddingRight: 45 }}
          className="account_icon"
        >
          <NavLink to="/account">
            <PersonIcon style={{ fontSize: 40, color: "#4E589F" }} />
          </NavLink>
          <text style={{ color: "#4E589F" }}>Account</text>
        </div>
      </div>
    </AppBar>
  );
};

export default MenuBar;

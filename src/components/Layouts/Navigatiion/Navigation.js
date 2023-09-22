import React, { useEffect, useState } from "react";
import "./Navigation.scss";
import logo from "../../../assets/images/logo.png";
import Avatar from "../../../assets/images/Avatar-logout.png";
import { SearchInput } from "../../Controls/Inputs/Inputs";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { dropdownOptions } from "../../../assets/data";
import { logout } from "../../../Redux/actions/userAction";
import { toast } from "react-toastify";
const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [name, setName] = useState();
  const { loading, error, isAutenticated, user } = useSelector(
    (state) => state.user
  );

  //SearchHandler
  const searchHandler = (e) => {
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate(`/products`);
    }
  };

  const logoutUser = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
  };
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" draggable="false" />
          </div>
          <div className="nav_mid_search">
            {/* //Search Input */}
            <SearchInput
              inputIcon={<SearchIcon />}
              placeholder={"Search Your Products"}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              onKeyPress={(e) => {
                e.key === "Enter" && keyword && searchHandler(e);
              }}
              Click={() => keyword && searchHandler()}
            />
          </div>

          <div className="nav_right_icons">
            <div className="register_icon">
              {isAutenticated ? (
                <div className="avatar">
                  <div
                    className="avatar_image"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    <img src={user.avatar.url} alt={user?.name} />
                  </div>

                  <span className="user_name">{user?.name}</span>
                  {dropdown && (
                    <>
                      <div className="user_dropdown">
                        <ul>
                          {user.role === "admin" && (
                            <Link to={"/dashboard"}>
                              <li>
                                Dashboard
                                <div className="icon">
                                  <GridViewIcon />
                                </div>
                              </li>
                            </Link>
                          )}
                          {dropdownOptions.map((option) => (
                            <Link
                              to={option.path}
                              key={option.name}
                              style={{
                                background:
                                  pathname === option.path && "#0000000a",
                              }}
                              onClick={() => setDropdown(false)}
                            >
                              <li>
                                {option.name}
                                <div className="icon">{option.icon}</div>
                              </li>
                            </Link>
                          ))}
                          <div
                            className="logout"
                            onClick={logoutUser}
                            style={{ borderBottom: "0px" }}
                          >
                            <li>
                              Logout
                              <div className="icon">
                                <ExitToAppIcon />
                              </div>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Link to={"/login"}>
                  <Button
                    onClick={() => {
                      document.body.style.overflow = "hidden";
                    }}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>

            <div className="cart_icon">
              <Badge badgeContent={4} color="primary">
                <IconButton>
                  <ShoppingCartIcon color="action" />
                </IconButton>
              </Badge>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navigation;

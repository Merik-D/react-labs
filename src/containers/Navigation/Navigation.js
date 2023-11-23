import React from "react";
import { NavLink } from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styles";

const Navigation = () => (
  <LinkingWrapper>
    <ul>
      <li>
        <NavLink exact={true.toString()} to="/" activeClassName="selected">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact={true.toString()} to="/catalog" activeClassName="selected">
          Catalog
        </NavLink>
      </li>
      <li>
        <NavLink exact={true.toString()} to="/cart" activeClassName="selected">
          Cart
        </NavLink>
      </li>
    </ul>
  </LinkingWrapper>
);

export default Navigation;

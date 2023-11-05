import React from "react";
import { NavLink } from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styles";

const Navigation = () => (
  <LinkingWrapper>
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/catalog" activeClassName="selected">
          Catalog
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/cart" activeClassName="selected">
          Cart
        </NavLink>
      </li>
    </ul>
  </LinkingWrapper>
);

export default Navigation;

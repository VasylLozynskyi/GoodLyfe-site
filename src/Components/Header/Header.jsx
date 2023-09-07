import { LogoBar } from "./components/LogoBar";
import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
import { SearchInputBar } from "./components/SearchInputBar";

import "./header.scss";
import { LoginBtnBar } from "./components/LoginBtnBar";

export const Header = ({ data }) => {
  const [showNavBar, getShowNavBar] = useState(true);

  return (
    <div className="wrapper_header">
      <div className="container flex-block">
        <LogoBar data={data.logoBar} />
        {showNavBar ? (
          <NavBar data={data.navBar} />
        ) : (
          <SearchInputBar
            data={data.searchInputBar}
            showInputBar={getShowNavBar}
          />
        )}
        {showNavBar ? (
          <SearchBar data={data.searchBar} showInputBar={getShowNavBar} />
        ) : (
          ""
        )}
        <LoginBtnBar data={data.loginBtnBar} />
      </div>
    </div>
  );
};

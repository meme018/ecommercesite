import React from "react";
import { Link } from "react-router";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4  space-x-8 ">
        {/* Logo */}

        <nav className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
          <Link to="/">
            <div className="text-3xl font-bold text-black">July</div>
          </Link>
          <Link to="/" className="hover:text-gray-500 transition">
            Home
          </Link>
          <Link to="/ProductListing" className="hover:text-gray-500 transition">
            Shop
          </Link>
          <Link to="" className="hover:text-gray-500 transition">
            Pages
          </Link>
          <Link to="" className="hover:text-gray-500 transition">
            Blog
          </Link>
          <Link to="" className="hover:text-gray-500 transition">
            Features
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-gray-700">
          <button className="hover:text-black">
            <SearchOutlinedIcon />
          </button>

          <Link to="/LoginPage">
            <button className="hover:text-black">
              <Person2OutlinedIcon />
            </button>
          </Link>

          <button className="hover:text-black">
            <FavoriteBorderOutlinedIcon />
          </button>

          {/* Cart with Badge */}
          <div className="relative">
            <Link to="/Cart">
              <button className="hover:text-black">
                <LocalMallOutlinedIcon />
              </button>
            </Link>
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-semibold rounded-full px-1.5">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

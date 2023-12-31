import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css"

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle"> Our Menu</h1>
      <div className="menuList">
        {MenuList.map((Item, key) => {
          return (
            <MenuItem 
                image={Item.image} 
                name={Item.name} 
                price={Item.price} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

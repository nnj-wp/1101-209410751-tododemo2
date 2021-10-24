import React, { useState, useEffect } from 'react';
import './Directory_51.scss';
// import items from './menu-items-data';
import axios from 'axios';
import MenuItem_51 from './MenuItem_51';

const Directory2_51 = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const HEROKU_URL =
        'https://herokucrown51.herokuapp.com/api_51/Category_51';
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api/category_51', data);
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);

  console.log('menuItems', menuItems);
  return (
    <div>
      <div className="directory-menu">
        {menuItems.map((item) => {
          const { id, name, remote_url, size } = item;
          return (
            <MenuItem_51
              key={id}
              name={name}
              remote_url={remote_url}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Directory2_51;

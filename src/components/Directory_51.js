import React, { useState } from 'react';
import './Directory_51.scss';
import items from './menu-items-data';
import MenuItem_51 from './MenuItem_51';

const Directory_51 = () => {
  const [menuItems, setMenuItems] = useState(items);
  console.log('menuItems', menuItems);
  return (
    <div>
      <div className="directory-menu">
        {menuItems.map((item) => {
          const { id, name, remoteUrl, size } = item;
          return (
            <MenuItem_51
              key={id}
              name={name}
              remoteUrl={remoteUrl}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Directory_51;

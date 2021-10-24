1.  (local) 請以 App_xx.js 顯示下圖片，繳交
    . Chrome 截圖
    . 目錄結構及 App_xx 部分內容截圖 (以學號後 2 碼來展開 category 內容，其他收起)
    . App_xx.js code (程式碼，非圖片 )

    ![Chrome]()

    ![App_51.js code]()

```
import './App_51.scss';

function App() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <img
            className="background-image"
            src="https://i.ibb.co/cvpntL1/hats.png"
            alt=""
          />
          <a href="./hats.html" className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </a>
        </div>
        <div className="menu-item">
        <img className="background-image" src="https://i.ibb.co/px2tCc3/jackets.png" alt=""/>
        <a href="./jackets.html" className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOP NOW</span>
        </a>
      </div>
      <div className="menu-item">
        <img className="background-image" src="https://i.ibb.co/0jqHpnp/sneakers.png" alt=""/>
        <a href="./sneakers.html" className="content">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">SHOP NOW</span>
        </a>
      </div>
      <div className="large menu-item">
        <img className="background-image" src="https://i.ibb.co/GCCdy8t/womens.png" alt=""/>
        <a href="./womens.html" className="content">
          <h1 className="title">WOMENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </a>
      </div>
      <div className="large menu-item">
        <img className="background-image" src="https://i.ibb.co/R70vBrQ/men.png" alt=""/>
        <a href="./mens.html" className="content">
          <h1 className="title">MENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </a>
      </div>
      </div>
    </div>
  );
}

export default App;
```

---

2.  (local) 將 homepage 分成如下圖的 components，Homepage_xx.js, Direcory_xx.js, MenuItem_xx.js，並且能夠正常顯示如第 1 題。繳交
    . Chrome 截圖
    . 目錄結構，要含所有用到的 components
    . Homepage_xx.js code (程式碼，非圖片 )
    . Directory_xx.js code
    . MenuItem_xx.js code

![Chrome]()
![目錄截圖]()

```
Homepage_51.js =>
import React from 'react';

import Directory_51 from '../components/Directory_51';

const Homepage_51 = () => {
  return (
    <div className="homepage">
      <Directory_51 />
    </div>
  );
};

export default Homepage_51;
```

```
Directory_51.js =>
import React from 'react';
import './Directory_51.scss';

import MenuItem_51 from './MenuItem_51';

const Directory_51 = () => {
  return (
    <div>
      <div className="directory-menu">
        <MenuItem_51
          name="HATS"
          remoteUrl="https://i.ibb.co/cvpntL1/hats.png"
          size=" "
        />
        <MenuItem_51
          name="JACKETS"
          remoteUrl="https://i.ibb.co/px2tCc3/jackets.png"
          size=" "
        />
        <MenuItem_51
          name="SNEAKERS"
          remoteUrl="https://i.ibb.co/0jqHpnp/sneakers.png"
          size=" "
        />
        <MenuItem_51
          name="WOMENS"
          remoteUrl="https://i.ibb.co/GCCdy8t/womens.png"
          size="large"
        />
        <MenuItem_51
          name="MENS"
          remoteUrl="https://i.ibb.co/R70vBrQ/men.png"
          size="large"
        />
      </div>
    </div>
  );
};

export default Directory_51;
```

```
MenuItem =>
import React from 'react';
import './MenuItem_51.scss';

const MenuItem_51 = ({ name, remoteUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <img className="background-image" src={remoteUrl} alt="" />
      <a href="./hats.html" className="content">
        <h1 className="title">{name}</h1>
        <span className="subtitle">SHOP NOW</span>
      </a>
    </div>
  );
};

export default MenuItem_51;
```

---

3. (local) 將 menu items 五筆資料放入 JSON 陣列中，並能正常顯示如第 1 題。繳交
   . Chrome 截圖
   . JSON 陣列 (程式碼，非圖片 )
   . Directory_xx.js code (程式碼，非圖片 )

![Chrome]()

```
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
```

```
const items = [
    {
        id: 1,
        name: 'HATS',
        remoteUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        size: ' '
    },
    {
        id: 2,
        name: 'JACKETS',
        remoteUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        size: ' '
    },
    {
        id: 3,
        name: 'SNEAKERS',
        remoteUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        size: ''
    },
    {
        id: 4,
        name: 'WOMENS',
        remoteUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large'
    },
    {
        id: 5,
        name: 'MENS',
        remoteUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large'
    },
];

export default items;
```

- 4. (local, github) 實作路由 /shop_xx，可以顯示 overview.html 內兩種 category 的資訊 (c1, c2)，每一 category 要顯示 4 筆資料。c1, c2 由學號後兩碼來決定，顯示順序先 c1 再 c2，說明如下：
     1, 6 -- hats
     2, 7 -- jackets
     3, 8 -- sneakers
     4, 9 -- womens
     5, 0 -- mens
     如果 c1 = c2 兩個相同，那 c2 就取下一個。要繳交
     . 說明 c1, c2 那是坐那兩個
     . local 端 Chrome 執行結果截圖
     . Github page 執行結果截圖
     . 重要相關的原始程式碼

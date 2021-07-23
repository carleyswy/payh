import React, { useState } from 'react';
import { Menu  } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { BrowserRouter, Switch, Route, useParams, Link } from "react-router-dom";
import Sider from "./Sider";
import Content from "./Content";
const { SubMenu } = Menu;
function Layout(){
    const rootSubmenuKeys = ['sub1', 'sub2'];
  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
    return (
        <div class="container">
        <div class="header">
        </div>
        <div class="main">
          <Sider />

   
          <Content />
          
        </div>
        <div class="footer">
        </div>

        

        
      </div>

    )
}

export default Layout;
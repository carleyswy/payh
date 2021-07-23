import React, { useState } from 'react';
import { Menu  } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { BrowserRouter, Switch, Route, useParams, Link } from "react-router-dom";

const { SubMenu } = Menu;
function Sider(){
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
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

          <div class="menu">

          <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
            <SubMenu key="sub1" icon={<MailOutlined />} title="React基本使用">
              <Menu.Item key="JSXBaseDemo" title="7-4 JSS基本知识点串讲 JSXBaseDemo">
              <Link to="/react-code-demo/baseUse/JSXBaseDemo">7-4 JSS基本知识点串讲 JSXBaseDemo</Link>
              </Menu.Item>
              <Menu.Item key="ConditionDemo" title="7-5 JSX如何判断条件和渲染列表 ConditionDemo">
              <Link to="/react-code-demo/baseUse/ConditionDemo">7-5 JSX如何判断条件和渲染列表 ConditionDemo</Link>
              </Menu.Item>
              <Menu.Item key="ListDemo" title="7-5 JSX如何判断条件和渲染列表 ListDemo">
              <Link to="/react-code-demo/baseUse/ListDemo">7-5 JSX如何判断条件和渲染列表 ListDemo</Link>
              </Menu.Item>
              <Menu.Item key="EventDemo2" title="7-6 React事件何为bind this EventDemo">
              <Link to="/react-code-demo/baseUse/EventDemo">7-6 React事件何为bind this EventDemo</Link>
              </Menu.Item>
              <Menu.Item key="EventjiushDemo" title="7-7 React事件和DOM事件的区别 EventjiushDemo">
              <Link to="/react-code-demo/baseUse/EventDemo">7-7 React事件和DOM事件的区别 EventjiushDemo</Link>
              </Menu.Item>
              <Menu.Item key="FormDemo" title="7-8 React表单知识点串讲 FormDemo">
              <Link to="/react-code-demo/baseUse/FormDemo">7-8 React表单知识点串讲 FormDemo</Link>
              </Menu.Item>
              <Menu.Item key="PropsDemo" title="7-9 React父子组件通讯 PropsDemo">
              <Link to="/react-code-demo/baseUse/PropsDemo">7-9 React父子组件通讯 PropsDemo</Link>
              </Menu.Item>
              <Menu.Item key="StateDemo" title="7-10 setState为何使用不可变值 StateDemo">
              <Link to="/react-code-demo/baseUse/StateDemo">7-10 setState为何使用不可变值 StateDemo</Link>
              </Menu.Item>
              <Menu.Item key="StateDemo2" title="7-11 setState是同步还是异步 StateDemo">
              <Link to="/react-code-demo/baseUse/StateDemo">7-11 setState是同步还是异步 StateDemo</Link>
              </Menu.Item>
              <Menu.Item key="StateDemo3" title="7-12 setState合适会合并state StateDemo">
              <Link to="/react-code-demo/baseUse/StateDemo">7-12 setState合适会合并state StateDemo</Link>
              </Menu.Item>
              <Menu.Item key="LifeCycle" title="7-13 React组件生命周期 LifeCycle">
              <Link to="/react-code-demo/baseUse/LifeCycle">7-13 React组件生命周期 LifeCycle</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="React高级使用">
              <Menu.Item key="N7_15" title="7-15 React函数组件和class组件有何区别 N7_15">
              <Link to="/react-code-demo/advancedUse/N7_15">7-15 React函数组件和class组件有何区别 N7_15</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<AppstoreOutlined />} title="React原理">
              <Menu.Item key="P" title="React原理P">
              <Link to="/react-code-demo/principle/P">React原理P</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
          </div>

          

    )
}

export default Sider;
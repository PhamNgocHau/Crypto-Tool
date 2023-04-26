import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

import {
  AppstoreOutlined,
  ContainerOutlined,
  LineChartOutlined,
  MailOutlined,
  SettingOutlined,
  DoubleRightOutlined,
  DoubleLeftOutlined
} from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Button, Menu } from 'antd';

type navigationProperties = {
  label?: string,
  key?: string,
  icon?: React.ReactNode,
  children?: React.ReactNode,
  type?: string,
  route?: string
};

const NavigationMenuComponent: React.FC<navigationProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<any[]>([]);
  
  const navigate = useNavigate();

  useEffect(() => {
   const items = [
      getItem('Setting Tool', 'setting', <SettingOutlined />, "/setting"),
      getItem('Statistical', '2', <LineChartOutlined />),
      getItem('Option 3', '3', <ContainerOutlined />),
      getItem('Navigation One', 'sub1', <MailOutlined />),
      getItem('Navigation Two', 'sub2', <AppstoreOutlined />),
    ];
    
    setMenuItems(items);
  }, []);
  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  
  const getItem = (label?: string, key?: string, icon?: React.ReactNode, route?: string, children?: React.ReactNode, type?: string): navigationProperties => {
    return {
      label,
      key,
      icon,
      route,
      children,
      type
    }
  };
  
  const handleClickNavigation = (option) => {
    console.log('option >>', option);
    navigate(option.route);
  };

  return (
    <div className={`menu-wrapper ${collapsed ? "menu-collapsed" : ""}`}>
      <Button type="primary" onClick={() => toggleCollapsed()} style={{ marginBottom: 16 }}>
        {collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['setting']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        {menuItems.map((item) => {
          return (
            <Menu.Item key={item.key} onClick={() => handleClickNavigation(item)} className="menu-item-wrapper" title="">
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
            </Menu.Item>
          )
        })}
        
      </Menu>
    </div>
  )
}

export default NavigationMenuComponent;

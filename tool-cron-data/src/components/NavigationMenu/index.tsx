import React, { useState, useEffect } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

import type { MenuProps, MenuTheme } from 'antd';

import { Button, Menu } from 'antd';

type navigationProperties = {
  label?: string,
  key?: string,
  icon?: React.ReactNode,
  children?: React.ReactNode,
  type?: string,
};

const NavigationMenuComponent: React.FC<navigationProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<any[]>([]);
  
  
  useEffect(() => {
   const items = [
      getItem('Setting Tool', 'setting', <PieChartOutlined />),
      getItem('Statistical', '2', <DesktopOutlined />),
      getItem('Option 3', '3', <ContainerOutlined />),
      getItem('Navigation One', 'sub1', <MailOutlined />),
      getItem('Navigation Two', 'sub2', <AppstoreOutlined />),
    ];
    
    setMenuItems(items);
  }, []);
  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  
  const getItem = (label?: string, key?: string, icon?: React.ReactNode, children?: React.ReactNode, type?: string): navigationProperties => {
    return {
      label,
      key,
      icon,
      children,
      type
    }
  };
  
  const handleClickNavigation = (option) => {
    console.log('option >>', option);
  };

  return (
    <div className="menu-wrapper">
      <Button type="primary" onClick={() => toggleCollapsed()} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['setting']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        {menuItems.map((item) => {
          return (
            <Menu.Item key={item.key} onClick={() => handleClickNavigation(item)}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Menu.Item>
          )
        })}
        
      </Menu>
    </div>
  )
}

export default NavigationMenuComponent;

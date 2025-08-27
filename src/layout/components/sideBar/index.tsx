import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import "./index.scss";
import { useLocation, useNavigate } from 'react-router';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '/', icon: <HomeOutlined />, label: '工作台' },
  { key: '/article', icon: <HomeOutlined />, label: '文章管理' },
];

interface SidebarProps {
  toggleCollapsed: () => void;
  collapsed: boolean;
}

const SideBar: React.FC<SidebarProps> = (props) => {
  const { collapsed, toggleCollapsed } = props
  const [selectedKeys, setSelectedKeys] = useState('/');
  const location = useLocation();
  const navigate = useNavigate();

  // 只在路由变化时更新选中状态
  useEffect(() => {
    // 函数式更新，避免不必要的状态更新
    setSelectedKeys(prev => {
      if (prev !== location.pathname) {
        return location.pathname;
      }
      return prev;
    });
  }, [location.pathname]);

  const onSelect: MenuProps['onSelect'] = (info) => {
    navigate(info.key)
  };

  return <div className='side-bar-content'>
    <div className="brand">
      {selectedKeys}
    </div>
    <Menu
      defaultSelectedKeys={['/']}
      selectedKeys={[selectedKeys]}
      mode="inline"
      inlineCollapsed={collapsed}
      items={items}
      onSelect={onSelect}
    />
    <div className="hamburger" onClick={toggleCollapsed}>
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </div>
  </div>
}

export default SideBar
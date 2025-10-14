import React from 'react'
import type { MenuProps } from 'antd';
import { Dropdown, App } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import './index.scss'
import Breadcrumb from './Breadcrumb';

const { webTitle } = (window as any).globalConstant ?? {}

const TopBar: React.FC = () => {
  const { message } = App.useApp();
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '修改密码',
      onClick: () => {
        message.success('修改密码')
      }
    },
    {
      key: '2',
      label: '退出登录',
      onClick: () => {
        message.success('退出登录')
      }
    },
    {
      key: '3',
      label: '关于我们',
      onClick: () => {
        message.success('关于我们')
      }
    },
  ];

  return <div className="topbar">
    <div className="web-title">{webTitle}
      <Breadcrumb />
    </div>
    <div className="user-info">
      <Dropdown menu={{ items }} placement="bottomRight" arrow trigger={['click']}>
        <span className="user-name">admin <DownOutlined /></span>
      </Dropdown>
    </div>
  </div>
}

export default TopBar
import { useState } from 'react';
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

import SideBar from "./components/sideBar"
import TopBar from "./components/topBar"
import MainContent from "./components/content"

const LayoutContent = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (<Layout style={{ minHeight: '100vh' }}>
    <Sider collapsed={collapsed}>
      <SideBar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
    </Sider>
    <Layout>
      <Header>
        <TopBar />
      </Header>
      <Content>
        <MainContent />
      </Content>
    </Layout>
  </Layout>)
}

export default LayoutContent
import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';

import AppHome from './views/home';
import AppLogin from './components/login/login';

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppLogin />
      </Content>
      <Footer>
       <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
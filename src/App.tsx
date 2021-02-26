import './App.css';
import {Layout, Menu, Switch} from 'antd';
import 'antd/dist/antd.css'
import React from 'react';
import {NavLink, Route, withRouter} from 'react-router-dom';
import Login from "./components/login/Login";
import TryLogin from "./components/login/tryLogin";

const {Header, Content, Sider, Footer} = Layout;

function App() {
    return (
        <Layout style={{height: "100vh"}}>

            <Header style={{backgroundColor: 'white'}}>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal">

                </Menu>
            </Header>

            <Content style={{padding: '0 50px'}}>

                <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', backgroundColor: 'white'}}
                        >
                            <Menu.Item key="1">Профиль</Menu.Item>
                            <Menu.Item key="2">Сообщения</Menu.Item>
                            <Menu.Item key="3">Друзья</Menu.Item>
                            <Menu.Item key="4">Пользователи</Menu.Item>
                            <Menu.Item key="5"><NavLink to={'/login'}>Login</NavLink></Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{padding: '0 24px', minHeight: 280}}>

                        <Route path='/login' render={() => <TryLogin/>}/>


                    </Content>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}>FOOTER</Footer>
        </Layout>
    );
}

export default App;

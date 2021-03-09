import './App.css';
import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css'
import React, {useEffect} from 'react';
import {NavLink, Route} from 'react-router-dom';
import Login from "./components/login/Login";
import ProfilePage from "./components/profile/profilePage";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./data/store";
import {initializeTC} from "./data/init-reducer";
import {logoutTC} from "./data/auth-reducer";
import UsersPage from "./users/usersPage";
import DialogsPage from "./components/dialogs/DialogsPage";
import {io, Socket} from "socket.io-client";

const {Header, Content, Sider, Footer} = Layout;

export let socket: Socket;

function App() {

    const dispatch = useDispatch()
    dispatch(initializeTC())
    const isInit = useSelector((state: AppStateType) => state.init.isInit)
    const userId = useSelector((state: AppStateType) => state.auth.userId)


    if(!isInit) return (<div>Loading...</div>)

    if(!socket){
        socket = io(`ws://localhost:5000?userId=${userId}`)
    }


    return (
        <Layout>

            <Header style={{backgroundColor: 'white'}}>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal">

                </Menu>
            </Header>

            <Content style={{padding: '0 50px'}}>

                <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                    <Sider className="site-layout-background" width={200}  style={{height: '325px', backgroundColor: 'white'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{height: '325px', backgroundColor: 'white'}}
                        >
                            <Menu.Item key="1"><NavLink to={'/profile'}>Профиль</NavLink></Menu.Item>
                            <Menu.Item key="2"><NavLink to={'/dialogs'}>Сообщения</NavLink></Menu.Item>
                            <Menu.Item key="3">Друзья</Menu.Item>
                            <Menu.Item key="4"><NavLink to={'/users'}>Пользователи</NavLink></Menu.Item>
                            <Menu.Item key="5"><NavLink to={'/login'}>Login</NavLink></Menu.Item>
                            <Menu.Item key="6" onClick={(e) => {dispatch(logoutTC())}}><NavLink to={'/login'}>Logout</NavLink></Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{padding: '0 24px', minHeight: 280, overflow: 'initial'}}>

                        <Route path='/login' render={() => <Login/>}/>
                        <Route exact path='/profile' render={() => <ProfilePage/>}/>
                        <Route path='/profile/:userId' render={() => <ProfilePage/>}/>
                        <Route path='/users' render={() => <UsersPage/>}/>
                        <Route path='/dialogs' render={() => <DialogsPage/>}/>
                    </Content>
                </Layout>
            </Content>

        </Layout>
    );
}

export default App;

import './App.css';
import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css'

const {Header, Content, Sider, Footer} = Layout;

function App() {
    return (
        <Layout style={{height:"100vh"}}>

            <Header style={{backgroundColor: 'white'}}>
                <div className="logo" />
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
                        </Menu>
                    </Sider>
                    <Content style={{padding: '0 24px', minHeight: 280}}>Content</Content>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}>FOOTER</Footer>
        </Layout>
    );
}

export default App;

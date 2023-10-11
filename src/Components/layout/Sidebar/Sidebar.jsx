import React, { useState } from 'react';
import './Sidebar.css'
import {
    AppstoreOutlined,
    StockOutlined,
    DatabaseOutlined,
    TeamOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;



function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate()
    return (

        <Sider className='side' trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical " />
            <div className="logo">
                <img src='../src/assets/img/Haven.png' alt="Haven logo" />
                <h3>haven diagnostics</h3>
            </div>
            <Menu
                onClick={({ key }) => {
                    console.log(key);
                    navigate(key)
                }}
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '/',
                        icon: <AppstoreOutlined />,
                        label: 'Dashboard',
                    },
                    {
                        key: '/forecast',
                        icon: <StockOutlined />,
                        label: 'Forecast',
                    },
                    {
                        key: '/allofices',
                        icon: <DatabaseOutlined />,
                        label: 'All ofices',

                    },
                    {
                        key: '/employees',
                        icon: <TeamOutlined />,
                        label: 'Employees',

                    }
                ]}
            />
        </Sider>

    );


}

export default Sidebar


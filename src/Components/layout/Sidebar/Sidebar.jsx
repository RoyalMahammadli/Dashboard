import React, { useState } from 'react';
import './Sidebar.css'
import {
    AppstoreOutlined,
    StockOutlined,
    DatabaseOutlined,
    TeamOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme, Avatar, Space, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, DownOutlined } from '@ant-design/icons';


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



            <div className="profile">
                <Space direction="vertical" size={16}>
                    <Space wrap size={16}>
                        <Avatar size="small" icon={<UserOutlined />} />
                    </Space>

                </Space>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space style={{
                            cursor:'pointer'
                        }}>
                            <p>My profile</p>
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </Sider>

    );


}

export default Sidebar




const items = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];




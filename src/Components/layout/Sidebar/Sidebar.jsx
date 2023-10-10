import React, { useState } from 'react';
import './Sidebar.css'
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
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
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Dashboard',
                            key: '/'
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Forecast',
                            key: '/forecast'
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'All ofices',
                            key: '/allofices'

                        },
                        {
                            key: '4',
                            icon: <UploadOutlined />,
                            label: 'Employees',
                            key: '/employees'

                        }
                    ]}
                />
            </Sider>
       
    );


}

export default Sidebar


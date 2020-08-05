import React,  { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';

const Nav = props => {
    const [currentTab, setCurrentTab] = useState('home')
    return (
        <Menu className='Nav' onClick={setCurrentTab} selectedKeys={[currentTab]} mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined />}>
                Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                Navigation Two
            </Menu.Item>
            <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            </Menu.Item>
        </Menu>
    )
}
export default Nav;
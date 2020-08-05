import React, { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';

const Nav = props => {
    const [currentTab, setCurrentTab] = useState('home')
    return (
        <div className='Nav'>
            <Menu onClick={setCurrentTab} selectedKeys={[currentTab]} mode="horizontal">
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
        </div>
    )
}
export default Nav;
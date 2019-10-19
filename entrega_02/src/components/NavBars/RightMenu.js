import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import Login from '../LoginPage';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
//const [modalShow, setModalShow] = React.useState(false);
function RightMenu() {
  const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
        <Menu mode="horizontal">
          <Menu.Item key="mail">
            <a href="#" onClick={() => setModalShow(true)} >Signin</a>
          </Menu.Item>
          <Menu.Item key="app">
            <a href="">Signup</a>
          </Menu.Item>
        </Menu>
        <Login
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  
}
export default RightMenu;
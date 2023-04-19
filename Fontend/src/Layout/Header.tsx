import {
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileFilled,
} from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Menu } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { signOutAction } from "../app/authSlice";
import { useAppSelector } from "../app/hooks";
import { ISider } from "./propsState";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

// router menu
const HeaderComponent = (props: ISider) => {
  const dispatch = useDispatch();
  const _logout = () => {
    dispatch(signOutAction() as any);
  };
  const { userInfo } = useAppSelector((state) => state.auth);

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<ProfileFilled style={{ color: "darkcyan" }} />}>
        <NavLink to={`/user/profile/${userInfo?.id}`}>
          <span style={{ color: "darkcyan" }}>Trang cá nhân</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={<LoginOutlined style={{ color: "red" }} />}
        onClick={_logout}
      >
        <span className="text-red-600">Đăng Xuất</span>
      </Menu.Item>
    </Menu>
  );
 
  return (
    <Header
      className="header-app z-10"
      style={{
        padding: 0,
        background: "#ffbf80",
        boxShadow: "#ffbf80 0px 1px 2px",
      }}
    >
      <div className="ml-6">
        {React.createElement(
          props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger text-xl",
            style: { color: "#ff4b2b" },
            onClick: () => props.changeCollapsed(true),
          }
        )}
      </div>
      <div className="mr-8">
        <Dropdown overlay={menu} trigger={["click"]}>
          <div>
            <Avatar src={userInfo.avatar}>
              {userInfo.firstName
                ? userInfo.firstName.charAt(0).toUpperCase()
                : ""}
            </Avatar>
            <strong
              className="fullname hover:text-red-500"
              style={{
                color: "#ff4b2b",
              }}
            >
              {userInfo.lastName}
            </strong>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default withRouter(HeaderComponent);

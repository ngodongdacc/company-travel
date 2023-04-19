import { ApartmentOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/ava.png";
import { ISider } from "./propsState";
import "./styles.scss";
import { PERMISSION_ENUM } from "../utils/permisson.enum";

const { Sider } = Layout;
// router menu
const SiderBarComponent = (props: ISider) => {
  const [defaultOpenKeys] = useState([props.location.pathname || "/post"]);
  const [selectedkey, setSelectedKey] = useState([
    props.location.pathname || "/post",
  ]);

  useEffect(() => {}, [props.location.pathname]);

  const onClick: MenuProps["onClick"] = (e) => {
    setSelectedKey([e.key]);
  };

  type MenuItem = Required<MenuProps>["items"][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    permission?: PERMISSION_ENUM | PERMISSION_ENUM[],
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return true
      ? ({
          key,
          icon,
          children,
          label,
          type,
        } as MenuItem)
      : null;
  }
  const items: MenuItem[] = [
    getItem(
      <NavLink to="/">
        <span>Company Cost</span>
      </NavLink>,
      "category",
      <ApartmentOutlined style={{ color: "coral" }} />,
      [PERMISSION_ENUM.CATEGORY_CREATE, PERMISSION_ENUM.CATEGORY_LIST]
    ),
  ];

  return (
    <Sider
      className="h-screen overflow-auto scrollbar"
      theme="light"
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      breakpoint="lg"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      }}
    >
      <div className="logo p-4">
        <img src={Logo} alt="logo" />
        {/* <Logo /> */}
      </div>
      <Menu
        theme="light"
        mode="inline"
        onClick={onClick}
        selectedKeys={selectedkey}
        defaultOpenKeys={defaultOpenKeys}
        className="mt-2"
        items={items}
        // className="position-fixed"
      />
    </Sider>
  );
};

export default withRouter(SiderBarComponent);

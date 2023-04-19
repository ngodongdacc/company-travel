import { Layout } from "antd";
import React, { useState } from "react";
import HeaderComponent from "./Header";
import SiderBarComponent from "./Sider";
import "./styles.scss";
interface IProps {
  children: any;
}

const { Content } = Layout;

const LayoutComponent = (props: IProps) => {
  const [state, setState] = useState({
    collapsed: false,
  });
  const toggle = () => {
    setState({
      ...state,
      collapsed: !state.collapsed,
    });
  };

  return (
    <Layout id="layout" className="flex" style={{ background: "#f9fafb" }}>
        <SiderBarComponent collapsed={state.collapsed} changeCollapsed={toggle} />
      <Layout className="site-layout">
        <HeaderComponent collapsed={state.collapsed} changeCollapsed={toggle} />
        <Content className="site-layout-background content-layout m-0 h-10 overflow-auto scrollbar">
          {props.children}
        </Content>
        {/* <FooterComponent /> */}
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;

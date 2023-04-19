import { Layout } from "antd";
import { memo } from "react";
import "./styles.scss";
const { Footer } = Layout;

const FooterComponent = () => {
  return <Footer>{/* E-learning ©{new Date().getFullYear()} */}</Footer>;
};

export default memo(FooterComponent);

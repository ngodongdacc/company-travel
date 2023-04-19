import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../Layout";
import companyCostPage from "../screens/companyCost/component";


const PrivateRoute = ({ ...routeProps }: any) => {
  const prop = {
    ...routeProps,
  };
  return (
    <Layout>
      <Route {...prop} />
    </Layout>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
  
        <PrivateRoute
          module="companyCost"
          path="/"
          component={companyCostPage}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;

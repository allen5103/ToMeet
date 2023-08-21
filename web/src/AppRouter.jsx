// AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout.jsx";
import useAppInfo from "./useAppInfo.js";
// 引入您的不同頁面組件

const AppRouter = () => {
  const { routeMap } = useAppInfo();
  return (
    <Router basename="/">
      <Route>
        <Layout routeMap={routeMap}>
          <Switch>
            {routeMap.map((r) => (
              <Route
                key={r.name}
                exact={r.name === "home"}
                path={r.path}
                component={r.component}
              />
            ))}
          </Switch>
        </Layout>
      </Route>
    </Router>
  );
};

export default AppRouter;

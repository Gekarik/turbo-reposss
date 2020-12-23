import React, { useContext } from "react";
import { UserContext } from "../contexts/user-context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageLoader from "../components/layout/page-loader/PageLoader";
import LoginPage from "./login-page/LoginPage";
import HomePage from "./home-page/HomePage";

function PublicRouter() {
  return (
    <Route path="*">
      <LoginPage />
    </Route>
  );
}

function PrivateRouter() {
  const { isLoading: isUserLoading } = useContext(UserContext);

  if (isUserLoading) {
    return <PageLoader />;
  }

  return (
    <Route path="*">
      <HomePage />
    </Route>
  );
}

function Routes() {
  const { isAuth } = useContext(UserContext);

  return <Router>{isAuth ? <PrivateRouter /> : <PublicRouter />}</Router>;
}

export default Routes;

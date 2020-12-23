import React from "react";
import { Card, Elevation } from "@blueprintjs/core";
import Styles from "./LoginPage.module.scss";
import LoginForm from "../../components/forms/login-form/LoginForm";

export default function LoginPage() {
  return (
    <div className={Styles.login_page}>
      <Card className={Styles.login_page__form} elevation={Elevation.ONE}>
        <LoginForm />
      </Card>
    </div>
  );
}

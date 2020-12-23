import cl from "./LoginForm.module.scss";
import React from "react";
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import { Form, Field } from "react-final-form";

const LoginForm = ({ onSuccess = () => {} }) => {
  const onSubmit = () => {
    // await api
    onSuccess();
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="login">
              {({ input }) => (
                <FormGroup label="Логин:">
                  <InputGroup {...input} placeholder="Логин" />
                </FormGroup>
              )}
            </Field>
            <Field name="password">
              {({ input }) => (
                <FormGroup label="Пароль:">
                  <InputGroup {...input} placeholder="Пароль" type="password" />
                </FormGroup>
              )}
            </Field>

            <div className={cl.buttons}>
              <Button className={cl.buttonAdd} type="submit" intent="primary">
                Вход
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default LoginForm;

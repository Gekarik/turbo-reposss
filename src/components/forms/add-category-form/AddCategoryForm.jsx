import cl from "./AddCategoryForm.module.scss";
import React from "react";
import { Button, FormGroup, InputGroup, Switch } from "@blueprintjs/core";
import { Form, Field } from "react-final-form";

const AddCategoryForm = ({ onSuccess = () => {}, onCancel = () => {} }) => {
  const onSubmit = (values) => {
    // await api
    onSuccess();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name">
              {({ input }) => (
                <FormGroup label="Имя:">
                  <InputGroup {...input} placeholder="Name" />
                </FormGroup>
              )}
            </Field>
            <Field name="alias">
              {({ input }) => (
                <FormGroup label="Алиас:">
                  <InputGroup {...input} placeholder="Алиас" />
                </FormGroup>
              )}
            </Field>
            <Field name="hidden">
              {({ input }) => (
                <FormGroup className={cl.topic}>
                  <Switch
                    {...input}
                    labelElement="Скрыть"
                    innerLabelChecked="on"
                    innerLabel="off"
                  />
                </FormGroup>
              )}
            </Field>
            <div className={cl.buttons}>
              <Button type="button" onClick={handleCancel}>
                Отменить
              </Button>
              <Button className={cl.buttonAdd} type="submit" intent="primary">
                Добавить
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default AddCategoryForm;

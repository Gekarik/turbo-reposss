import React, { useState, useEffect } from "react";
import cl from "./EditKeep.module.css";
import {
  Button,
  FormGroup,
  InputGroup,
  Slider,
  Switch,
  Alert,
  Intent,
} from "@blueprintjs/core";
import AppToaster from "../../common/app-toaster/AppToaster";
import { Form, Field } from "react-final-form";
import { changeKeep } from "../../../api/keep";

const EditKeep = ({
  onSuccess = () => {},
  onCancel = () => {},
  onDelete = () => {},
  keep,
}) => {
  const [isLoader, setIsLoader] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [value, setvalue] = useState({
    ...keep,
    title: keep.title,
    text: keep.text,
    color_background: keep.color_background,
    color: keep.color,
  });
  const onSubmit = async (values) => {
    try {
      await changeKeep(values);
    } catch (error) {
      console.log(error);
    }
    onSuccess();
  };

  const handleCancel = () => {
    onCancel();
  };

  const loadvalueTopic = () => {
    setIsLoader(true);
    try {
      //api
      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
    }
  };

  const handleDeleteKeep = async () => {
    //api
    onDelete(keep.id);
    setIsOpenAlert(false);
    AppToaster.show({
      message: `Данная заметка удалена`,
    });
    // onCancel();
  };

  const handleAlertOpen = () => {
    setIsOpenAlert(true);
  };

  const handleAlertCancel = () => {
    setIsOpenAlert(false);
  };

  useEffect(() => {
    loadvalueTopic();
  }, []);

  if (isLoader) {
    <Slider intent="primary" size="200" />;
  }

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={value}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="title">
              {({ input }) => (
                <FormGroup label="Заголовок:">
                  <InputGroup {...input} placeholder="Заголовок" />
                </FormGroup>
              )}
            </Field>
            <Field name="text">
              {({ input }) => (
                <FormGroup label="Текст:">
                  <InputGroup {...input} placeholder="Текст" />
                </FormGroup>
              )}
            </Field>
            <label name="color_background">Цвет фона: </label>
            <Field
              style={{ width: 120 }}
              name="color_background"
              component="select"
            >
              <option />
              <option
                style={{ backgroundColor: "black" }}
                value="black_back"
              ></option>
              <option
                style={{ backgroundColor: "red" }}
                value="red_back"
              ></option>
              <option
                style={{ backgroundColor: "blue" }}
                value="blue_back"
              ></option>
              <option
                style={{ backgroundColor: "green" }}
                value="green_back"
              ></option>
            </Field>

            <label name="color">Цвет текста: </label>
            <Field name="color" component="select" style={{ width: 120 }}>
              <option />
              <option
                style={{ backgroundColor: "black" }}
                value="black"
              ></option>
              <option style={{ backgroundColor: "red" }} value="red"></option>
              <option style={{ backgroundColor: "blue" }} value="blue"></option>
              <option
                style={{ backgroundColor: "green" }}
                value="green"
              ></option>
            </Field>

            <div className={cl.buttons}>
              <Button type="button" onClick={handleAlertOpen} intent="danger">
                Удалить
              </Button>
              <Alert
                cancelButtonText="Отмена"
                confirmButtonText="Удалить"
                icon="trash"
                intent={Intent.DANGER}
                isOpen={isOpenAlert}
                onCancel={handleAlertCancel}
                onConfirm={handleDeleteKeep}
              >
                <p>Вы действительно хотите удалить данную заметку?</p>
              </Alert>
              <div>
                <Button type="button" onClick={handleCancel}>
                  Отменить
                </Button>
                <Button className={cl.buttonAdd} type="submit" intent="primary">
                  Сохранить
                </Button>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default EditKeep;

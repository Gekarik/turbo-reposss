import React from "react";
import ButtonWithModal from "../../components/common/button-with-modal/ButtonWithModal";
import AddUserForm from "../../components/forms/add-user-form/AddUserForm";
import ChangeUserForm from "../../components/forms/change-user-form/ChangeUserForm";
import AddCategoryForm from "../../components/forms/add-category-form/AddCategoryForm";
import ChangedCategoryForm from "../../components/forms/change-category-form/ChangeCategoryForm";
import LoginForm from "../../components/forms/login-form/LoginForm";
import AddTopicForm from "../../components/forms/add-topic-form/AddTopicForm";
import ChangedTopicForm from "../../components/forms/changed-topic-form/ChangedTopicForm";
import { Button } from "@blueprintjs/core";

export default function HomePage() {
  const handleUserAdded = (user, callback) => {
    //api
    callback();
  };

  const handleUserDelete = (id, callback) => {
    //api
    callback();
  };

  const handleUserChanged = (user, callback) => {
    //api
    callback();
  };

  return (
    <div className="App">
      <header className="App-header">
        <ButtonWithModal
          content={({ closeModal }) => (
            <AddUserForm
              onCancel={closeModal}
              onSuccess={(user) => handleUserAdded(user, closeModal)}
            />
          )}
          buttonRenderer={(buttonProps) => (
            <Button {...buttonProps}>Добавить</Button>
          )}
        />
        <ButtonWithModal
          content={({ closeModal }) => (
            <ChangeUserForm
              onSuccess={(user) => handleUserChanged(user, closeModal)}
              onCancel={closeModal}
              onDelete={(id) => handleUserDelete(id, closeModal)}
            />
          )}
          buttonRenderer={(buttonProps) => (
            <Button {...buttonProps}>Редактировать</Button>
          )}
        />
        <ButtonWithModal
          content={({ closeModal }) => (
            <AddCategoryForm onSuccess={closeModal} onCancel={closeModal} />
          )}
          buttonRenderer={(buttonProps) => (
            <Button {...buttonProps}>Добавить тему</Button>
          )}
        />
        <ButtonWithModal
          content={({ closeModal }) => (
            <ChangedCategoryForm
              onSuccess={closeModal}
              onCancel={closeModal}
              onDelete={closeModal}
            />
          )}
          buttonRenderer={(buttonProps) => (
            <Button {...buttonProps}>Изменить тему</Button>
          )}
        />
        <ButtonWithModal
          content={({ closeModal }) => (
            <LoginForm
              onSuccess={closeModal}
              onCancel={closeModal}
              onDelete={closeModal}
            />
          )}
          buttonRenderer={(buttonProps) => (
            <Button {...buttonProps}>Вход</Button>
          )}
        />
        <ButtonWithModal
          content={({ closeModal }) => (
            <AddTopicForm onCancel={closeModal} onSuccess={closeModal} />
          )}
          buttonRenderer={(buttonProps) => (
            <Button {...buttonProps}>Добавить тему</Button>
          )}
        />
        <ButtonWithModal
          content={({ closeModal }) => (
            <ChangedTopicForm onCancel={closeModal} onSuccess={closeModal} />
          )}
          buttonRenderer={(buttonProps) => (
            <Button {...buttonProps}>Редактировать тему</Button>
          )}
        />
      </header>
    </div>
  );
}

import React from "react";
import st from "./Keep.module.css";
import classnames from "classnames";
import { Icon, Intent } from "@blueprintjs/core";
import ButtonWithModal from "../../components/common/button-with-modal/ButtonWithModal";
import LookKeep from "../../components/forms/look-keep/LookKeep";
import EditKeep from "../../components/forms/edit-keep/EditKeep";
import AppToaster from "../../components/common/app-toaster/AppToaster";

const KeepPage = ({ keep, onDelete }) => {
  const { type, title, text, color, color_background } = keep;

  const handleDeleteKeep = async () => {
    //api
    onDelete(keep.id);
    AppToaster.show({
      message: `Данная заметка удалена`,
    });
  };

  return (
    <div className={classnames(st.container, st[color], st[color_background])}>
      <h4>{title}</h4>
      <p>{text}</p>
      <div className={st.container_icons}>
        <ButtonWithModal
          content={({ closeModal }) => (
            <LookKeep keep={keep} onCancel={closeModal} />
          )}
          buttonRenderer={(buttonProps) => (
            <Icon icon="eye-open" {...buttonProps} />
          )}
        />
        <ButtonWithModal
          content={({ closeModal }) => (
            <EditKeep keep={keep} onCancel={closeModal} onDelete={onDelete} />
          )}
          buttonRenderer={(buttonProps) => (
            <Icon icon="edit" {...buttonProps} />
          )}
        />
        <Icon icon="trash" onClick={handleDeleteKeep} />
      </div>
    </div>
  );
};

export default KeepPage;

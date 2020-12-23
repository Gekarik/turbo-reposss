import React, { useState } from "react";
import cl from "./ButtonWithModal.module.css";
import {
  Dialog,
  Classes,
  Button,
  AnchorButton,
  Intent,
} from "@blueprintjs/core";
import classnames from "classnames";

const defaultButtonRender = ({ onClick }) => (
  <Button onClick={onClick}>Button</Button>
);

const ButtonWithModal = ({
  content,
  autoFocus = true,
  enforceFocus = true,
  usePortal = true,
  canOutsideClickClose = false,
  titleModal = null,
  className = null,
  buttonRenderer = defaultButtonRender,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleShowModal = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <>
      <Dialog
        isOpen={isOpen}
        autoFocus={autoFocus}
        enforceFocus={enforceFocus}
        usePortal={usePortal}
        canOutsideClickClose={canOutsideClickClose}
        title={titleModal}
        onClose={handleClose}
        className={classnames(className, cl.dialog)}
      >
        <div className={classnames(Classes.DIALOG_BODY)}>
          {content({ closeModal: handleClose })}
        </div>
      </Dialog>
      {buttonRenderer({ onClick: handleShowModal })}
    </>
  );
};

export default ButtonWithModal;

import React from "react";
import { Classes, Button } from "@blueprintjs/core";
import st from "./LookKeep.module.css";

const LookKeep = ({ keep, onCancel }) => {
  const { title, text } = keep;

  return (
    <div className={Classes.DIALOG_BODY}>
      <h4>{title}</h4>
      <p>{text}</p>
      <div className={st.button}>
        <Button type="submit" intent="primary" onClick={onCancel}>
          Закрыть
        </Button>
      </div>
    </div>
  );
};

export default LookKeep;

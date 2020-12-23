import React from "react";
import Styles from "./PageLoader.module.scss";
import { Spinner, Intent } from "@blueprintjs/core";

export default function PageLoader() {
  return (
    <div className={Styles.page_loader}>
      <Spinner intent={Intent.PRIMARY} size={Spinner.SIZE_STANDARD} />
    </div>
  );
}

import React from "react";
import st from "./main.module.css";
import { Button } from "@blueprintjs/core";
import Wrap from "../../components/wrapper/Wrap";
import Keep from "../../img/keep.jpg";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const history = useHistory();
  return (
    <div className={st.container}>
      <div className={st.container_block_img_keep}>
        <div className={st.container_block_img_keep_wrap}>
          <div className={st.container_block_img_keep_wrap_content}>
            <div className={st.container_block_img_keep_wrap_content_title}>
              <h2
                className={st.container_block_img_keep_wrap_content_title_text}
              >
                Делать заметки теперь проще простого
              </h2>
              <Button
                onClick={() => {
                  history.push("/app");
                }}
                intent="primary"
                className={
                  st.container_block_img_keep_wrap_content_title_button
                }
              >
                Попробовать сейчас
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Wrap className={st.block_keep}>
        <h3 className={st.block_keep_title}>Больше чем блокнот</h3>
        <p className={st.block_keep_text}>
          Добавляйте в Keep Student списки покупок и заметки.
        </p>
        <img className={st.block_keep_img} src={Keep} alt="keep" />
      </Wrap>
    </div>
  );
};

export default MainPage;

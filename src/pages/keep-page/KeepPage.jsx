import React, { useCallback, useEffect, useState } from "react";
import st from "./KeepPage.module.css";
import Keep from "./../../components/keep/Keep";
import Wrap from "../../components/wrapper/Wrap";
import { Button } from "@blueprintjs/core";
import ButtonWithModal from "../../components/common/button-with-modal/ButtonWithModal";
import AddKeep from "../../components/forms/add-keep/AddKeep";
import { getKeep, addKeep, removeKeep } from "../../api/keep";

const KeepPage = () => {
  const [keeps, setKeeps] = useState([
    {
      id: 1,
      idUser: 1,
      type: "buy",
      title: "Покупки",
      text: "Купить батон и соль",
      color_background: "blue_back",
      color: "red",
    },
    {
      id: 2,
      idUser: 2,
      type: "buy",
      title: "Дела",
      text: "Убрать в комнате, при этом все вещи надо перебрать",
      color_background: "green_back",
      color: "blue",
    },
    {
      id: 3,
      idUser: 1,
      type: "buy",
      title: "Книги",
      text: "Прочитать: Слимпер, Технотьма, LearnJS, React для чайников",
      color_background: "white_back",
      color: "green",
    },
  ]);

  const onDelete = useCallback(
    async (id) => {
      try {
        const res = await removeKeep(id);
        const filterKeep = keeps.filter((prev) => prev.id !== id);
        setKeeps(filterKeep);
      } catch (error) {
        console.log(error);
      }
    },
    [keeps]
  );

  const onCreate = useCallback(async (value) => {
    try {
      await addKeep(value);
      setKeeps((prev) => [...prev, value]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const loadingKeep = useCallback(async () => {
    try {
      const res = await getKeep();
      setKeeps((prev) => [...prev, res.data]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadingKeep();
  }, [loadingKeep]);

  return (
    <Wrap className={st.container}>
      <div className={st.title}>Ваши заметки: </div>
      <div className={st.keeps}>
        {keeps.length > 0 &&
          keeps.map((keep) => {
            return <Keep keep={keep} onDelete={onDelete} />;
          })}
      </div>
      <ButtonWithModal
        content={({ closeModal }) => (
          <AddKeep onCreate={onCreate} onCancel={closeModal} />
        )}
        buttonRenderer={(buttonProps) => (
          <Button className={st.addKeep} {...buttonProps} intent="danger">
            +
          </Button>
        )}
      />
    </Wrap>
  );
};

export default KeepPage;

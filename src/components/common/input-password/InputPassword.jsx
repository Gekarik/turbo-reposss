import React, { useEffect, useCallback, useState } from "react";
import { Button, FormGroup, InputGroup, Tooltip } from "@blueprintjs/core";
import { Field } from "react-final-form";
import { generate } from "voucher-code-generator";

const InputPassword = ({ input, meta }) => {
  useEffect(() => {
    console.log(
      generate({
        length: 8,
        count: 5,
      })
    );
  }, []);

  const handleCreatePassword = useCallback(() => {
    const generatePassword = generate({
      length: 10,
      count: 1,
    });

    input.onChange(generatePassword[0]);
  }, []);

  return (
    <FormGroup label="Пароль:">
      <InputGroup
        {...input}
        placeholder="Password"
        rightElement={
          <Tooltip content={`Password`}>
            <Button
              icon={"cog"}
              minimal={true}
              onClick={handleCreatePassword}
            />
          </Tooltip>
        }
      />
    </FormGroup>
  );
};

export default InputPassword;

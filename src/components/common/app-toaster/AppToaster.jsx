import { Position, Toaster, Intent } from "@blueprintjs/core";
const AppToaster = () => {
  const Toast = Toaster.create({
    position: Position.TOP_RIGHT,
  });
  return {
    show: (...args) => {
      return Toast.show(...args);
    },
    success: ({ message, ...args }) => {
      return Toast.show({
        message,
        intent: Intent.SUCCESS,
        ...args,
      });
    },
    error: ({ message, ...args }) => {
      return Toast.show({
        message,
        intent: Intent.DANGER,
        ...args,
      });
    },
  };
};
export default AppToaster();

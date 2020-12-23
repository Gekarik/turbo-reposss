export function getAppConfig() {
  return {
    jwt: localStorage.getItem("exceed-jwt"),
  };
}

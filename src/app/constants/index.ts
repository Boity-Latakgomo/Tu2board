export const token = () => {
  if (typeof localStorage !== "undefined") {
    const token = localStorage.getItem("token");
    return token;
  }
  return null;
};

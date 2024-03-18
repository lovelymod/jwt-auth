import api from "./instants";

export const login = async ({ username, password }) => {
  return await api
    .post("/auth/login", {
      username,
      password,
    })
    .then((res) => {
      if (res.status === 200) return res.data;
    });
};

import api from "./instants";

export const getText = async () => {
  // return await api
  //   .get("/auth/test")
  //   .then((res) => {
  //     return res.data.msg;
  //   })
  //   .catch((err) => {
  //     throw new Error(err);
  //   });
  return await fetch("http://localhost:8080/auth/test", {
    headers: {
      authorization: localStorage.getItem("ACCESS_TOKEN"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

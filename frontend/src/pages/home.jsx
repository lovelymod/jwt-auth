import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getText } from "../services/text.service";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const fatchDate = async () => {
    await getText()
      .then((res) => {
        setData(res.msg)
      })
      .catch((err) => navigate("/login"));
  };

  useEffect(() => {
    fatchDate();
  }, []);
  return <div>{data}</div>;
};

export default Home;

import axios from "axios";
import { React, useEffect, useState } from "react";
import Navbar from "./navigation/Navbar";

export default function App() {
  const [charData, setCharData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      axios.get("https://thronesapi.com/api/v2/Characters").then((res) => {
        setCharData(res.data);
      });
    };
    fetchData();
  }, []);

  //console.log(fam);
  return <Navbar family={charData} />;
}

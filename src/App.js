import React, { useEffect, useState } from "react";
import axios from "axios";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import Table from "./components/Table/Table";

import "./App.scss";

function App() {
  const small_data =
    "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
  const huge_data =
    "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(huge_data).then((response) => {
      const people = response.data;
      setData(people);
      setLoading(false);
    });
  }, [small_data]);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <ClimbingBoxLoader color="orange" loading={loading} size={19} />
        </div>
      ) : (
        <Table data={data} />
      )}
    </div>
  );
}

export default App;

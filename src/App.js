import React, { useEffect, useState } from "react";
import axios from "axios";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import Table from "./components/Table/Table";
import DataType from "./components/DataType/DataType";
import DataPerson from "./components/DataPerson/DataPerson";

import "./App.scss";

// *  TODO:
// * - Сделать фильтрацию таблицы вводом в инпут

function App() {
  const small_data =
    "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
  const huge_data =
    "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [direction, setDirection] = useState(true); // если true - по возрастанию, false - по убыванию
  const [sortField, setSortField] = useState();
  const [personData, setPersonData] = useState(null);
  const [displayChooseData, setDisplayChooseData] = useState(true);

  const onSort = (nameColumn) => {
    const copyData = data.slice();
    let sortedData;

    if (direction) {
      sortedData = copyData.sort((a, b) => {
        return a[nameColumn] > b[nameColumn] ? 1 : -1;
      });
    } else {
      sortedData = copyData.sort((a, b) => {
        return a[nameColumn] < b[nameColumn] ? 1 : -1;
      });
    }

    setDirection(!direction);
    setData(sortedData);
    setSortField(nameColumn);
  };

  const onTapPerson = (item) => {
    setPersonData(item);
  };

  const handlerData = (type) => {
    let chosenType;
    if (type === "small") {
      chosenType = small_data;
    } else {
      chosenType = huge_data;
    }

    fetchChosenTypeData(chosenType);
    setDisplayChooseData(false);
    setLoading(true);
  };

  const fetchChosenTypeData = (typeData) => {
    axios.get(typeData).then((response) => {
      const people = response.data;
      setData(people);
      setLoading(false);
    });
  };

  useEffect(() => {}, [personData]);

  return (
    <div className="App">
      {displayChooseData ? (
        <DataType handlerData={handlerData} />
      ) : loading ? (
        <div className="loader">
          <ClimbingBoxLoader color="black" loading={loading} size={19} />
        </div>
      ) : (
        <div className="main">
          <form>
            <button type="submit">Найти</button>
            <input placeholder="Фильтр" />
          </form>
          <Table
            data={data}
            onSortColumn={onSort}
            sortDirection={direction}
            sortField={sortField}
            onTapPerson={onTapPerson}
          />
        </div>
      )}

      {personData ? <DataPerson personData={personData} /> : null}
    </div>
  );
}

export default App;

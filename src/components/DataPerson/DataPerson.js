import React from "react";

import "./DataPerson.scss";

function DataPerson({ personData }) {
  return (
    <div className="data-person">
      <p>
        Выбран пользователь <b>{personData.firstName + " " + personData.lastName}</b>
      </p>
      <p>Описание:</p>
      <textarea>{personData.description}</textarea>
      <p>
        Адрес проживания: <b>{personData.address.streetAddress}</b>
      </p>
      <p>Город: <b>{personData.address.city}</b></p>
      <p>Провинция/штат: <b>{personData.address.state}</b></p>
      <p>Индекс: <b>{personData.address.zip}</b></p>
    </div>
  );
}

export default DataPerson;

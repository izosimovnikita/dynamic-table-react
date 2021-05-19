import React from "react";

import down from "./img/down.svg";
import up from "./img/up.svg";

import "./Table.scss";

function Table({ data, onSortColumn, sortDirection, sortField, onTapPerson }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSortColumn("id")}>
            ID
            {sortField === "id" ? (
              sortDirection ? (
                <img src={up} alt="up arrow" />
              ) : (
                <img src={down} alt="down arrow" />
              )
            ) : null}
          </th>
          <th onClick={() => onSortColumn("firstName")}>
            Имя
            {sortField === "firstName" ? (
              sortDirection ? (
                <img src={up} alt="up arrow" />
              ) : (
                <img src={down} />
              )
            ) : null}
          </th>
          <th onClick={() => onSortColumn("lastName")}>
            Фамилия
            {sortField === "lastName" ? (
              sortDirection ? (
                <img src={up} alt="up arrow" />
              ) : (
                <img src={down} alt="down arrow" />
              )
            ) : null}
          </th>
          <th onClick={() => onSortColumn("email")}>
            E-mail
            {sortField === "email" ? (
              sortDirection ? (
                <img src={up} alt="up arrow" />
              ) : (
                <img src={down} alt="down arrow" />
              )
            ) : null}
          </th>
          <th onClick={() => onSortColumn("phone")}>
            Телефон
            {sortField === "phone" ? (
              sortDirection ? (
                <img src={up} alt="up arrow" />
              ) : (
                <img src={down} alt="down arrow" />
              )
            ) : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((person) => (
          <tr
            key={person.id + person.phone}
            onClick={() => onTapPerson(person)}
          >
            <td>{person.id}</td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.email}</td>
            <td>{person.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

import React from "react";

import "./Table.scss";

function Table({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>E-mail</th>
          <th>Телефон</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person) => (
          <tr key={person.id + Math.random() * 10}>
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

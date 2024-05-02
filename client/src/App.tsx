import React, { useState } from "react";
import "./style.css";

export const App = () => {
  return (
    <>
      <div className="search-container">
        <img
          src="/bazarIcon2.jpg"
          alt="Bazar Icon"
          className="search-bazar-icon"
        />
        <h1>Bazar Online</h1>
        <form className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="smartphones, laptops, ..."
          />
          <button className="search-button">Buscar</button>
        </form>
      </div>
    </>
  );
};

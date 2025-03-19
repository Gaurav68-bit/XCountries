import { useEffect } from "react";
import { useState } from "react";

const Card = ({flag,name}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
        height: "200px",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      <img src={flag} alt={`flag of ${name}`} style={{
        width:"100px",
      }} />
      <h2>{name}</h2>
    </div>
  );
};

function Countries() {
  const API = "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(API).then((response) =>
      response
        .json())
        .then((data) =>
          setCountries(data)).catch((error) =>
            console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {countries.map(({name,flag,abbr}) => (
        <Card key={abbr} name={name} flag={flag} />
      ))}
    </div>
  );
}

export default Countries;

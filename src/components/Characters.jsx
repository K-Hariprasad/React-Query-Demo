import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

function RQEmployee() {
  const { isLoading, data, isError, error } = useQuery("characters", () => {
    return axios.get("http://localhost:5000/characters");
  });
  const navigate = useNavigate();
  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {data?.data?.length > 0 &&
        data?.data.map((i) => (
          <section key={i.id} className="character-card">
            <p className="character-card-data-column-s">{i.id}</p>
            <p className="character-card-data-column-l">{i.name}</p>
            <p
              className={`character-card-data-column-m ${i.status.toLowerCase()}`}
            >
              {i.status}
            </p>
            <p className="character-card-data-column-m">{i.species}</p>
            <p className="character-card-data-column-l">{i.origin.name}</p>
            <button className="character-card-button" onClick={() => navigate(`/character/${i.id}`)}>View</button>
          </section>
        ))}
    </>
  );
}

export default RQEmployee;

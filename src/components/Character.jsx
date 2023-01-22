import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function Character() {
  const params = useParams();
  const characterId = params.id;
  const fetchCharacter = ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(`http://localhost:5000/characters/${id}`);
  };
  const { isLoading, data: characterData, isError, error } = useQuery(
    ["character", characterId],
    fetchCharacter
  );
  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  const {data} = characterData
  return <>{
    data && <section className="character-profile-card">
      <img src={data.image}/>
      <section>
        <h3>{data.name}</h3>
        <h5>Gender : {data.gender}</h5>
        <h5>Species : {data.species}</h5>
        <h5>Status : {data.status}</h5>
        <h5>Location : {data.location?.name}</h5>
        <h5>Origin : {data.origin?.name}</h5>
      </section>
    </section>
  }</>;
}

export default Character;

import axios from "axios";
import React, { useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { v4 as uuid } from "uuid";
import { serviceBaseUrl } from "../utils/constants";

function Notes() {
  const inputRef = useRef();
  const queryClient = useQueryClient()
  const createNote = (note) => {
    const url = `${serviceBaseUrl}/notes`;
    return axios.post(url, note);
  };
  const fetchNotes = () => {
    const url = `${serviceBaseUrl}/notes`;
    return axios.get(url);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      id: uuid(),
      text: inputRef.current.value,
    };
    mutate(note);
  };
  const { error, isError, isLoading, mutate } = useMutation(createNote, {
    onSuccess : () => {
      queryClient.invalidateQueries('notes')
    },
    
  });
  const {
    error: fetchNotesError,
    isError: isfetchNotesError,
    isLoading: isfetchNotesLoading,
    data,
  } = useQuery("notes", fetchNotes, {
    refetchOnWindowFocus:  false
  });
  if (isLoading || isfetchNotesLoading) {
    return <h1>Loading.....</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  if (isfetchNotesError) {
    return <h1>{fetchNotesError.message}</h1>;
  }
  const notesData = data?.data;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Add Note</button>
      </form>
      {notesData.length > 0 &&
        notesData.map((i) => <h6 key={i.id}>{i.text}</h6>)}
    </>
  );
}

export default Notes;

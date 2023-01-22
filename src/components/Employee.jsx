import axios from "axios";
import React, { useEffect, useState } from "react";

function Employee() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async() => {
    try {
        setLoading(true)
        const url = 'http://localhost:5000/employees'
        const res = await axios.get(url)
        setData(res.data)
        setLoading(false)
    } catch (error) {
        setError("Something went wrong!!")
        setLoading(false)
    }
  }
  if(loading){
    return <h1>Loading.....</h1>
  }
  return (
    <>
        {data?.length > 0 && data.map(i=>(
            <section key={i.id} className="employee-card">
                <p>{i.id}</p>
                <p className="employee-card-name">{i.name}</p>
                <p >{i.salary}</p>
                <p className="employee-card-designation">{i.designation}</p>
            </section>
        ))}
    </>
  )
}

export default Employee;

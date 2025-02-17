import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Read(){
    const {id} = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))

    }, [])

    return <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            {data.map((st, index) => {
                return <div key={index} className="w-50 bg-white rounded p-3">
                    <h1>Student Details</h1>
                    <h2>{st.ID}</h2>
                    <h2>{st.Name}</h2>
                    <h2>{st.Email}</h2>
                    <Link to="/" className="btn btn-primary me-2">Back</Link>
                    <Link to={`/edit/${st.ID}`} className="btn btn-info">Edit</Link>
                </div>
            })}
    </div>
}

export default Read;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


function Edit() {
    const {id} = useParams();
    const navigate = useNavigate();
        
    const [values, setValues] = useState({
        name: "",
        email: "",
    });
    
    useEffect(() => {
        axios.get(`http://localhost:8081/edit/${id}`, values)
        .then(res => setValues({...values, name: res.data[0].Name, email: res.data[0].Email}))
        .catch(err => console.log(err))
    }, [])
    

    function handleChange(e) {
        const {name, value} =e.target;

        setValues(preveValues => {
            return {
                ...preveValues,
                [name] : value,
            }
        })
    }

    function handleSubmit(e){
        
        e.preventDefault();

        axios.put(`/edit/${id}`, values)
        .then(res => {
            console.log(res)
            navigate(`/read/${id}`)
        })
        .catch(err => console.log(err))

        navigate(`/edit/${id}`)
    }

    
    return <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3">
                    <h1 className="text-primary mb-2">Update Student</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" onChange={handleChange} value={values.name} name="name" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" onChange={handleChange} value={values.email} name="email" />
                    </div>
                        <button type="submit" className="btn btn-success mt-2">Update</button>
                    </form>
                </div>
            </div>
}


export default Edit;
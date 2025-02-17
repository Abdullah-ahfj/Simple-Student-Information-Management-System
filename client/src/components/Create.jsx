import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Create(){
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setInput((preveValues => {
            return {...preveValues,
                [name] : value}
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:8081/student", input)
        .then((res) => {
            console.log(res)
            navigate("/")
        });

        setInput({
            name: "",
            email: "",
        })
    }

    return(        
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className="mb-2">                    
                    <lable htmlFor="name">Name</lable>
                    <input type="text" placeholder="Enter Name" className="form-control" onChange={handleChange} value={input.name} name="name" />
                </div>
                <div className="mb-2">                    
                    <lable htmlFor="email">Email</lable>
                    <input type="Email" placeholder="Enter Email" className="form-control"onChange={handleChange} value={input.email} name="email" />
                </div>
                <button type="submit" className="btn btn-success m-1">Submit</button>
            </form>
        </div>
    </div>
    )
}

export default Create;
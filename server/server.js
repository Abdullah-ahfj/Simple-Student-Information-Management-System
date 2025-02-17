import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";

    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error connecting to server!"});
        return res.json(result);
    })
})

app.post("/student", (req, res) =>{
    const sql = "INSERT INTO student(`Name`, `Email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email, 
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    } )
})

app.get("/read/:id", (req, res) => {
    const sql = "SELECT * FROM student WHERE ID = ?"
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if(err) return res.json("Error connecting to the server!");
        return res.json(result);
    })
})

app.get("/edit/:id", (req,res) => {
    const sql = "SELECT * FROM student WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if(err) return res.json("Error connecting to the server!");
        return res.json(result);
    })
})

app.put("/edit/:id", (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE student SET Name=?, Email=? WHERE ID=${id}`;
    
    db.query(sql, [req.body.name, req.body.email], (err, result) => {
        if(err) return res.json("Error connecting to server!");
        return res.json(result);
    })
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM student WHERE ID=${id}`;

    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error connecting to the server!"});
        return res.json(result);    
    })
})

app.listen(8081, () => {
    console.log("port is listening port 8081");
});

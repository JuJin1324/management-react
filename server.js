const fs = require('fs');
const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data.toString());
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
})
connection.connect();

let customerUri = '/api/customers';
app.get(customerUri, (req, res) => {
    connection.query(
        "select * from customer where isDeleted = 0",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

const multer = require('multer');
const upload = multer({dest: './upload'});

app.use('/image', express.static('./upload'));
app.post(customerUri, upload.single('image'), (req, res) => {
    let sql = 'Insert into customer values (null, ?, ?, ?, ?, ?, now(), 0)';
    let image = `/image/${req.file.filename}`;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [image, name, birthday, gender, job];
    connection.query(sql, params, (err, rows, fields) => {
        res.send(rows);
    })
});

app.delete(customerUri + '/:id', (req, res) => {
    let sql = `Update customer set isDeleted=1 where id=${req.params.id}`
    connection.query(sql, (err, rows, fields) => {
        res.send(rows);
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));
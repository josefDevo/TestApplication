var connection = require('./mysqlconnection');

// Getting data from user table
function User() {
    this.get = function (res) {
        connection.acquire(function (err, con) {
            con.acquire('SELECT mail, FROM user', function (err, result) {
                con.release();
                res.send(result);
                console.log(result);
            });

        });
        console.log("SELECT * FROM databas ")
    }

}
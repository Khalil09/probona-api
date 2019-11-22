const connectDB = require('../lib/dbconnect');

module.exports = {
  create: function(req, res){
  var q = 'INSERT INTO Client (name, cpf, email) VALUES ("' +
    req.body.name + '", "' +
    req.body.cpf + '", "' +
    req.body.email + '")';

    connectDB.makeConnection((con) => {
      con.query(q, (err, row) => {
        if (err) {
          res.status(400)
          res.json({"error": "Houve um erro com a criação de candidato",
                    "description": err})
        }
          res.status(200);
          res.json({"message": "Criado com sucesso"})
      });
    }, true)
  },
}

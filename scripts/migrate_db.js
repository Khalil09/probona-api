const connectDB = require('../lib/dbconnect');

function createTables(conn){
  const createClient = "CREATE TABLE IF NOT EXISTS Client (\n"+
                       "id int unsigned NOT NULL AUTO_INCREMENT,\n"+
                       "name varchar(150) NOT NULL,\n"+
                       "cpf char(11) NOT NULL,\n"+
                       "email varchar(150) NOT NULL,\n"+
                       "UNIQUE KEY unique_email (email),\n"+
                       "PRIMARY KEY (id)\n"+
                       ");";

  const createAddress = "CREATE TABLE IF NOT EXISTS Address (\n"+
                        "id int unsigned NOT NULL AUTO_INCREMENT,\n"+
                        "number varchar(150) NOT NULL,\n"+
                        "cep char(15) NOT NULL,\n"+
                        "client_id int unsigned,\n"+
                        "PRIMARY KEY (id),\n"+
                        "FOREIGN KEY (client_id) REFERENCES Client(id) ON DELETE CASCADE\n"+
                        ");";

  const createUser = "CREATE TABLE IF NOT EXISTS User (\n"+
                        "id int unsigned NOT NULL AUTO_INCREMENT,\n"+
                        "login varchar(150) NOT NULL,\n"+
                        "password varchar(255) NOT NULL,\n"+
                        "PRIMARY KEY (id)\n"+
                        ");";

      conn.query(createClient, function (error, results, fields){
          if(error) return console.log(error);
          console.log('Tabela de Cliente criada');
      });

      conn.query(createAddress, function (error, results, fields){
          if(error) return console.log(error);
          console.log('Tabela de Endereço criada');
      });

      conn.query(createUser, function (error, results, fields){
          if(error) return console.log(error);
          console.log('Tabela de Usuário criada');
      });
      conn.end();
}

connectDB.makeConnection((con) => {
  createTables(con);
}, true);

var codigo_usuario;
var password_usuario;
function guardar_datos(user,pass) {
    codigo_usuario=user;
    password_usuario=pass;
    var db = window.openDatabase("strans_db", "1.0", "Sitrans DB", 500000);
    db.transaction(populateDB, errorCB, successCB);
    // var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    db.transaction(insertDB, errorCB, successCB);
};
function insertDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS USUARIO (id INTEGER PRIMARY KEY,codigo,pass)');
     tx.executeSql('INSERT INTO USUARIO (id,codigo,pass) VALUES ("1","'+codigo_usuario+'","'+password_usuario+'")');
};

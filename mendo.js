

/*db.user2.insertOne({
    nombre: "carmen",
    apellido: "Gonzalez",
    correo: "carmensita@example.com",
    ciudad: "Bogotá",
    país: "Estados Unidos",
    salario: 5000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "sol",
    apellido: "Martinez",
    correo: "sol@example.com",
    ciudad: "Medellín",
    país: "Colombia",
    salario: 20000,
    edad: 28,
    altura: 165,
    peso: 140
});

db.user2.insertOne({
    nombre: "Carlos",
    apellido: "Gomez",
    correo: "carlitos@example.com",
    ciudad: "Bogotá",
    país: "Colombia",
    salario: 50000,
    edad: 30,
    altura: 175,
    peso: 150
});

db.user2.insertOne({
    nombre: "Mariana",
    apellido: "Lopera",
    correo: "mariana@example.com",
    ciudad: "Medellín",
    país: "Italia",
    salario: 60000,
    edad: 28,
    altura: 165,
    peso: 130
});

db.user2.insertOne({
    nombre: "Juan",
    apellido: "Martinez",
    correo: "juan.martinez@example.com",
    ciudad: "Cali",
    país: "Brasil",
    salario: 55000,
    edad: 32,
    altura: 180,
    peso: 100
});

db.user2.insertOne({
    nombre: "josefa",
    apellido: "Gonzalez",
    correo: "josefa.josefa@example.com",
    ciudad: "Bogotá XD",
    país: "Brasil",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Pedro",
    apellido: "Gonzalez",
    correo: "pedro.gonzalez@example.com",
    ciudad: "Bogotá",
    país: "Colombia",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Ana",
    apellido: "Martinez",
    correo: "ana.martinez@example.com",
    ciudad: "Medellín XD",
    país: "India",
    edad: 28,
    altura: 165,
    peso: 140
});

db.user2.insertOne({
    nombre: "Carlos",
    apellido: "Gomez",
    correo: "carlos.gomez@example.com",
    ciudad: "Bogotá",
    país: "Colombia",
    salario: 50000,
    edad: 30,
    altura: 175,
    peso: 150
});

db.user2.insertOne({
    nombre: "Maria",
    apellido: "Lopez",
    ciudad: "Medellín",
    país: "Italia",
    salario: 60000,
    edad: 28,
    altura: 195,
    peso: 130
});

db.user2.insertOne({
    nombre: "Juan",
    apellido: "Martinez",
    correo: "juan.martinez@example.com",
    ciudad: "Cali",
    país: "Alemania",
    salario: 55000,
    edad: 32,
    altura: 180,
    peso: 160
});

db.user2.insertOne({
    nombre: "Pedro",
    apellido: "Gonzalez",
    correo: "pedro.gonzalez@example.com",
    ciudad: "XD",
    país: "Italia",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Pedro",
    apellido: "Gonzalez",
    correo: "pedro.gonzalez@example.com",
    ciudad: "Bogotá",
    país: "Chile",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Ana",
    apellido: "Martinez",
    correo: "ana.martinez@example.com",
    ciudad: "Medellín",
    país: "Canadá",
    salario: 58000,
    edad: 28,
    altura: 165,
    peso: 140
});

db.user2.insertOne({
    nombre: "Carlos",
    apellido: "Gomez",
    correo: "carlos.gomez@example.com",
    ciudad: "Bogotá",
    país: "Australia",
    salario: 50000,
    edad: 30,
    altura: 175,
    peso: 150
});

db.user2.insertOne({
    nombre: "Maria",
    apellido: "Lopez",
    correo: "maria.lopez@example.com",
    ciudad: "Medellín XD",
    país: "Estados Unidos",
    salario: 60000,
    edad: 28,
    altura: 165,
    peso: 130
});

db.user2.insertOne({
    nombre: "Juan",
    apellido: "Martinez",
    correo: "juan.martinez@example.com",
    ciudad: "paris",
    país: "francia",
    salario: 55000,
    edad: 32,
    altura: 180,
    peso: 160
});

db.user2.insertOne({
  nombre: "Pedroo",
  apellido: "Gonzalez",
  correo: "pedro.gonzalez@example.com",
  ciudad: "elcairo",
  país: "España",
  salario: 52000,
  edad: 35,
  altura: 170,
  peso: 160
});
*/



/*db.user2.find();

//1
db.user2.find({ edad: { $gt: 19 } });


//2

//db.user2.find({ ciudad: { $in: ["londres","paris"]} });

// Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.user2.find({ salario: { $gt: 2000 }, edad: { $lt: 30 } });

//Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
db.user2.find({ país: { $eq: "España" }, salario: { $gt: 3000 } });

// Obtener todos los usuarios que tengan entre 25 y 35 años.
db.user2.find({ edad: { $gte: 25, $lte: 35 } });

// Obtener a todos los usuarios que no sean de Estados Unidos.
db.user2.find({ país: { $ne: "Estados Unidos" } });

// Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
db.user2.find({ ciudad: { $eq: "Londres" }, $or: [ { salario: { $gt: 2500 } }, { edad: { $gt: 30 } } ] });

// Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
db.user2.find({ país: { $eq: "Australia" }, peso: { $gt: 140 } });

// Obtener a todos los usuarios que no sean de Londres ni de París.
db.user2.find({ ciudad: { $nin: ["Londres", "París"] } });

// Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.user2.find({ $or: [ { salario: { $lt: 2000 } }, { edad: { $gt: 40 } } ] });

// Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.user2.find({ país: { $eq: "Canadá" }, $or: [ { salario: { $gt: 4000 } }, { altura: { $gt: 180 } } ] });

// Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.user2.find({ país: { $eq: "Italia" }, edad: { $gte: 20, $lte: 30 } });

// Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.user2.find({ correo: { $exists: false } });

// Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.user2.find({ país: { $eq: "Francia" }, salario: { $gte: 3000, $lte: 5000 } });

// Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
db.user2.find({ país: { $eq: "Brasil" }, $or: [ { peso: { $lt: 120 } }, { peso: { $gt: 140 } } ] });

// Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.user2.find({ país: { $in: ["Argentina", "Chile"] }, edad: { $lt: 25 } });

// Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.user2.find({ país: { $nin: ["España", "México"] }, salario: { $lt: 3000 } });

// Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.user2.find({ país: { $eq: "Alemania" }, $or: [ { salario: { $lt: 4000 } }, { edad: { $gt: 35 } } ] });

// Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.user2.find({ país: { $ne: "Colombia" }, altura: { $lt: 170 } });

// Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.user2.find({ país: { $eq: "India" }, salario: { $exists: false } });
*/

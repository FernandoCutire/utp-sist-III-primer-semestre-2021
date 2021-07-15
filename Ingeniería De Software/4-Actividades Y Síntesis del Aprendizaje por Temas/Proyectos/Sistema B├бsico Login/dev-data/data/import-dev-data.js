const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../../models/userModel');

dotenv.config({ path: './config.env' });

// Conectando a la base de datos
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection Successful!'));

// Leyendo la data
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));

// Importar la data

const importData = async () => {
  try {
    await User.create(users, { validateBeforeSave: false });
    console.log('Los datos han sido importados');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Eliminar la data

const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log('Los datos han sido eliminados.');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Definiendo los procesos
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);

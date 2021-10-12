const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_buku", {
  userNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Koneksi db gagal.."));

db.once("open", () => {
  console.log("Koneksi db berhasil..");
});

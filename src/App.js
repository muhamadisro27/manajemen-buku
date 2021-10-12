// import logo from "./logo.svg";
import "./App.css";
import Beranda from "./components/Beranda";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ManajemenBuku from "./components/ManajemenBuku";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([
    {
      _id: 1,
      judul: "Laskar Pelangi",
      pengarang: "Andrea Hirata",
      harga: 80000,
      stok: 7,
    },
    {
      _id: 2,
      judul: "Bumi",
      pengarang: "Tere Liye",
      harga: 85000,
      stok: 5,
    },
  ]);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Beranda />
          </Route>
          <Route path="/manajemen-buku" exact>
            <ManajemenBuku
              bookList={books}
              store={storeData}
              update={updateData}
              remove={deleteData}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
const storeData = (inputBook) => {
  console.log(inputBook);
  alert("Data berhasil ditambahkan");
};
const updateData = (inputBook) => {
  console.log(inputBook);
  alert("data berhasil diubah!");
};
const deleteData = (inputBook) => {
  console.log(inputBook);
  alert("data berhasil dihapus!");
};

export default App;

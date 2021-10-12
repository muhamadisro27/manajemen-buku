// import logo from "./logo.svg";
import "./App.css";
import Beranda from "./components/Beranda";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ManajemenBuku from "./components/ManajemenBuku";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    retrieveData();
  }, []);
  const retrieveData = () => {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Beranda bookList={books} />
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

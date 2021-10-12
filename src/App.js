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
const storeData = (inputBook, setBooks) => {
  // console.log(inputBook);
  axios
    .post("http://localhost:4000/book/add", inputBook)
    .then((res) => {
      console.log(res);
      setBooks((prevBooks) => [...prevBooks, inputBook]);
      alert("Data berhasil ditambahkan");
    })
    .catch((error) => {
      // console.log(error.res.data);
      console.log(error.message);
    });
};
const updateData = (inputBook, retrieveData) => {
  console.log(inputBook);
  axios
    .put("http://localhost:4000/book/update/" + inputBook._id, inputBook)
    .then((res) => {
      // console.log(res);
      retrieveData();
      alert("Data berhasil diubah!");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const deleteData = (inputBook, retrieveData) => {
  // console.log(inputBook);
  axios
    .delete("http://localhost:4000/book/delete/" + inputBook._id, inputBook)
    .then(() => {
      retrieveData();
      alert("data berhasil dihapus!");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default App;

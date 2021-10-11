// import logo from "./logo.svg";
import "./App.css";
import Beranda from "./components/Beranda";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ManajemenBuku from "./components/ManajemenBuku";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Beranda />
          </Route>
          <Route path="/manajemen-buku" exact>
            <ManajemenBuku />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

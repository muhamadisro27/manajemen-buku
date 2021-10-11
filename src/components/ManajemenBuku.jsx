import React from "react";
import { useState } from "react";

const ManajemenBuku = ({ bookList, store }) => {
  // console.log(bookList);
  const [inputBook, setInputBook] = useState();
  const handleJudul = (event) => {
    setInputBook({ ...inputBook, judul: event.target.value });
  };
  const handlePengarang = (event) => {
    setInputBook({ ...inputBook, pengarang: event.target.value });
  };
  const handleHarga = (event) => {
    setInputBook({ ...inputBook, harga: event.target.value });
  };
  const handleStok = (event) => {
    setInputBook({ ...inputBook, stok: event.target.value });
  };

  const submitAdd = (event) => {
    event.preventDefault();
    store(inputBook);
  };

  const [form, setForm] = useState();
  const showCreate = () => {
    setForm("create");
  };

  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>
      {form === "create" && (
        <div id="formTambah">
          <h5>Tambah Buku</h5>
          <hr />
          <form className="form-row" onSubmit={submitAdd}>
            <div className="col-3">
              <input
                autocomplete="off"
                type="text"
                name="judul"
                className="form-control mx-2"
                placeholder="Judul"
                onChange={handleJudul}
              />
            </div>
            <div className="col-3">
              <input
                autocomplete="off"
                type="text"
                name="pengarang"
                className="form-control mx-2"
                placeholder="Pengarang"
                onChange={handlePengarang}
              />
            </div>
            <div className="col-2">
              <input
                autocomplete="off"
                type="text"
                name="harga"
                className="form-control mx-2"
                placeholder="Harga"
                onChange={handleHarga}
              />
            </div>
            <div className="col-2">
              <input
                autocomplete="off"
                type="number"
                name="stok"
                className="form-control mx-2"
                placeholder="Stok"
                onChange={handleStok}
              />
            </div>
            <div className="col-2">
              <input
                autocomplete="off"
                type="submit"
                className="btn btn-primary"
                value="Simpan"
              />
            </div>
          </form>
        </div>
      )}
      <div id="formUbah">
        <h5>Ubah Buku</h5>
        <hr />
        <form className="form-row" onSubmit={submitAdd}>
          <div className="col-3">
            <input
              autocomplete="off"
              type="text"
              name="judul"
              className="form-control mx-2"
              placeholder="Judul"
              onChange={handleJudul}
            />
          </div>
          <div className="col-3">
            <input
              autocomplete="off"
              type="text"
              name="pengarang"
              className="form-control mx-2"
              placeholder="Pengarang"
              onChange={handlePengarang}
            />
          </div>
          <div className="col-2">
            <input
              autocomplete="off"
              type="text"
              name="harga"
              className="form-control mx-2"
              placeholder="Harga"
              onChange={handleHarga}
            />
          </div>
          <div className="col-2">
            <input
              autocomplete="off"
              type="number"
              name="stok"
              className="form-control mx-2"
              placeholder="Stok"
              onChange={handleStok}
            />
          </div>
          <div className="col-2">
            <input
              autocomplete="off"
              type="submit"
              className="btn btn-primary"
              value="Simpan"
            />
          </div>
        </form>
      </div>
      <div id="daftarBuku">
        <h2 className="mt-3">Daftar Buku</h2>
        <hr />
        <button className="btn btn-primary m-2" onClick={showCreate}>
          Tambah Buku
        </button>
        <table className="table table-bordered">
          <thead className="text-center">
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th>Pengarang</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{book.judul}</td>
                <td>{book.pengarang}</td>
                <td>{book.harga}</td>
                <td>{book.stok}</td>
                <td colspan="2">
                  <button className="btn btn-info mr-3 text-white">Edit</button>
                  <button className="btn btn-danger">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManajemenBuku;

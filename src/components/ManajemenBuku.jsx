import React from "react";

const ManajemenBuku = ({ bookList }) => {
  // console.log(bookList);
  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>
      <div id="formTambah"></div>
      <div id="formUbah"></div>
      <div id="daftarBuku">
        <h2 className="mt-3">Daftar Buku</h2>
        <hr />
        <button className="btn btn-primary m-2">Tambah Buku</button>
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

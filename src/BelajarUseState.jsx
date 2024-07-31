import React, { useEffect, useRef, useState } from "react";

const BelajarUseState = () => {
  const [hitung, setHitung] = useState(0);
  const [nama, setNama] = useState("");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");

  // const inputNumber = useRef(1);
  // const tambahAngka = () => (inputNumber.current = inputNumber.current + 1);
  // console.log(inputNumber.number);

  const handleAlert = () => {
    alert(`Angka yang anda pilih : ${hitung}`);
  };

  const handleNama = (e) => {
    e.preventDefault();
    alert(`Selamat datang, ${nama} \nKetce🔥`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selamat datang, Biwjie\n${name}\n${grade}\n${email}\n${noHp}`);
  };

  return (
    <div className=" mt-6 flex items-center flex-col">
      <h2>Belajar Use State</h2>

      <div className=" flex gap-6 my-4 items-center">
        <button
          onClick={() => setHitung((angka) => angka + 1)}
          className=" bg-blue-200 p-1 border-2 border-black"
          disabled={hitung === 5}
        >
          + Tambah
        </button>

        <p>{hitung}</p>

        <button
          onClick={() => setHitung((angka) => angka - 1)}
          className=" bg-blue-200 p-1 border-2 border-black"
          disabled={hitung === 0}
        >
          - Kurang
        </button>
      </div>

      <h2>Alert</h2>
      <div className=" flex mt-4 items-center ">
        <button
          onClick={handleAlert}
          className=" bg-red-200 p-1 border-2 border-black"
        >
          Klik disini
        </button>
      </div>

      <div className="mt-10">
        <form onSubmit={handleNama}>
          <label>
            Nama Lengkap
            <input
              type="text"
              onChange={(e) => setNama(e.target.value)}
              className=" ms-4 p-1 border-2 border-black"
            />
          </label>

          <button
            type="submit"
            className=" bg-green-200 ms-4 p-1 border-2 border-black "
          >
            Simpan
          </button>
        </form>
      </div>

      <div className=" mt-10 ">
        <form onSubmit={handleSubmit}>
          <label>
            Nama
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className=" ms-4 p-1 border-2 border-black"
            />
          </label>
          <label>
            Kelas
            <input
              type="text"
              onChange={(e) => setGrade(e.target.value)}
              className=" ms-4 p-1 border-2 border-black"
            />
          </label>
          <label>
            Email
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className=" ms-4 p-1 border-2 border-black"
            />
          </label>
          <label>
            Nomor HP
            <input
              type="text"
              onChange={(e) => setNoHp(e.target.value)}
              className=" ms-4 p-1 border-2 border-black"
            />
          </label>

          <button
            type="submit"
            className=" bg-green-200 ms-4 p-1 border-2 border-black "
          >
            Simpan
          </button>
        </form>
      </div>

      <div className=" mt-10 ">
        {number.current}
        <button onClick={add}>Add</button>
      </div>
    </div>
  );
};

export default BelajarUseState;

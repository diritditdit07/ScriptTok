import { useState } from "react";

export default function ProductForm({ onGenerate }) {

  const [form, setForm] = useState({
    product: "",
    problem: "",
    advantage: "",
    price: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onGenerate(form);
  }

  const inputStyle =
    "w-full mt-1 border border-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black/20";

  return (

    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label className="text-sm text-gray-500">Nama Produk</label>
        <input
          name="product"
          placeholder="Contoh: Tas Selempang"
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <div>
        <label className="text-sm text-gray-500">Masalah Produk</label>
        <input
          name="problem"
          placeholder="Contoh: tas kecil tidak muat banyak barang"
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <div>
        <label className="text-sm text-gray-500">Keunggulan Produk</label>
        <input
          name="advantage"
          placeholder="Contoh: waterproof dan muat banyak"
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <div>
        <label className="text-sm text-gray-500">Harga / Promo</label>
        <input
          name="price"
          placeholder="Contoh: 49rb"
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white p-3 rounded-lg hover:opacity-90"
      >
        Generate Script
      </button>

    </form>
  );
}
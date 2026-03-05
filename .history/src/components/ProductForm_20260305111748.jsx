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

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div>
        <label className="text-sm text-gray-600">Nama Produk</label>
        <input
          name="product"
          placeholder="Contoh: Tas Selempang"
          onChange={handleChange}
          className="w-full mt-1 border rounded-lg p-3 focus:ring-2 focus:ring-black outline-none"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Masalah yang diselesaikan</label>
        <input
          name="problem"
          placeholder="Contoh: tas kecil tidak muat banyak barang"
          onChange={handleChange}
          className="w-full mt-1 border rounded-lg p-3 focus:ring-2 focus:ring-black outline-none"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Keunggulan Produk</label>
        <input
          name="advantage"
          placeholder="Contoh: waterproof dan muat banyak"
          onChange={handleChange}
          className="w-full mt-1 border rounded-lg p-3 focus:ring-2 focus:ring-black outline-none"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Harga / Promo</label>
        <input
          name="price"
          placeholder="Contoh: 49rb"
          onChange={handleChange}
          className="w-full mt-1 border rounded-lg p-3 focus:ring-2 focus:ring-black outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Generate Script
      </button>

    </form>
  );
}
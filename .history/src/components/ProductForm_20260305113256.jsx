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
    "w-full mt-1 bg-white/30 border border-white/40 text-white placeholder-white/70 rounded-lg p-3 outline-none focus:ring-2 focus:ring-white";

  return (

    <form onSubmit={handleSubmit} className="space-y-5">

      <div>
        <label className="text-sm text-white/80">Nama Produk</label>
        <input
          name="product"
          placeholder="Contoh: Tas Selempang"
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <div>
        <label className="text-sm text-white/80">Masalah Produk</label>
        <input
          name="problem"
          placeholder="Contoh: tas kecil tidak muat banyak barang"
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <div>
        <label className="text-sm text-white/80">Keunggulan Produk</label>
        <input
          name="advantage"
          placeholder="Contoh: waterproof dan muat banyak"
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <div>
        <label className="text-sm text-white/80">Harga / Promo</label>
        <input
          name="price"
          placeholder="Contoh: 49rb"
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white text-purple-600 font-semibold p-3 rounded-xl hover:scale-[1.02] transition"
      >
        Generate Script ✨
      </button>

    </form>
  );
}
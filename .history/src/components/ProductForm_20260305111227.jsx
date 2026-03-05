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
    <form onSubmit={handleSubmit}>

      <input
        name="product"
        placeholder="Nama Produk"
        onChange={handleChange}
      />

      <input
        name="problem"
        placeholder="Masalah yang diselesaikan"
        onChange={handleChange}
      />

      <input
        name="advantage"
        placeholder="Keunggulan Produk"
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Harga / Promo"
        onChange={handleChange}
      />

      <button type="submit">
        Generate Script
      </button>

    </form>
  );
}
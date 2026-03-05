export function generateScript(data) {

  const { product, problem, advantage, price } = data;

  const templates = [

    {
      hook: `Gue baru nemu ${product} ini di TikTok shop...`,
      relatable: `Biasanya ${problem}.`,
      scene1: `Tunjukin ${product} dari dekat ke kamera.`,
      scene2: `Masukin beberapa barang ke dalam ${product}.`,
      scene3: `Highlight fitur utama: ${advantage}.`,
      price: `Dan yang bikin kaget... harganya cuma ${price}.`,
      cta: `Kalau mau cek produknya langsung klik keranjang kuning.`
    },

    {
      hook: `Serius ini ${product} worth it banget.`,
      relatable: `Awalnya gue kira ini cuma produk biasa.`,
      scene1: `Unboxing ${product}.`,
      scene2: `Demo penggunaan ${product}.`,
      scene3: `Tes keunggulan: ${advantage}.`,
      price: `Harga segini cuma ${price}.`,
      cta: `Link produknya ada di keranjang kuning.`
    },

    {
      hook: `Kalau kamu sering ngalamin ini...`,
      relatable: `${problem}.`,
      scene1: `Kenalin ${product}.`,
      scene2: `Demo bagaimana ${product} dipakai.`,
      scene3: `Highlight fitur ${advantage}.`,
      price: `Dan harganya cuma ${price}.`,
      cta: `Cek produknya di keranjang kuning sekarang.`
    }

  ];

  const randomTemplate =
    templates[Math.floor(Math.random() * templates.length)];

  return randomTemplate;
}
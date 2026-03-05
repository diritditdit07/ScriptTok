export function generateScript(data) {

  const { product, problem, advantage, price } = data;

  return {
    hook: `Gue baru nemu ${product} ini di TikTok shop...`,

    relatable: `Biasanya ${problem}.`,

    scene1: `Tunjukin ${product} dari dekat ke kamera.`,

    scene2: `Demo penggunaan ${product} secara langsung.`,

    scene3: `Highlight keunggulan utama: ${advantage}.`,

    price: `Dan yang bikin kaget... harganya cuma ${price}.`,

    cta: `Kalau mau cek produknya langsung klik keranjang kuning sebelum kehabisan.`
  };
}
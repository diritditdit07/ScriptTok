export function generateScript(data) {

  const { product, problem, advantage, price } = data;

  return `
HOOK
"Gue baru nemu ${product} ini di TikTok shop..."

RELATABLE MOMENT
"Biasanya ${problem}."

SCENE 1
Tunjukin ${product} dari dekat ke kamera.

SCENE 2
Demo penggunaan ${product} secara langsung.

SCENE 3
Tunjukin keunggulan utama: ${advantage}.

PRICE MOMENT
"Dan yang bikin kaget... harganya cuma ${price}."

CTA
"Kalau mau cek produknya, langsung klik keranjang kuning sebelum kehabisan."
`;
}
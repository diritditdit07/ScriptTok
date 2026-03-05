export function generateScript(data) {
  const { product, problem, advantage, price } = data;

  return `
HOOK:
"Serius, ${product} ini lagi viral banget!"

PROBLEM:
"Biasanya masalahnya tuh ${problem}"

SOLUTION:
"Tapi ${product} ini beda, karena ${advantage}"

PRICE:
"Harganya cuma ${price}"

CTA:
"Kalau mau cek produknya langsung klik keranjang kuning sebelum kehabisan!"
  `;
}
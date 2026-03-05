export function generateHooks(product) {

  const hooks = [
    `Kenapa ${product} ini lagi viral banget di TikTok?`,
    `Serius ini ${product} murah tapi kualitasnya ga murahan.`,
    `Gue nyesel baru nemu ${product} ini sekarang.`,
    `${product} ini lagi rame banget di TikTok shop.`,
    `Ini ${product} paling worth it yang pernah gue coba.`,
    `${product} ini ternyata jauh lebih bagus dari yang gue kira.`,
    `Awalnya gue kira ${product} ini biasa aja...`,
    `Kenapa banyak orang beli ${product} ini?`,
  ];

  const shuffled = hooks.sort(() => 0.5 - Math.random());

  return shuffled.slice(0, 5);
}
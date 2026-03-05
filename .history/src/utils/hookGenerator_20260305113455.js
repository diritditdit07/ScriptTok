export function generateHooks(product) {

  const hooks = [
    `Kenapa ${product} ini lagi viral di TikTok?`,
    `Gue nyesel baru nemu ${product} ini sekarang.`,
    `${product} ini ternyata jauh lebih bagus dari yang gue kira.`,
    `Serius ini ${product} worth it banget.`,
    `Kenapa banyak orang beli ${product} ini?`,
    `Awalnya gue kira ${product} ini biasa aja...`,
    `${product} ini lagi rame banget di TikTok shop.`,
    `Ini ${product} paling worth it yang pernah gue coba.`
  ];

  const shuffled = hooks.sort(() => 0.5 - Math.random());

  return shuffled.slice(0, 5);
}
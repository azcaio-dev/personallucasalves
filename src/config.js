export const config = {
  name: 'Lucas Alves',
  cref: '019683-G/PE',
  instagram: 'https://www.instagram.com/lucasalvespersonall/',
  instagramHandle: '@lucasalvespersonall',
  whatsapp: '', // Informe DDI + DDD + número, apenas dígitos (ex.: 5581999999999)
  email: '',
  appUrl: 'https://www.mfitpersonal.com.br/index?share=ODEyNDAvMC85LzA%3D',
  results: [], // { name: 'Nome autorizado', quote: 'Depoimento verdadeiro' }
};
export const contactUrl = config.whatsapp ? `https://wa.me/${config.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent('Olá, Lucas! Gostaria de saber mais sobre o acompanhamento personalizado.')}` : config.instagram;

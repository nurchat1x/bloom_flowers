export type Bouquet = {
  id: string
  price: number
  image: string
  name: { ru: string; kk: string }
  blurb: { ru: string; kk: string }
}

export const bouquets: Bouquet[] = [
  {
    id: 'sakura-dream',
    price: 12000,
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80',
    name: { ru: 'Сакура мечты', kk: 'Сакура арманы' },
    blurb: {
      ru: 'Нежно-розовые тона и воздушная сборка',
      kk: 'Нәзік қызғылт реңктер мен жеңіл жинақ',
    },
  },
  {
    id: 'blush-cloud',
    price: 15000,
    image:
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80',
    name: { ru: 'Розовое облако', kk: 'Қызғылт бұлт' },
    blurb: {
      ru: 'Пышный букет для самого тёплого «спасибо»',
      kk: 'Ең жылы «рахмет» үшін шұғылалы шоқ',
    },
  },
  {
    id: 'morning-light',
    price: 10000,
    image:
      'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80',
    name: { ru: 'Утренний свет', kk: 'Таңғы сәуле' },
    blurb: {
      ru: 'Свежие цветы и лёгкая пастель',
      kk: 'Жаңа гүлдер мен жұмсақ пастель',
    },
  },
  {
    id: 'soft-heart',
    price: 18000,
    image:
      'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=800&q=80',
    name: { ru: 'Мягкое сердце', kk: 'Жұмсақ жүрек' },
    blurb: {
      ru: 'Романтика в каждом лепестке',
      kk: 'Әр жапырақшада романтика',
    },
  },
  {
    id: 'pearl-garden',
    price: 14000,
    image:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
    name: { ru: 'Жемчужный сад', kk: 'Інжу бағы' },
    blurb: {
      ru: 'Элегантный микс для особого дня',
      kk: 'Ерекше күнге арналған әдемі микс',
    },
  },
  {
    id: 'sweet-moment',
    price: 9000,
    image:
      'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80',
    name: { ru: 'Сладкий момент', kk: 'Тәтті сәт' },
    blurb: {
      ru: 'Компактный букет на каждый день',
      kk: 'Күнделікті қолдануға ыңғайлы шоқ',
    },
  },
]

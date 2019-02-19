export default function () {
  // noinspection JSAnnotator
  return [
    {
      id: 1,
      name: 'Продукция ОАО "Василишки"',
      valueName: 'goodsValue',
      options: [
        'Гибридный молодняк свиней',
        'Мясо свинины и говядины',
        'Полуфабрикаты и субпродукты',
        'Рыба',
        'Яблоки',
        'Ягоды',
        'Молоко',
        'Хлеб и хлебобулочные изделия',
        'Комбикорма для КРС, свиней и рыб'
      ],
      desc: 'Продукция производимая ОАО "Василишки"',
      items: [
        {
          src: require('../assets/images/milk.jpg'),
          altText: 'Slide 1',
          caption: '',
          header: 'Молоко'
        },
        {
          src: require('../assets/images/bread.jpg'),
          altText: 'Slide 2',
          caption: '',
          header: 'Хлеб'
        },
        {
          src: require('../assets/images/wheat.jpg'),
          altText: 'Slide 3',
          caption: '',
          header: 'Зерно'
        } ]
    },
    {
      id: 2,
      name: 'Услуги',
      valueName: 'servicesValue',
      options: [
        'Услуги c/х техники',
        'Деревообработка',
        'Транспортировка грузов'
      ],
      desc: 'Услуги предоставляемые ОАО "Василишки"',
      items: [
        {
          src: require('../assets/images/combains.jpg'),
          altText: 'Slide 1',
          caption: '',
          header: 'С/х услуги'
        },
        {
          src: require('../assets/images/woodwork.jpg'),
          altText: 'Slide 2',
          caption: '',
          header: 'Деревообработка'
        },
        {
          src: require('../assets/images/fura.jpg'),
          altText: 'Slide 3',
          caption: '',
          header: 'Перевозка грузов'
        } ]
    }
  ];
}

export default function () {
  // noinspection JSAnnotator
  return [
    {
      id: 1,
      name: 'Продукция ОАО "Василишки"',
      valueName: 'goodsValue',
      options: [
        {
          name: 'Гибридный молодняк свиней',
          description: 'Гибридные почти натуральные молодые хрюшки. Хрю!',
          price: 400
        },
        {
          name: 'Мясо свинины и говядины',
          description: 'Вкусное питательное мяско свинки или говядины. Не для веганов.',
          price: 300
        },
        {
          name: 'Полуфабрикаты и субпродукты',
          description: 'Всякие замороженные штуки или типо того. Съедобно, наверное.',
          price: 100
        },
        {
          name: 'Рыба',
          description: 'Морской обитатель, говорят иногда даже вкусная, но костлявая.',
          price: 300
        },
        {
          name: 'Яблоки',
          description: 'Наливные, красивые. Еще и с витаминами.',
          price: 100
        },
        {
          name: 'Ягоды',
          description: 'Ягоды это тема. Вкусно, полезно, дорого.',
          price: 400
        },
        {
          name: 'Молоко',
          description: 'Пейте дети молоко - будете коровой',
          price: 200
        },
        {
          name: 'Хлеб и хлебобулочные изделия',
          description: 'Хлеб это хлеб. Тут и сказать нечего',
          price: 100
        },
        {
          name: 'Комбикорма для КРС, свиней и рыб',
          description: 'Кормите своих зверушек. Они этого заслуживают.',
          price: 100
        }
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
        {
          name: 'Услуги c/х техники',
          description: 'Обработка полей, сбор урожая и другие працы.',
          price: 500
        },
        {
          name: 'Деревообработка',
          description: 'Разновсяческие работы с деревом. От скворечника до особняка.',
          price: 600
        },
        {
          name: 'Транспортировка грузов',
          description: 'Перевоз всяких штук. На фурах.',
          price: 400
        }
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

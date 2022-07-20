import { Films } from '../types/films';

export const films: Films = [
  {
    id: 1,
    name: 'Стрелок',
    posterImage: 'img/shooter.jpg',
    previewImage: 'img/shooter.jpg',
    backgroundImage: 'img/shooter.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Sintel_trailer-1080p.ogv',
    previewVideoLink: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/a6437f33b027ea6dd71cc3800802dcd6.jpg',
    description: 'Опытный снайпер Боб Ли Суэггер оказывается втянутым в заговор с целью убийства президента. Похоже, что его хотят подставить и «сдать» властям, поэтому ему необходимо как можно быстрее найти и обезвредить настоящего убийцу…',
    rating: 7.7,
    scoresCount: 258916,
    director: 'Антуан Фукуа',
    starring: [
      'Марк Уолберг, Майкл Пенья, Дэнни Гловер, Кейт Мара, Элиас Котеас, Нед Битти, Раде Шербеджия, Рона Митра, Джонатан Уокер, Тейт Донован'
    ],
    runTime: 124,
    genre: 'Боевик',
    released: 2007,
    isFavorite: true
  },
  {
    id: 2,
    name: 'Миссия «Серенити»',
    posterImage: 'img/serenity.jpg',
    previewImage: 'img/serenity.jpg',
    backgroundImage: 'img/serenity.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Sintel_trailer-1080p.ogv',
    previewVideoLink: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/serenity.jpg',
    description: 'Загадочный пассажир меняет судьбу команды космического корабля. Сай-фай вестерн по следам сериала «Светлячок»',
    rating: 7.2,
    scoresCount: 111583,
    director: 'Джосс Уидон',
    starring: [
      'Нэйтан Филлион, Джина Торрес, Алан Тьюдик, Морена Баккарин, Адам Болдуин, Джуэл Стэйт, Шон Маэр, Саммер Глау, Рон Гласс, Чиветель Эджиофор'
    ],
    runTime: 119,
    genre: 'Фантастика',
    released: 2005,
    isFavorite: true
  },
  {
    id: 3,
    name: 'Терминатор',
    posterImage: 'img/terminator.jpg',
    previewImage: 'img/terminator.jpg',
    backgroundImage: 'img/terminator.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Sintel_trailer-1080p.ogv',
    previewVideoLink: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/movies/frames/the-terminator-770554l-imagine.jpg',
    description: 'История противостояния солдата Кайла Риза и киборга-терминатора, прибывших в 1984-й год из пост-апокалиптического будущего, где миром правят машины-убийцы, а человечество находится на грани вымирания. Цель киборга: убить девушку по имени Сара Коннор, чей ещё нерождённый сын к 2029 году выиграет войну человечества с машинами. Цель Риза: спасти Сару и остановить Терминатора любой ценой.',
    rating: 8.0,
    scoresCount: 269718,
    director: 'Джеймс Кэмерон',
    starring: [
      'Арнольд Шварценеггер, Майкл Бин, Линда Хэмилтон, Пол Уинфилд, Лэнс Хенриксен, Рик Россович, Бесс Мотта, Эрл Боэн, Дик Миллер, Шон Шеппс'
    ],
    runTime: 108,
    genre: 'Фантастика',
    released: 1984,
    isFavorite: true
  },
  {
    id: 4,
    name: 'Чужие',
    posterImage: 'img/aliens.jpg',
    previewImage: 'img/aliens.jpg',
    backgroundImage: 'img/aliens.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Sintel_trailer-1080p.ogv',
    previewVideoLink: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/423e1e8043.jpg',
    description: 'Чужой – совершенный организм. Идеальная машина для убийства, чье физическое превосходство сочетается с его феноменальной жаждой уничтожения. Офицер Элен Рипли и команда космического корабля Ностромо один раз уже встретилась с такой тварью. В живых осталась только Элен.Капсула с Элен найдена спасателями после многих лет блуждания в космосе. Ей сообщают, что планета L.V. 426 колонизирована, и ей придется вернуться туда, где начался ее кошмар, ибо связь с колонистами прервалась. И вот в составе группы космического десанта Рипли отправляется на проклятую планету. Но теперь их там поджидает не один Чужой, а тысячи. Кто сможет выжить в этой войне: чудовища, способные только убивать, или люди, способные мыслить?',
    rating: 8.1,
    scoresCount: 206617,
    director: 'Джеймс Кэмерон',
    starring: [
      'Сигурни Уивер, Майкл Бин, Кэрри Хенн, Пол Райзер, Лэнс Хенриксен, Билл Пэкстон, Уильям Хоуп, Дженетт Голдстин, Эл Мэтьюз, Марк Ролстон'
    ],
    runTime: 137,
    genre: 'Фантастика',
    released: 1986,
    isFavorite: true
  },
  {
    id: 5,
    name: 'Гнев',
    posterImage: 'img/man-on-fire.jpg',
    previewImage: 'img/man-on-fire.jpg',
    backgroundImage: 'img/man-on-fire.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Sintel_trailer-1080p.ogv',
    previewVideoLink: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/111-15_image_809225a18b29b311c31639a574e8_16-9_1.jpeg',
    description: 'Состоятельные жители Мехико в панике: всего за шесть дней в городе пропали 24 человека! Бывшего агента ЦРУ Джона Кризи нанимают телохранителем девятилетней дочери промышленника Сэмюэля Рамоса, Питы Рамос. Поначалу Кризи с трудом терпит соседство не по годам развитой девочки. Но со временем они становятся друзьями. Кризи вновь почувствовал вкус к жизни, но все рушится, когда Питу похищают. Кризи клянется убить любого, кто втянут в похищение Питы. Теперь его никто не остановит…',
    rating: 7.9,
    scoresCount: 176176,
    director: 'Тони Скотт',
    starring: [
      'Дензел Вашингтон, Дакота Фаннинг, Рада Митчелл, Кристофер Уокен, Марк Энтони, Джанкарло Джаннини, Микки Рурк, Рэйчел Тикотин, Роберто Соса, Хесус Очоа'
    ],
    runTime: 146,
    genre: 'Боевик',
    released: 2004,
    isFavorite: true
  },
  {
    id: 6,
    name: 'Полевые лилии',
    posterImage: 'img/lilies-of-the-field.jpg',
    previewImage: 'img/lilies-of-the-field.jpg',
    backgroundImage: 'img/lilies-of-the-field.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Sintel_trailer-1080p.ogv',
    previewVideoLink: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/movies/frames/Lilies-of-the-Field-05.jpg',
    description: 'Безработный строитель Гомер Смит держит путь на запад, но из-за перегрева автомобиля он вынужден остановиться на отдаленной ферме в пустыне. Фермой управляет группа восточноевропейских католических монахинь, возглавляемых строгой матерью Марией, и она уверена — Гомера послал сам Бог, чтобы построить здесь так необходимую церковь.',
    rating: 7.1,
    scoresCount: 548,
    director: 'Ральф Нельсон',
    starring: [
      'Сидни Пуатье, Лилия Скала, Лиза Манн,Иза Крино, Франческа Джарвис, Памела Бренч, Стэнли Адамс, Дэн Фрейзер, Бобби Дрисколл, Ральф Нельсон'
    ],
    runTime: 94,
    genre: 'Комедия',
    released: 1963,
    isFavorite: true
  },
  {
    id: 7,
    name: 'Призрак в доспехах ',
    posterImage: 'img/ghost-in-the-shell.jpg',
    previewImage: 'img/ghost-in-the-shell.jpg',
    backgroundImage: 'img/ghost-in-the-shell.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Sintel_trailer-1080p.ogv',
    previewVideoLink: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/ghost-in-the-shell4321.jpg',
    description: '2029 год. Благодаря значительным достижениям в кибернетике люди могут заменять свои конечности роботизированными частями. Майор Мотоко Кусанаги из 9-го отдела службы безопасности ведёт расследование, связанное с таинственным хакером, который называет себя Кукловод.',
    rating: 8.0,
    scoresCount: 55318,
    director: 'Мамору Осии',
    starring: [
      'Ацуко Танака, Акио Оцука, Коити Ямадэра, Ютака Накано, Тамио Оки, Тэссё Гэнда, Намаки Масакадзу, Масато Яманоти, Синдзи Огава, Мицуру Миямото'
    ],
    runTime: 82,
    genre: 'Аниме',
    released: 1995,
    isFavorite: true
  },
  {
    id: 8,
    name: 'Белое солнце пустыни',
    posterImage: 'img/white-sun-of-the-desert.jpg',
    previewImage: 'img/white-sun-of-the-desert.jpg',
    backgroundImage: 'img/white-sun-of-the-desert.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Sintel_trailer-1080p.ogv',
    previewVideoLink: 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/sc12ale_1200.jpeg',
    description: 'Бесконечная пустыня. Боец Сухов, прикуривающий от динамитной шашки, нескладный Петруха с вечно заклинивающей трехлинейкой, обаятельный Верещагин с надоевшей черной икрой и знаменитыми песнями-балладами, ловкий Саид , злодей Абдулла со своей бандой, любознательная Гульчатай, играющая с черепахой.',
    rating: 8.0,
    scoresCount: 158736,
    director: 'Владимир Мотыль',
    starring: [
      'Анатолий Кузнецов, Спартак Мишулин, Кахи Кавсадзе, Павел Луспекаев, Раиса Куркина, Татьяна Федотова, Николай Годовиков, Муса Дудаев, Николай Бадьев, Владимир Кадочников'
    ],
    runTime: 84,
    genre: 'Драма',
    released: 1969,
    isFavorite: true
  },
];

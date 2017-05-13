
import { LinkArray } from './class-type';
import { CategorySelectors } from './class-type';
import { SubCategorySelectors } from './class-type';
import { ArrayTM } from './class-type';
import { InstrumentSelector } from './class-type';

export const LINKARRAY: LinkArray[] = [
    {
        link: "/instrument",
        value: "Строительный инструмент"
    },
    {
        link: "/stoimaterial",
        value: "Строительные материалы"
    },
    {
        link: "/electro",
        value: "Электрика"
    },
    {
        link: "/santech",
        value: "Сантехника"
    },
    {
        link: "/garden",
        value: "Садовый инструмент"
    },
    {
        link: "/hoz",
        value: "Хозтовары"
    },
    {
        link: "/kanc",
        value: "Канцтовары"
    }
];


export const CATEGORYSELECTORS: CategorySelectors[] = [
    {value : "any", display : "Любая"},
    {value : "BUILDINSTRUMENTS", display : "Строительный инструмент"},
    {value : "BUILDMATERIALS", display : "Строительные материалы"},
    {value : "TAPS", display : "Сантехника"},
    {value : "ELECTRO", display : "Электрика"},
    {value : "GARDEN", display : "Садовый инструмент"},
    {value : "HOZ", display : "Хозтовары"},
    {value : "KANC", display : "Канцтовары"}
];

export const SUBCATEGORYSELECTORS: SubCategorySelectors[] = [
    {value : "any", display : "Любая"}
];


export const BUILDINSTRUMENTS: SubCategorySelectors[] = [
    {value : "any", display : "Любая"},
    {value : "electro", display : "Электроинструмент"},
    {value : "paint", display : "Малярный инструмент"},
    {value : "equipment", display : "Станки и оборудование"},
    {value : "metric", display : "Измерительные инструменты"},
    {value : "pnevmo", display : "Пневмоинструменты"},
    {value : "clean", display : "Оборудование для чистки и уборки"},
    {value : "screwsKeys", display : "Ключи и отвёртки"},
    {value : "hammers", display : "Слесарные и столярные инструменты"},
    {value : "pliers", display : "Шарнирно-губцевый инструмент, кусачки"},
    {value : "thread", display : "Резьбонарезные инструменты"},
    {value : "nails", display : "Крепёж и метизы"},
    {value : "circle", display : "Круги, диски для электроинструментов"},
    {value : "drillStuff", display : "Оснастка для сверления"},
    {value : "sawStuff", display : "Оснастка для строгания и пиления"},
    {value : "sparePartsElectro", display : "Запчасти и аксессуары к электроинструменту и станкам"}
];


export const BUILDMATERIALS: SubCategorySelectors[] = [
    {value : "any", display : "Любая"},
    {value : "dryMixes", display : "Сухие смеси"},
    {value : "clue", display : "Стеклохолст, клея"},
    {value : "corners", display : "Уголки и маяки"},
    {value : "etc", display : "Прочее"}
];

export const ELECTRO: SubCategorySelectors[] = [
    {value : "any", display : "Любая"},
    {value : "lighters", display : "Световое оборудование"},
    {value : "warmFloor", display : "Теплый пол"},
    {value : "sockets", display : "Розетки выключатели"},
    {value : "wire", display : "Кабель, провод"},
    {value : "automatic", display : "Автоматика"},
    {value : "bpPower", display : "Источники бесперебойного питания"},
    {value : "smartHome", display : "Умный дом"}
];


export const TAPS: SubCategorySelectors[] = [
    {value : "any", display : "Любая"}
];

export const GARDEN: SubCategorySelectors[] = [
    {value : "any", display : "Любая"}
];

export const HOZ: SubCategorySelectors[] = [
    {value : "any", display : "Любая"}
];

export const KANC: SubCategorySelectors[] = [
    {value : "any", display : "Любая"}
];


export const ARRAYTM: ArrayTM[] = [
    {value : "any", display : "Любая"},
    {value : "bosch", display : "Bosch"},
    {value : "gross", display : "Gross"},
    {value : "matrix", display : "Matrix"},

];

export const INSTRUMENTSELECTORS: InstrumentSelector[] = [

    {value : "electro", display : 'Электроинструмент', picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/electro.png', text : 'Дрели, Перфораторы, Дрели-шуруповёрты, Шуруповёрты и гайковёрты, Ручные дисковые пилы, Мешалки строительные, Лобзики, Электрорубанки, Сабельные ножовки, Электрофрезеры, Аккумуляторы для электроинструмента, Отбойные молотки, Электрические краскораспылители, Многофункциональный инструмент, Электроножницы, Технические фены, Термопистолеты клеевые, Строительные степлеры'},
    {value : "hammers", display : "Слесарные и столярные инструменты", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/stolar-slesar.jpeg', text : 'Молотки, Ножовки, зубила, Режущий инструмент, Топоры, Тиски, струбцины, Ножницы по металлу, Рубанки, фуганки, Трубогибы, труборезы, Гвоздодёры, ломы, Кельмы строительные, Шпатели, кребки, тёрки, Монтажные лебёдки, Правила строительные, Скобозабиватели, заклёпочники, Плиткорезы, стеклорезы, Шприцы и маслёнки'},
    {value : "circle", display : "Круги, диски для электроинструментов", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/circles.jpg', text : 'Круги отрезные, Круги зачистные, Круги абразивные, Круги и шлифшкурки, Круги лепестковые, Полировальные круги, Шлифовальные ленты, Круги алмазные и твердосплавные, Шлифовальные насадки и штифты, Материалы для полировки'},
    {value : "sawStuff", display : "Оснастка для строгания и пиления", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/saw.jpg', text : 'Ножи к электрорубанкам и станкам, Фрезы, Дисковые пилы к станкам, Дисковые пилы для ручных и торцовочных пил, Рамные и ленточные пилы, Пилы для лобзиков, ножовок'},
    {value : "paint", display : "Малярный инструмент", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/paint.jpg', text : 'Валики, Кисти, Лента клейкая, Малярные емкости, решетки, Миксера для красок, Укрывочные материалы, фильтры, Инструмент для дизайна, Карандаши, Ножи, Разметочный инвентарь'},
    {value : "equipment", display : "Станки и оборудование", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/equipment.jpg', text : 'Верстаки, Электрогенераторы, Отрезные машины по металлу, Нагреватели воздуха, пушки, Торцовочные пилы, Грузоподъемное оборудование, Деревообрабатывающие станки, Камнерезы, плиткорезы, Сверлильные станки, Станки точильные'},
    {value : "metric", display : "Измерительные инструменты", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/math.jpg', text : 'Дальномеры, Нивелиры, теодолиты, Кабелеискатели, металлодетекторы, Линейки, Измерительные рулетки, Щупы, Строительные уровни и отвесы, Тремометры, пирометры'},
    {value : "pnevmo", display : "Пневмоинструменты", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/pnevmo.jpg', text : 'Пневмогайковёрты, Пневмодрели, Компрессоры, Оснастка и расходники,  Молотки отбойные, Обдувочные, моечные пистолеты, Краскопульты пневматические, Пневмошлифмашины'},
    {value : "clean", display : "Оборудование для чистки и уборки", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/cleaning.JPG', text : 'Промышленные пылесосы, Очистители высокого давления'},
    {value : "screwsKeys", display : "Ключи и отвёртки", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/screwdriver.png', text : 'Балонные ключи, Динамометрические ключи, Рожковые, накидные ключи, Разводные ключи, Шестигранные ключи, torx, Съемники стопорных колец, Отвёртки'},
    {value : "pliers", display : "Шарнирно-губцевый инструмент, кусачки", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/pliers.jpeg', text : 'Кусачки, Плоскогубцы, пассатижи'},
    {value : "thread", display : "Резьбонарезные инструменты", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/thread.jpg', text : 'Метчики и плашки, Клуппы трубные, Извлекатели, экстракторы'},
    {value : "nails", display : "Крепёж и метизы", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/krepezh.jpg', text : 'Анкеры, Гвозди, Дюбели, Винты, болты, конфирматы, Шайбы, гайки, шпильки, Заклёпки, Хомуты, Крепёж для сантехники, Шурупы, заглушки, Цепи'},
    {value : "drillStuff", display : "Оснастка для сверления", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/drill.jpg', text : 'Свёрла и буры, Коронки для сверления, Биты для шуруповёртов, Зубила, Наборы оснастки дрелей и шуруповертов'},
    {value : "sparePartsElectro", display : "Запчасти и аксессуары к инструменту", picture : 'https://s3.eu-west-2.amazonaws.com/first-supplier-pict/instrgroup/spareparts.jpg', text : 'Запчасти к инструментам, Фонари, Ящики для инструмента, Тележки'}
];

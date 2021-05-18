const initState = {
  initiatives: [
    {
      id: '1',
      section: 'Header',
      title: 'СЛАВУТИЧ – перша Мала культурна столиця України',
      btn: {
        text: '',
        color: '',
        background: ''
      },
      desc: `Славутич був зведений спеціально для працівників ЧАЕС та їх сімей після найбільшої в історії ядерної аварії (1986). На відміну від Прип'яті - показового атомограду – Славутич спланований як екологічне та комфортне місто у 1987-1988 роках за участі восьми радянських республік. Кожна з них збудувала окремий квартал, тому у місті Таллінський, Рижський, Вільнюський, Невський, Московський, Тбіліський, Бакинський, Єреванський та Київський квартали. Тут є Дитяча школа мистецтв, Палац дітей та молоді, Кіно-концертний комплекс, безліч відкритих тренажерних майданчиків, футбольні поля, стадіони, басейни, вело- та пейнт-клуби, яхтинг та ФОКи з олімпійських видів спорту. А в дитсадках і школах завжди є вільні місця для малих славутичан. А ще тут цілюще хвойне повітря і чиста питна вода, а поруч – Дніпро.`,
      moreBtn: {
        title: 'More...',
        color: '#d71016',
        href: 'https://investslavutych.arr.in.ua/turizm/'
      },
      titleColor: '#000',
      descColor: '#000',
      background: '#fbb912'
    },
    {
      id: '2',
      section: 'Art Residence',
      title: 'OPEN FORMAT ART RESIDENCE',
      btn: {
        text: 'взяти участь',
        color: '#fff',
        background: '#d71016'
      },
      desc: `Арт-резиденція семантичного сюрреалізму почалася в просторі архітектурного постмодернізму Славутича у 2019 році з програми «Малі міста – великі враження» і стала одним з кращих проєктів серед 70-ти. А вже наступного року допомогла вибороти статус Малої культурної столиці України. У 2021 році вона проходить у open format і складається з трьох частин зі своїм розкладом: віртуальна реальність «Апофеоз імперії» 12-18/07, фото-графічний пленер «24х36» 02-08/08, медіа-арт-платформа Carbon 06-12/09. Фіналом 15/09 буде науково-практична конференція «Традиції та новації в просторі художньої творчості ХХ - ХХІ ст: культурологічний дискурс».`,
      moreBtn: {
        title: 'More...',
        color: '#fbb912',
        href: 'https://www.facebook.com/SurrealismSlavutych'
      },
      titleColor: '#fff',
      descColor: '#fff',
      background: '#801713'
    },
    {
      id: '3',
      section: 'Sesam',
      title: 'SESAM Poliklinika',
      btn: {
        text: 'взяти участь',
        color: '#fff',
        background: '#000'
      },
      desc: `20-30/08 Міжнародний семінар студентів-архітекторів від Європейської Архітектурної Студентської Асамблеї вперше буде проходити в Україні. Впродовж події учасники житимуть в будівлі закинутої поліклініки – для творчих інтервенцій та експериментів молоді дослідники SESAM зазвичай обирають порожні простори. Близько 30 воркшопів, організованих студентами та молодими професіоналами, будуть досліджувати тему Poliklinika, що відсилає до поняття охорони здоров’я та його відношення до архітектури. Обрані в процесі відкритого відбору воркшопи та відповідно їх тьютори будуть варіюватися від проектування та будівництва до теоретичних досліджень та концептуального мистецтва`,
      moreBtn: {
        title: 'More...',
        color: '#801713',
        href: 'https://sesam2021ukraine.com/'
      },
      titleColor: '#000',
      descColor: '#fff',
      background: '#a6a5a5'
    },
    {
      id: '4',
      section: 'Zosya',
      title: ' «Золота осінь Славутича»',
      btn: {
        text: 'взяти участь',
        color: '#fff',
        background: '#d71016'
      },
      desc: `24-27/09 Міжнародний фестиваль дитячої творчості, телебачення та преси залучає молодь до соціальної активності у суспільному, культурному та економічному житті. Розкриває особливості життєдіяльності молоді в сучасних умовах. Сприяє цілеспрямованій професійній підготовці до роботи в ЗМІ, поглибленню творчих і дружніх контактів між дітьми різних країн. Юні журналісти, телеоператори, фотокореспонденти, редактори та журналісти дитячих газет і теле- та радіопрограм змагаються у своїй майстерності розкриття актуальних тем.`,
      moreBtn: {
        title: 'More...',
        color: '#d71016',
        href: 'https://zosya.slavutych.city/'
      },
      titleColor: '#000',
      descColor: '#fff',
      background: '#fbb912'
    },
    {
      id: '5',
      section: 'GoldenFest',
      title: 'GoldenFest',
      btn: {
        text: 'взяти участь',
        color: '#fff',
        background: '#801713'
      },
      desc: `16-18/10 відбудеться Міжнародний фестиваль для людей поважного віку «GOLDenFest» – щорічний культурно-мистецький захід. Підвищити якість життя осіб старше 50 років, залучити до соціальної взаємодії в умовах нової реальності стрімкого динамічного світу, «пом’якшити» ефект стресу у зв’язку із майбутнім виходом на пенсію – це мета фестивалю. Дискусійні зустрічі у форматі «живої» бібліотеки «Вік щастя», майстер-класи з живопису, йоги, кулінарії, вечірки та кіноперегляди, спортивні змаганні та конкурси виконавської майстерності зі співів, танців, живопису, дефіле та конкурс «Місіс та Містер GOLDenFest».`,
      moreBtn: {
        title: 'More...',
        color: '#801713',
        href: 'https://www.facebook.com/GOLDenFestSlavutych'
      },
      titleColor: '#fff',
      descColor: '#fff',
      background: '#963d2e'
    }
  ],
  curators: [
    {
      id: '1',
      name: 'Юрій Фомічев',
      position: 'мер Славутича – Малої культурної столиці України-2021',
      img: 'https://i.ibb.co/pfysp4L/1.png',
      href: 'https://www.facebook.com/Fomichev.Slavutich'
    },
    {
      id: '2',
      name: 'Ніна Баришевська',
      position: 'начальник Відділу культури, національностей та релігій',
      img: 'https://i.ibb.co/TrSBbTf/2.png',
      href: 'https://www.facebook.com/bagrinina'
    },
    {
      id: '3',
      name: 'Віктор Гріза',
      position: 'куратор Open Format Art Residence ',
      img: 'https://i.ibb.co/LpS0Cmj/3.png',
      href: 'https://www.facebook.com/viktor.griza/'
    },
    {
      id: '4',
      name: 'Єлизавета Зігура',
      position: 'со-куратор Open Format Art Residence',
      img: 'https://i.ibb.co/y89tc8f/4.png',
      href: 'https://www.facebook.com/liza.liz.79827'
    },
    {
      id: '5',
      name: 'Арина Старовойтова',
      position: 'куратор SESAM Poliklinika & GOLDenFest ',
      img: 'https://i.ibb.co/Dzf43FT/5.png',
      href: 'https://www.facebook.com/aryna.starovoitova'
    },
    {
      id: '6',
      name: 'Марина Карасьова',
      position: 'со-куратор SESAM Poliklinika & GOLDenFest ',
      img: 'https://i.ibb.co/Vpy7gDg/6.png',
      href: 'https://www.facebook.com/marina.karaseva.75'
    },
    {
      id: '7',
      name: 'Ніна Єрьоміна',
      position: 'куратор фестивалю «Золота осінь Славутича»',
      img: 'https://i.ibb.co/6Yrw0ys/7.png',
      href: 'https://www.facebook.com/profile.php?id=100028592674328'
    },
    {
      id: '8',
      name: 'Наталія Кошовнік',
      position: 'со-куратор фестивалю «Золота осінь Славутича»  ',
      img: 'https://i.ibb.co/Y2M7xrb/8.png',
      href: 'https://www.facebook.com/nataliakoshovnyk'
    }
  ],
  initiativeLogos: [
    {
      id: '1',
      img: 'https://i.ibb.co/JFJYhjZ/1-OFAR-1.png',
      href: 'https://www.facebook.com/SurrealismSlavutych'
    },
    {
      id: '2',
      img: 'https://i.ibb.co/px8QJkR/2-SESAM-Poliklinika-1.png',
      href: 'https://www.facebook.com/EasaUkraine'
    },
    {
      id: '3',
      img: 'https://i.ibb.co/FJ8mMwx/3-1.png',
      href: 'https://bit.ly/3agR1X3'
    },
    {
      id: '4',
      img: 'https://i.ibb.co/GdVbB9k/4-GOLDen-Fest-1.png',
      href: 'https://www.facebook.com/GOLDenFestSlavutych'
    }
  ],
  partners: {
    title: 'ПАРТНЕРИ МАЛОЇ КУЛЬТУРНОЇ СТОЛИЦІ УКРАЇНИ 2021',
    btn: {
      text: 'стати партнером',
      color: '#fff',
      background: '#d71016'
    },
    logos: [
      {
        id: '1',
        img: 'https://i.ibb.co/fv6XML6/1-1.png',
        href: 'http://e-slavutich.gov.ua/about_city/SitePages/History.aspx'
      },
      {
        id: '2',
        img: 'https://i.ibb.co/sKPBcbF/22-1.png',
        href: 'https://www.culture-slavutich.com.ua/'
      },
      {
        id: '3',
        img: 'https://i.ibb.co/br815mg/3-1.png',
        href: 'https://investslavutych.arr.in.ua/'
      },
      {
        id: '4',
        img: 'https://i.ibb.co/RTfRXsv/4-1.png',
        href: 'https://www.facebook.com/slavcomplex'
      },
      {
        id: '5',
        img: 'https://i.ibb.co/rcyv8Ns/5-1.png',
        href: 'https://www.facebook.com/groups/310681429697383'
      }
    ]
  },
  contacts: {
    phone: '+38 (045) 792 36 20',
    email: 'culture@slavutych.capital',
    insta: '',
    youtube: '',
    facebook: ''
  }
}

const mainReducer = (state = initState) => {
  return state
}

export default mainReducer

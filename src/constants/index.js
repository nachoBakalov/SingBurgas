import { facebook, instagram, send, shield, star, numsi, nma  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Начало",
  },
  {
    id: "features",
    title: "Преподаване",
  },
  {
    id: "biography",
    title: "Биография",
  },
  {
    id: "contact",
    title: "За контакт",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: shield,
    title: "Доверие",
    content:
      "Създаване на безопасна и подкрепяща среда, където ученикът да се чувства уверен в процеса на обучение.",
  },
  {
    id: "feature-2",
    icon: star,
    title: "Индивидуален подход",
    content:
      "Адаптиране на уроците според нуждите и темпото на всеки ученик, с акцент върху личностното му развитие.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Творческа свобода",
    content:
      "Насърчаване на учениците да експериментират с идеи и да изразяват своя стил в изпълненията.",
  },
];


export const stats = [
  {
    id: "stats-1",
    title: "години преподавател",
    value: "10+",
  },
  {
    id: "stats-2",
    title: "обучени ученици",
    value: "100+",
  },
  {
    id: "stats-3",
    title: "музикален опит",
    value: "20+",
  },
];


export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/sonya.puleva/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/sonya.puleva",
  },
];

export const workExperiences = [
  {
    id: 1,
    name: 'НУМСИ',
    pos: 'Основно бразонвание',
    duration: '1991 - 1995',
    title: "Специалност пиано",
    icon: numsi,
  },
  {
    id: 2,
    name: 'НУМСИ',
    pos: 'Средно бразонвание',
    duration: '1995 - 2000',
    title: "Специалност поп и джаз пеене",
    icon: numsi,
  },
  {
    id: 3,
    name: 'НМА',
    pos: 'Висше образование',
    duration: '2000 - 2005',
    title: "Специалност поп и джаз пеене в класа на Алис Боварян",
    icon: nma,
  },
  {
    id: 4,
    name: 'НУМСИ',
    pos: 'Преподавател по поп и джаз пеене',
    duration: '2013',
    title: "Преподавател по поп и джаз пеене",
    icon: numsi,
  },
];
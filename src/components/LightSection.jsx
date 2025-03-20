import React from 'react'
import Work from './Work'
import light_1_1 from '../assets/pics/light_1_1.jpg'
import light_1_2 from '../assets/pics/light_1_2.jpg'
import light_1_3 from '../assets/pics/light_1_3.jpg'
import light_1_4 from '../assets/pics/light_1_4.jpg'
import light_1_5 from '../assets/pics/light_1_5.jpg'
import light_1_6 from '../assets/pics/light_1_6.jpg'
import light_1_7 from '../assets/pics/light_1_7.jpg'
import light_1_8 from '../assets/pics/light_1_8.jpg'
import light_1_9 from '../assets/pics/light_1_9.jpg'
import light_2_1 from '../assets/pics/light_2_1.jpg'
import light_2_2 from '../assets/pics/light_2_2.jpg'
import light_2_3 from '../assets/pics/light_2_3.jpg'
import light_2_4 from '../assets/pics/light_2_4.jpg'
import light_2_5 from '../assets/pics/light_2_5.jpg'
import light_2_6 from '../assets/pics/light_2_6.jpg'
import light_2_7 from '../assets/pics/light_2_7.jpg'
import light_2_8 from '../assets/pics/light_2_8.jpg'
import light_2_9 from '../assets/pics/light_2_9.jpg'
import light_2_10 from '../assets/pics/light_2_10.jpg'
import light_3_1 from '../assets/pics/light_3_1.jpg'
import light_4_1 from '../assets/pics/light_4_1.jpg'
import light_5_1 from '../assets/pics/light_5_1.jpg'
import light_5_2 from '../assets/pics/light_5_2.jpg'
import light_5_3 from '../assets/pics/light_5_3.jpg'
import light_5_4 from '../assets/pics/light_5_4.jpg'
import light_5_5 from '../assets/pics/light_5_5.jpg'
import light_6_1 from '../assets/pics/light_6_1.jpg'
import light_6_2 from '../assets/pics/light_6_2.jpg'
import light_6_3 from '../assets/pics/light_6_3.jpg'

function LightSection() {
  const works = [
    {
      author: 'Наумова Софья',
      title: 'Иваново детство',
      smell: 'семейный фотоальбом, рассохшееся дерево, нагретый солнцем металлолом',
      socialLink: 'https://t.me/ssonistortion',
      images: [
        light_1_1,
        light_1_2,
        light_1_3,
        light_1_4,
        light_1_5,
        light_1_6,
        light_1_7,
        light_1_8,
        light_1_9,
      ],
    },
    {
      author: 'Наумова Софья',
      title: 'Дети немой страны',
      smell: 'семейный фотоальбом, рассохшееся дерево, нагретый солнцем металлолом',
      description:
        'Фотография — это инструмент запечатления реальности и истинного человеческого нутра со всеми его гранями и крайностями. Фотография должна, обязана быть документалистски честной и искренней, быть художественным передатчиком ценного воспоминания.',
      socialLink: 'https://t.me/ssonistortion',
      images: [
        light_2_1,
        light_2_2,
        light_2_3,
        light_2_4,
        light_2_5,
        light_2_6,
        light_2_7,
        light_2_8,
        light_2_9,
        light_2_9,
        light_2_9,
        light_2_10,
      ],
    },
    {
      author: 'Полина Антипина',
      title: 'Calming Place',
      description:
        'После тяжелого дня часто возникает шальная мысль уехать далеко-далеко в какой-нибудь загородный домик от проблем и тревог, чтобы наконец расслабиться и почувствовать себя живым и вдохновленным снова, как в детстве.  В детстве всё вокруг казалось таким волшебным и лёгким, как во сне,  хотелось что-то придумывать, рисовать, мечтать и наслаждаться моментом. В своей работе я соединила чувство умиротворения и магию непринужденного воображения, которая была у всех нас в детстве. А колба символизирует сохранение волшебной атмосферы в памяти, можно доставать её и открывать в тревожные моменты.',
      smell: 'запах хвои, дерева',
      socialLink: 'https://t.me/midnightsketcher',
      images: [light_3_1],
    },
    {
      author: 'Алина Мещерякова',
      title: 'По-Маяковски',
      description:
        'Маяковский стал моим любимым героем литературы, я ассоциирую его со школой и свои детством. Чем дольше я занималась, тем больше мне нравилась литература! Однажды я решила объединить свою любовь к дизайну и литературе, и так родились мои первые работы',
      smell: 'свежий запах приходящей весны',
      socialLink:
        'https://www.instagram.com/_alimesheriakova_?igsh=MTFvb29waDhkZzhscA%3D%3D&utm_source=qr',
      images: [light_4_1],
    },
    {
      author: 'Фокина Ярослава',
      title: 'Секретики',
      description:
        '«Секретики» — детская практика сооружения тайников в песочнице с мелкими «сокровищами» и ценными записочками, которые покрывались стёклышками. Внутри кубиков находятся секреты маленькой девочки, такой небольшой личный дневник. Но, чтобы узнать её секреты, нужно хорошо рассмотреть кубик изнутри.',
      socialLink: 'https://www.instagram.com/foyaros',
      images: [light_5_1, light_5_2, light_5_3, light_5_4, light_5_5],
    },
    {
      author: 'Полина Руденко',
      title: 'Триптих “Детство”',
      description: 'Это – главные атрибуты детства в народных росписях.',
      smell: 'запах красной деревянной ложки',
      socialLink: 'https://www.instagram.com/sindrinke/',
      images: [light_6_1, light_6_2, light_6_3],
    },
  ]

  return (
    <div id="light-section" className="light-section">
      <header className="light-header">
        <div>
          <h1>Детство – это </h1>
          <br />
          <h1>... первые воспоминания, теплые чувства</h1>
        </div>
        <a
          href="https://music.yandex.ru/album/30378169/track/124095819?utm_medium=copy_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Слушать музыку раздела
        </a>
      </header>
      <main className="light-content">
        {works.map((work, index) => (
          <Work key={index} work={work} />
        ))}
      </main>
    </div>
  )
}

export default LightSection

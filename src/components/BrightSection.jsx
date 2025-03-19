import React from 'react'
import Work from './Work'
import bright_1_1 from '../assets/pics/bright_1_1.png'
import bright_2_1 from '../assets/pics/bright_2_1.png'
import bright_3_1 from '../assets/pics/bright_3_1.png'
import bright_4_1 from '../assets/pics/bright_4_1.jpg'
import bright_5_1 from '../assets/pics/bright_5_1.jpg'
import bright_5_2 from '../assets/pics/bright_5_2.jpg'
import bright_5_3 from '../assets/pics/bright_5_3.jpg'
import bright_5_4 from '../assets/pics/bright_5_4.jpg'
import bright_5_5 from '../assets/pics/bright_5_5.jpg'
import bright_5_6 from '../assets/pics/bright_5_6.jpg'
import bright_5_7 from '../assets/pics/bright_5_7.jpg'
import bright_5_8 from '../assets/pics/bright_5_8.jpg'
import bright_6_1 from '../assets/pics/bright_6_1.png'
import bright_6_2 from '../assets/pics/bright_6_2.png'
import bright_6_3 from '../assets/pics/bright_6_3.png'
import bright_6_4 from '../assets/pics/bright_6_4.png'
import bright_6_5 from '../assets/pics/bright_6_5.png'
import bright_6_6 from '../assets/pics/bright_6_6.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function BrightSection() {
  const works = [
    {
      author: 'Алёна Мельникова',
      title: 'Зелёная качеля',
      description:
        "В детстве, когда нужно было встретиться с друзьями, я всегда шла на 'зелёную качелю'. Это было место сбора нашей четвёрки. Мы выросли, разъехались по разным городам, почти перестали видеться. Но я иногда приезжаю и жду, что мы с друзьями снова увидимся.",
      smell: 'запах свежести, лета и лимонада',
      socialLink: 'https://t.me/chipichipichapachaqa',
      images: [bright_1_1],
    },
    {
      author: 'Юлия Колосова',
      title: 'Камера',
      description:
        'Площадка, трава по колено, чипсики пока мама не заметила, голуби. Улыбнитесь, вас скрывает скрытая камера!',
      smell: 'запах шин',
      socialLink: 'https://t.me/ylenqkart',
      images: [bright_2_1],
    },
    {
      author: 'Юлия Колосова',
      title: 'Узник',
      description:
        'Кажется не всех научили выбираться из плена. Его вон вообще жизнь ничему не учит, а он висит, молодец, выдерживает же как-то!',
      smell: 'запах шин',
      socialLink: 'https://t.me/ylenqkart',
      images: [bright_3_1],
    },
    {
      author: 'Василиса Сорокина',
      title: 'Серия абстрактных иллюстраций',
      description:
        'Меня всегда поражали люди, которые могут рассказать о каких то конкретных моментах из своего детства. Потому что я совершенно ничего не могу вспомнить. И тут я подумала, а почему бы не попытаться поделиться не рассказом о произошедших событиях, а чувственными ощущениями. Ведь в какой то мере рассказы и существуют, чтобы делиться эмоциями. Это серия абстрактных иллюстраций, каждая из которых отображает мое чувственное ощущение от определенного периода детства: от дошкольного возраста до старшей школы.',
      smell:
        'творожная запеканка, мороз, мокрое дерево, летний зной, железный, кислородный коктейль',
      socialLink: 'https://t.me/sovi_naya',
      images: [bright_4_1],
    },
    {
      author: 'Фокина Ярослава',
      title: 'Игра',
      description:
        'Даже в самой унылой обстановке, когда ребёнок вовлечен в свою игру, вокруг всё становиться безумно красочным и нереальным.',
      socialLink: 'https://www.instagram.com/foyaros',
      images: [
        bright_5_1,
        bright_5_2,
        bright_5_3,
        bright_5_4,
        bright_5_5,
        bright_5_6,
        bright_5_7,
        bright_5_8,
      ],
    },
    {
      author: 'Юлия Шинаева',
      title: 'Воспоминания, стертые временем',
      description:
        'Мои работы состоят из двух частей: оригинальной пастельной работы, которая является репрезентацией самого детского воспоминания, и её оттиска на бумаге, который является метафорой, что все наши воспоминания имеют свойства стираться из памяти. В своих работах я использовала абстрактный образ воспоминаний и моментов из разного периода детства: раннее детство, детство вдали от родителей, начальная школа, интернат, больница и старшая школа.',
      smell:
        'сладкая вата и печенье слоёные ушки; речная тина и запах огородных растений; мамины домашние сырники с малиновым вареньем и мятой; запах бензина; запах больничной хлорки и лекарств; фиолетовый Philip Morris с кнопкой, лимонный гараж и вишнёвый блейзер',
      socialLink: 'https://t.me/richiemustdie',
      images: [bright_6_1, bright_6_2, bright_6_3, bright_6_4, bright_6_5, bright_6_6],
    },
  ]

  return (
    <div id="bright-section" className="bright-section">
      <header className="bright-header">
        <div>
          <h1 className="bright-header ch">
            <strong>Детство – это</strong>
          </h1>
          <br />
          <h1>... новый опыт, яркие эмоции</h1>
        </div>
        <a
          href="https://music.yandex.ru/album/23884072/track/108333271?utm_medium=copy_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Слушать музыку раздела
        </a>
      </header>
      <main className="bright-content">
        {works.map((work, index) => (
          <Work key={index} work={work} />
        ))}
      </main>
    </div>
  )
}

export default BrightSection

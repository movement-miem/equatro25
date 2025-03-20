import React from 'react'
import Work from './Work'
import dark_1_1 from '../assets/pics/dark_1_1.png'
import dark_2_1 from '../assets/pics/dark_2_1.png'
import dark_3_1 from '../assets/pics/dark_3_1.jpg'
import dark_4_1 from '../assets/pics/dark_4_1.jpg'
import dark_4_2 from '../assets/pics/dark_4_2.jpg'
import dark_5_1 from '../assets/pics/dark_5_1.png'
import dark_5_2 from '../assets/pics/dark_5_2.png'
import dark_5_3 from '../assets/pics/dark_5_3.png'
import dark_5_4 from '../assets/pics/dark_5_4.png'
import dark_5_5 from '../assets/pics/dark_5_5.png'
import dark_5_6 from '../assets/pics/dark_5_6.png'
import dark_6_1 from '../assets/pics/dark_6_1.png'

function DarkSection() {
  const works = [
    {
      author: 'Никита Ерофеев',
      title: '***',
      description:
        'Жизнь многогранна. Единственная возможность обрести духовную твердость — нравственно и морально воспитывать себя.',
      smell: 'запах росы',
      socialLink: 'https://t.me/poetrugol',
      images: [dark_1_1],
    },
    {
      author: 'Георгий Бизяев',
      title: 'Свет во мраке',
      description: '«Потерявшись во тьме ТЫ обретешь СВЕТ»',
      smell: 'запах жвачки',
      socialLink: 'https://t.me/sorgiyami',
      images: [dark_2_1],
    },
    {
      author: 'Алина Мещерякова',
      title: 'Ментальное сальто',
      description:
        'Многие люди, особенно творческие, часто испытывают эмоциональные выгорания, которые напоминают ментальные сальто. В голове тысячи мыслей в виде тараканов, пытающихся найти выход. Я изобразила то, что чувствует человек во время выгорания, включая свои собственные травмы',
      smell: 'запах горечи, древесности',
      socialLink:
        'https://www.instagram.com/_alimesheriakova_?igsh=MTFvb29waDhkZzhscA%3D%3D&utm_source=qr',
      images: [dark_3_1],
    },
    {
      author: 'Руденко Полина',
      title: 'Диптих “Невыразимое”',
      description:
        'У каждого есть свое особое чувство, которое погружает в меланхолию и заставляет размышлять. Мое - это ощущение, когда выходишь из воды, и тебе холодно. Зябко и по-приятному тоскливо. Оно сопряжено с личным опытом каждого, оно невыразимо и ностальгично',
      smell: 'свежий ночной воздух у пресного водоема',
      socialLink: 'https://www.instagram.com/sindrinke/',
      images: [dark_4_1, dark_4_2],
    },
    {
      author: 'Юлия Коняхова',
      title: 'Мои родители – динозавры',
      description:
        'Мои работы выразительные, грустные, пугающие. Серия представляет собой развороты зина, посвященного опыту взросления в дисфункциональной семье и развитию у ребенка комплексного ПТСР.',
      smell: 'запах из старого комода в съемной квартире',
      socialLink: 'https://t.me/ink_and_stick',
      images: [dark_5_1, dark_5_2, dark_5_3, dark_5_4, dark_5_5, dark_5_6],
    },
    {
      author: 'Екатерина Рыхлова',
      title: 'За отражением',
      description:
        'Это проект о борьбе с жизнью взрослых детей алкоголиков. Дети, растущие в дисфункциональных семьях, зачастую имеют очень схожие паттерны поведения, сохраняющиеся до взрослого возраста и мешающие полноценно жить, но их обнаружение и контроль помогают ВДА чувствовать себя лучше, а также позволяют обратить внимание других людей, чтобы они знали, как общаться с ВДА, если те присутствуют в их окружении.',
      smell: 'черный кофе',
      socialLink: 'https://www.instagram.com/katryhlova',
      images: [dark_6_1],
    },
  ]

  return (
    <div id="dark-section" className="dark-section">
      <header className="dark-header">
        <div>
          <h1>Детство – это </h1>
          <br />
          <h1>...непростые испытания, сомнения и тревожные переживания</h1>
        </div>
        <a
          href="https://music.yandex.ru/album/31199470/track/125924636?utm_medium=copy_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Слушать музыку раздела
        </a>
      </header>
      <main className="dark-content">
        {works.map((work, index) => (
          <Work key={index} work={work} />
        ))}
      </main>
    </div>
  )
}
export default DarkSection

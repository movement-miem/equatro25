import React from 'react'
import Work from './Work.jsx'
import general_1_1 from '../assets/pics/general_1_1.jpg'
import general_1_2 from '../assets/pics/general_1_2.jpg'
import general_1_3 from '../assets/pics/general_1_3.jpg'

function GeneralSection() {
  const works = [
    {
      author: 'Дружинина Мария',
      title: 'Серия постеров',
      description:
        'Серия постеров посвящена образам и звукам детства. В работе важен акцент на конкретном моменте: образы людей обобщены, под ними можно подразумевать любого человека.',
      smell:
        ' свежесть, запах моря и солнцезащитный крем; прохлада в летний вечер и свежесть леса; хвойный аромат и запах старых ёлочных игрушек',
      socialLink: 'https://t.me/mshxda',
      images: [general_1_1, general_1_2, general_1_3],
    },
  ]

  return (
    <div id="general-section" className="common-section">
      <header className="common-header">
        <div>
          <h1>Детство – это </h1>
          <br />
          <h1>... то, что делает нас — нами.</h1>
          <h1 className="slogan">ДЕТСТВО — это НАВСЕГДА</h1>
        </div>
        <a
          href="https://music.yandex.ru/album/29559678/track/122247097?utm_medium=copy_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Слушать музыку раздела
        </a>
      </header>
      <main className="common-content">
        {works.map((work, index) => (
          <Work key={index} work={work} />
        ))}
      </main>
    </div>
  )
}

export default GeneralSection

import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Work({ work }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : work.images.length - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev < work.images.length - 1 ? prev + 1 : 0))
  }

  const showArrows = work.images?.length > 1

  return (
    <div className="work">
      <div className="work-text">
        <h2>{work.title}</h2>
        <p className="author">
          <strong>Автор:</strong> {work.author}
        </p>
        {work.smell && (
          <p>
            <strong>Это пахнет как:</strong> {work.smell}
          </p>
        )}
        {work.description && (
          <p>
            <strong>Описание:</strong> {work.description}
          </p>
        )}
        {work.socialLink && (
          <a href={work.socialLink} target="_blank" rel="noopener noreferrer">
            Связаться с автором
          </a>
        )}
      </div>
      {work.images?.length > 0 && (
        <div className="image-slider">
          {showArrows && (
            <button className="slider-button prev" onClick={handlePrevImage}>
              <FaArrowLeft />
            </button>
          )}
          <img src={work.images[currentImageIndex]} alt={work.title} className="work-image" />
          {showArrows && (
            <button className="slider-button next" onClick={handleNextImage}>
              <FaArrowRight />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

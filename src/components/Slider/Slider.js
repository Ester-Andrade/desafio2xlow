import React, { useState, useEffect } from 'react';
import './styles.css';

const Slider = ({ images }) => {
  const [imgIndex, setImageIndex] = useState(0);
  const imgArrLength = images.length;

  useEffect(() => {
    let dotButtons = document.getElementById('dot-buttons').children;
    [...dotButtons].map((obj, index) => {
      if (index === imgIndex) {
        dotButtons[index].classList.add('current');
      } else {
        dotButtons[index].classList.remove('current');
      }
    });

    setTimeout(() => {
      imgIndex === imgArrLength - 1
        ? setImageIndex(0)
        : setImageIndex(imgIndex + 1);
    }, 2000);
  }, [imgIndex]);

  return (
    <div id='slider'>
      <a href={images[imgIndex].link}>
        <img
          src={images[imgIndex].url}
          alt={images[imgIndex].alt}
          className='slider__image'
        />
      </a>
      <button
        id='left'
        onClick={() => {
          imgIndex === 0
            ? setImageIndex(imgArrLength - 1)
            : setImageIndex(imgIndex - 1);
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlSpace='preserve'
          id='XMLID_287_'
          width='90%'
          height='90%'
          fill='#fff'
          transform='rotate(180)'
          version='1.1'
          viewBox='0 0 24 24'
        >
          <g id='SVGRepo_iconCarrier'>
            <path
              id='next'
              d='m6.8 23.7-1.4-1.4L15.7 12 5.4 1.7 6.8.3 18.5 12z'
            ></path>
          </g>
        </svg>
      </button>
      <button
        id='right'
        onClick={() => {
          imgIndex === imgArrLength - 1
            ? setImageIndex(0)
            : setImageIndex(imgIndex + 1);
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlSpace='preserve'
          id='XMLID_287_'
          width='90%'
          height='90%'
          fill='#fff'
          version='1.1'
          viewBox='0 0 24 24'
        >
          <g id='SVGRepo_iconCarrier'>
            <path
              id='next'
              d='m6.8 23.7-1.4-1.4L15.7 12 5.4 1.7 6.8.3 18.5 12z'
            ></path>
          </g>
        </svg>
      </button>
      <div id='dot-buttons'>
        {images.map((obj, key) => {
          return (
            <button
              className='dot-button'
              key={key}
              onClick={() => {
                setImageIndex(key);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;

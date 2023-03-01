import React from 'react'
import { ICarouselItem } from '../../../interfaces/carousel';
import DesktopCarousel from '../desktop-carousel'
import MobileCarousel from '../mobile-carousel'
import styles from './styles.module.css';

interface ICarousels {
  desktopItems: ICarouselItem[] 
  mobileItems: ICarouselItem[]
}

export default function Carousels({ desktopItems, mobileItems }: ICarousels) {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.carouselWrapper}>
        <DesktopCarousel
          className="hidden-ltmd"
          carouselItems={desktopItems}
          itemsPerSlide={4}
          previousDescription='Föregående slide'
          nextDescription='Nästa slide'
        />

        <MobileCarousel
          className='hidden-gtmd'
          carouselItems={mobileItems}
        />
      </div>
    </div>
  </div>
  )
}

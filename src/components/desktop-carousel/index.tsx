import React, { useEffect } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import { ICarousel } from '../../../interfaces/carousel'
import NavigationArrows from '../navigation-arrows'

interface IDesktopCarousel extends ICarousel  {
  previousDescription: string
  nextDescription: string
}

export default function DesktopCarousel({
    carouselItems,
    itemsPerSlide,
    previousDescription,
    nextDescription,
    className
  }: IDesktopCarousel) {

  const { carouselFragment, slideToPrevItem, slideToNextItem, slideToItem} = useSpringCarousel({
    itemsPerSlide: itemsPerSlide,
    items: carouselItems,
    gutter: 16,
  })

  useEffect(() => {
    slideToItem(0);
  }, [carouselItems])

  return (
    <div className={className}>
      {carouselFragment}
      <NavigationArrows
        onPrevious={slideToPrevItem}
        previousDescription={previousDescription}
        nextDescription={nextDescription}
        onNext={slideToNextItem}
      />
    </div>
  )
}

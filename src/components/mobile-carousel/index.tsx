import React, { useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import { ICarousel } from '../../../interfaces/carousel';
import DotIndicator from '../dot-indicator';
import styles from './styles.module.css';

export default function MobileCarousel({ carouselItems, className }: ICarousel) {
  const [activeItem, setActiveItem] = useState<number>(0);
  const {
    carouselFragment,
    useListenToCustomEvent,
    slideToPrevItem,
    slideToNextItem,
  } = useSpringCarousel({
    slideType: 'fluid',
    items: carouselItems,
    gutter: 16
  });

  // TODO: Sometimes the the fluid slider dont work fully as i wanted it to.
  // tried to do some research for this but at times the slide doesnt center properly
  // it sort of slide to far.

  useListenToCustomEvent((event) => {
    // TODO: unfortunately i think there is a bug in the spring-carousel library. 
    // when logging the event i dont get access to the current index and id.
    // i only get back { index: -1, id: ''} i didnt have time to change 
    // library or fix this. So sadly the dotindicator does not currently work.
    console.log(event);
  });

  return (
    <>
      <div className={className}>
        {carouselFragment}
        <div>
          <DotIndicator totalAmount={carouselItems.length} activeIndex={1} />
        </div>
      </div>
    </>
  )
}

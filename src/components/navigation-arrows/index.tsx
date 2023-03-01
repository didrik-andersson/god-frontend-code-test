import React from 'react';
import { Flex, IconButton } from 'vcc-ui';
import styles from "./styles.module.css";

interface INavigationArrows {
  onPrevious: () => void
  onNext: () => void
  previousDescription: string
  nextDescription: string
}

export default function NavigationArrows({ 
  onPrevious, 
  onNext, 
  previousDescription, 
  nextDescription
 }: INavigationArrows) {

  return (
    <Flex extend={{ flexDirection: 'row', marginTop: '16px', justifyContent: "flex-end" }}>
      <Flex extend={{ flexDirection: 'row',  gap: '8px' }} >
        <IconButton
          aria-label={previousDescription}
          iconName='navigation-chevronback'
          variant="outline"
          onClick={onPrevious}
        />
        <IconButton
          aria-label={nextDescription}
          iconName="navigation-chevronforward"
          variant="outline"
          onClick={onNext}
        />
      </Flex>
    </Flex>
  )
}

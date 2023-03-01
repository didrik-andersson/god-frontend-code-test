import React from 'react'
import { Block, Flex, Text } from 'vcc-ui';
import styles from './styles.module.css';

export interface IFilterCategory {
  label: string
  value: string[]
  count: number
}

interface IFilterBar {
  categories: IFilterCategory[]
  onClick: (category: IFilterCategory) => void
  selectedCategoryLabel: string | null
}

export default function FilterBar({ categories, onClick, selectedCategoryLabel }: IFilterBar) {

  const isActiveCategory = (category: IFilterCategory) => category.label === selectedCategoryLabel 

  return (
    <Block extend={{ marginTop: '50px' }}>
      <Flex extend={{ justifyContent: 'center', flexDirection: 'row', gap: '16px' }}>
        {categories.map((category) => (
          <div key={category.label} className={isActiveCategory(category) ? styles.active : ''}>
          <button
            onClick={() => onClick(category)}
            type="button"
            className={styles.button}
          >
            <Text>
              {category.label} ({category.count})
            </Text>
          </button>
          </div>
        ))}
      </Flex>
    </Block>
  )
}

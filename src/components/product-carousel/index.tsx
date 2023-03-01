import React from 'react'
import { IProductData } from '../../../interfaces/product';
import Carousels from '../carousels';
import FilterBar from '../filter-bar';
import Product from '../product';
import styles from './styles.module.css';
import useProductCarousel from './use-product-carousel';


interface IProductCarousel {
  products: IProductData[]
}

const mapCarouselItems = (items: IProductData[], type: 'mobile' | 'desktop') => {
  if (type === 'mobile') {
    return items.map((item, index) =>
    ({
      id: `item-${index + 1}`,
      renderItem: (
        <Product productData={item} className={styles.mobileProduct} />
      )
    }));
  } else {
    return items.map((item, index) =>
    ({
      id: `item-${index + 1}`,
      renderItem: (
        <Product productData={item} />
      )
    }));
  }
}

export default function ProductCarousel({ products }: IProductCarousel) {
  const {
    getProductCategories,
    selectedCategory,
    selectCategory,
    filteredProducts
  } = useProductCarousel(products);

  if (products.length < 1) return null;

  return (
    <>
      <FilterBar
        selectedCategoryLabel={selectedCategory && selectedCategory?.label}
        categories={getProductCategories(products)}
        onClick={selectCategory}
      />
      <Carousels
        mobileItems={mapCarouselItems(filteredProducts.length > 0 ? filteredProducts : products, 'mobile')}
        desktopItems={mapCarouselItems(filteredProducts.length > 0 ? filteredProducts : products, 'desktop')}
      />
    </>
  )
}

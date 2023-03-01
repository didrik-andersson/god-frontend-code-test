import React from 'react';
import { Flex } from 'vcc-ui';
import { IProductData } from '../../../interfaces/product';
import ProductInfo from './product-info';
import ProductLinks from './product-links';
import ProductMedia from './product-media';
import styles from './styles.module.css';

interface IProduct {
  productData: IProductData,
  className?: string
}

export default function Product({ productData, className }: IProduct) {
  return (
    <Flex className={`${className ?? ''} ${styles.productWrapper}`}>
      <ProductInfo
        productName={productData?.modelName}
        productCategory={productData?.bodyType}
        productType={productData?.modelType}
      />
      <ProductMedia
        productImage={productData?.imageUrl}
        productName={productData?.modelName}
      />
      <ProductLinks productId={productData?.id}/>
    </Flex>
  )
}

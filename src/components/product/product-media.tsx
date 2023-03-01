import React from 'react';
import styles from "./styles.module.css";
import Image from 'next/image';

interface IProductMedia {
  productImage: any
  productName: string
}

export default function ProductMedia({ productImage, productName }: IProductMedia) {

  const altText = `A Volvo ${productName} still standing on the floor in a studio`;

  return (
    <div className={styles.productMediaWrapper}>
      <Image
        src={productImage}
        alt={altText}
        width={800}
        height={600}
      />
    </div>
  )
}

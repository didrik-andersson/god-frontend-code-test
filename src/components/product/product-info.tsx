import React from 'react';
import { Text } from 'vcc-ui';
import styles from "./styles.module.css";

interface IProductInfo {
  productCategory: string
  productName: string
  productType: string
}

export default function ProductInfo({ productCategory, productName, productType }: IProductInfo) {
  return (
    <>
      <Text extend={{ color: "#0000008f" }} subStyle="emphasis">{productCategory}</Text>
      <div className={styles.productName}>
        <Text
          variant="amundsen"
          subStyle="emphasis"
          extend={{ marginRight: "4px" }}
        >
          {productName}
        </Text>
        <Text extend={{ color: "#0000008f" }}>
          {productType}
        </Text>
      </div>
    </>
  )
}

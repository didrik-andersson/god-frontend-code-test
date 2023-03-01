import React, { useEffect, useState } from 'react'
import { Spacer } from 'vcc-ui';
import { IProductData } from '../interfaces/product';
import ProductCarousel from '../src/components/product-carousel'


export default function Home() {
  const [products, setProducts] = useState<IProductData[]>([]);
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/cars.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <ProductCarousel products={products} />
    </>
  )
}

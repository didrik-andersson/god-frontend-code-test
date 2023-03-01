import React from 'react'
import { Flex, Link } from 'vcc-ui'

interface IProductLinks {
  productId: string
}

export default function ProductLinks({ productId }: IProductLinks) {
  return (
    <Flex extend={{ flexDirection: "row", gap: "24px", justifyContent: "center" }}>
      <Link href={`/learn/${productId}`} arrow="right">
        Learn
      </Link>
      <Link href={`/shop/${productId}`} arrow="right">
        Shop
      </Link>
    </Flex>
  )
}

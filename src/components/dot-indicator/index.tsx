import React from 'react'

interface IDotIndicator {
  totalAmount: number
  activeIndex: number
}

export default function DotIndicator({ totalAmount, activeIndex }: IDotIndicator) {
  const iterator = Array.from(Array(10).keys());

  return (
    <div style={{ display: "flex", gap: "8px", justifyContent: "center", margin: "8px 0px"}}>
      {iterator.map((i) => (
        <div key={i} style={{ borderRadius: "50%", background: "#ebebeb", width: "8px", height: "8px"}}></div>
      ))}
    </div>
  )
}

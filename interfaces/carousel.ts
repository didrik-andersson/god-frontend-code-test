import { ReactNode } from "react"

export interface ICarouselItem {
  id: string,
  renderItem: ReactNode
}

export interface ICarousel {
  carouselItems: ICarouselItem[]
  itemsPerSlide?: number
  className?: string
}
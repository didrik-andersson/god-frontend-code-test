import { useCallback, useState } from "react";
import { IProductData } from "../../../interfaces/product";
import { IFilterCategory } from "../filter-bar";

const initialCategory = { label: 'Alla', value: [], count: 0 };

export default function useProductCarousel(products: IProductData[]) {
  const [selectedCategory, setSelectedCategory] = useState<IFilterCategory>(() => initialCategory);
  const [filteredProducts, setFilteredProducts] = useState<IProductData[]>([]);

  const getFilteredProducts = (category: IFilterCategory) => products.filter((product) => category.value.includes(product.bodyType));

  const selectCategory = useCallback((category: IFilterCategory) => {
    setSelectedCategory(category);
    setFilteredProducts(getFilteredProducts(category));
  }, [products, getFilteredProducts]);

  // TODO: Also needs to implement a entry for all categories combined and make
  // this the default selectedCategory.
  const getProductCategories = (products: IProductData[]) => products.reduce((result, car) => {
    const { bodyType } = car;

    const existingGroup = result.find(group => group.label === bodyType);
    if (existingGroup) {
      existingGroup.count++;
    } else {
      result.push({
        label: bodyType,
        value: [bodyType],
        count: 1,
      });
    }

    const totalObject = result.find(group => group.label === 'Alla');
    if (totalObject) {
      totalObject.count++
      totalObject.value.push(bodyType)
    }

      return result;
  }, [{ label: 'Alla', value: [], count: 0 }] as IFilterCategory[]);

  return {
    getProductCategories,
    selectedCategory,
    selectCategory,
    filteredProducts
  }
}
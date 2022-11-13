import { atom } from "recoil"

export const productsState = atom({
    key: "ProductsList",
    default: []
})

export const productState = atom({
    key: "Product",
    default: []
})

export const catalogState = atom({
    key: "CatalogList",
    default: []
})


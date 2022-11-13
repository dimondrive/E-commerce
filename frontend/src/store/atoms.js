import { atom } from "recoil"

export const productsState = atom({
    key: "ProductsList",
    default: []
})

export const productState = atom({
    key: "Product",
    default: []
})

export const CatalogState = atom({
    key: "CatalogList",
    default: []
})


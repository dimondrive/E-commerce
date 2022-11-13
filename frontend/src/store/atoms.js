import { atom } from "recoil"

export const productsState = atom({
    key: "Products",
    default: []
})

export const productState = atom({
    key: "Product",
    default: []
})

export const CatalogState = atom({
    key: "Catalog",
    default: []
})
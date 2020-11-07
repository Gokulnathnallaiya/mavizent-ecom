import { ProductActionTypes } from "./product.types";


export const setHomePageProducts = homepageProducts =>({

    type:ProductActionTypes.SET_HOMEPAGE_PRODUCTS,
    payload:homepageProducts
})

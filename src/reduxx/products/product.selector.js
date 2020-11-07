import { createSelector} from 'reselect';

const selectProducts = state => state.products;

export const selectHomepageProducts=createSelector(
    [selectProducts],
    products=>products.homepageProducts
)
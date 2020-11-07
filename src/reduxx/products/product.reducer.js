import { ProductActionTypes} from "./product.types";

const INITIAL_STATE = {
    homepageProducts:[]
}

const productReducer = (state= INITIAL_STATE,action)=>{

    switch(action.type){

        case ProductActionTypes.SET_HOMEPAGE_PRODUCTS:
            return{
                ...state,
                homepageProducts:action.payload
            }
        default:
            return state;
    }
};

export default productReducer;
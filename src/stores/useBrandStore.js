import create from 'zustand'
import { getPopularBrands } from '../services/brand-service';
import {
  getCategories
} from '../services/categoryService'
import delay from '../util/delay';
import Notify from '../util/Notify';
import reportError from '../util/reportError';


/**
 * @typedef {Object} InitialStateType
 * @prop {Brand[]} popularBrands
 * @prop {boolean} popularBrandsLoading
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} fetchPopularBrands
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  popularBrands: [],
  popularBrandsLoading: false
}

/**
 * @type {import('zustand').UseStore<InitialStateType & MethodsType>}
 */
const useBrandStore = create(
  (set, get) => ({
    ...initialState,

    fetchPopularBrands: async () => {
      //Only set loading to false when there are no categories available
      if(!get().popularBrands.length){
        set((state)=> ({...state, popularBrandsLoading: true}))
      }
      try{
        const {brands} = await getPopularBrands();
       
        set((state)=> ({...state, popularBrands: brands}))
      }
      catch(e){
        Notify.error(e.message)
      }
      finally{
        set((state)=> ({...state, popularBrandsLoading: false}))
      }
    },
  }))


export default useBrandStore;
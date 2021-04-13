import create from 'zustand'
import {
  getProducts,
  getDealOfTheDay
} from '../services/product-service';
import {
  getCategories
} from '../services/categoryService'
import delay from '../util/delay';
import Notify from '../util/Notify';
import reportError from '../util/reportError';


/**
 * @typedef {Object} InitialStateType
 * @prop {Product[]} products
 * @prop {boolean} productsLoading
 * @prop {Product[]} dealsOfTheDay
 * @prop {boolean} dealsOfTheDayLoading 
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} fetchProducts
 * @prop {()=>void} fetchDealOfTheDay
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  products: [],
  productsLoading: false,
  dealsOfTheDay: [],
  dealsOfTheDayLoading: true,
}

/**
 * @type {UseStore<InitialStateType & MethodsType>}
 */
const useProductStore = create(
  (set, get) => ({
    ...initialState,

    fetchProducts: async () => {
      set((state) => ({
        ...state,
        productsLoading: true
      }))
      
      try {
        const {
          products
        } = await getProducts();

        set((state) => ({
          ...state,
          products
        }))
      } catch (e) {
        Notify.error(e.message)
      } finally {
        set((state) => ({
          ...state,
          productsLoading: false
        }))
      }
    },
    fetchDealOfTheDay: async () => {
      set((state) => ({
        ...state,
        dealsOfTheDayLoading: true
      }));
      
      try {
        const dealsOfTheDay = await getDealOfTheDay();
        set((state) => ({
          ...state,
          dealsOfTheDay
        }))
      } catch (e) {
        Notify.error(e.message)
      } finally {
        set((state) => ({
          ...state,
          dealsOfTheDayLoading: false
        })); 
      }
    },
  }))

export default useProductStore;
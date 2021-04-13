import create from 'zustand'
import {
  getProducts,
  getDealOfTheDay,
  getTrendingProducts
} from '../services/product-service';

import delay from '../util/delay';
import Notify from '../util/Notify';
import reportError from '../util/reportError';


/**
 * @typedef {Object} InitialStateType
 * @prop {Product[]} products
 * @prop {boolean} productsLoading
 * @prop {Product[]} dealsOfTheDay
 * @prop {boolean} dealsOfTheDayLoading 
 * @prop {Product[]} trendingProducts
 * @prop {boolean} trendingProductsLoading 
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} fetchProducts
 * @prop {()=>void} fetchDealOfTheDay
 * @prop {()=>void} fecthTrendingProducts
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  products: [],
  productsLoading: false,

  trendingProducts: [],
  trendingProductsLoading: false,

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

    fecthTrendingProducts: async () => {
      set((state) => ({
        ...state,
        trendingProductsLoading: true
      }));
      
      try {
        const dealsOfTheDay = await getTrendingProducts();
        set((state) => ({
          ...state,
          dealsOfTheDay
        }))
      } catch (e) {
        Notify.error(e.message)
      } finally {
        set((state) => ({
          ...state,
          trendingProductsLoading: false
        })); 
      }
    },
  }))

export default useProductStore;
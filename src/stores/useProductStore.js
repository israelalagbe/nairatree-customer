import create from 'zustand'
import {
  getProducts
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
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} fetchProducts
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  products: [],
  productsLoading: false
}

/**
 * @type {import('zustand').UseStore<InitialStateType & MethodsType>}
 */
const useProductStore = create(
  (set, get) => ({
    ...initialState,

    fetchProducts: async () => {
      //Only set loading to false when there are no categories available
      if (!get().products.length) {
        set((state) => ({
          ...state,
          productsLoading: true
        }))
      }
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
  }))


export default useProductStore;
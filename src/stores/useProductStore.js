import create from "zustand";
import {
  getProducts,
  getDealOfTheDay,
  getTrendingProducts,
  getProduct,
  getRecentlyViewed,
  updateRecentlyViewed,
} from "../services/product-service";

import delay from "../util/delay";
import Notify from "../util/Notify";
import reportError from "../util/reportError";

/**
 * @typedef {Object} InitialStateType
 * @prop {Product[]} products
 * @prop {boolean} productsLoading
 * @prop {number} totalProducts
 * @prop {Product[]} dealsOfTheDay
 * @prop {boolean} dealsOfTheDayLoading
 * @prop {Product[]} trendingProducts
 * @prop {boolean} trendingProductsLoading
 * @prop {Product} selectedProduct
 * @prop {boolean} selectedProductLoading
 * @prop {Product[]} recentlyViewed
 * @prop {boolean} recentlyViewedLoading
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} fetchProducts
 * @prop {()=>void} fetchDealOfTheDay
 * @prop {()=>void} fetchTrendingProducts
 * @prop {(id:string)=>void} fetchSelectedProduct
 * @prop {()=>void} fetchRecentlyViewed
 * @prop {(id:string)=>void} updateRecentView;
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  products: [],
  productsLoading: false,
  totalProducts: 0,

  trendingProducts: [],
  trendingProductsLoading: false,

  dealsOfTheDay: [],
  dealsOfTheDayLoading: true,

  selectedProduct: null,
  selectedProductLoading: false,

  recentlyViewed: [],
  recentlyViewedLoading: false,
};

/**
 * @type {UseStore<InitialStateType & MethodsType>}
 */
const useProductStore = create((set, get) => ({
  ...initialState,

  fetchProducts: async () => {
    set((state) => ({
      ...state,
      productsLoading: true,
    }));

    try {
      const { products, total_records } = await getProducts();

      set((state) => ({
        ...state,
        products,
        totalProducts: total_records,
      }));
    } catch (e) {
      Notify.error(e.message);
    } finally {
      set((state) => ({
        ...state,
        productsLoading: false,
      }));
    }
  },

  fetchDealOfTheDay: async () => {
    set((state) => ({
      ...state,
      dealsOfTheDayLoading: true,
    }));

    try {
      const dealsOfTheDay = await getDealOfTheDay();
      set((state) => ({
        ...state,
        dealsOfTheDay,
      }));
    } catch (e) {
      Notify.error(e.message);
    } finally {
      set((state) => ({
        ...state,
        dealsOfTheDayLoading: false,
      }));
    }
  },

  fetchTrendingProducts: async () => {
    set((state) => ({
      ...state,
      trendingProductsLoading: true,
    }));

    try {
      const dealsOfTheDay = await getTrendingProducts();
      set((state) => ({
        ...state,
        dealsOfTheDay,
      }));
    } catch (e) {
      Notify.error(e.message);
    } finally {
      set((state) => ({
        ...state,
        trendingProductsLoading: false,
      }));
    }
  },

  fetchRecentlyViewed: async () => {
    set((state) => ({
      ...state,
      recentlyViewedLoading: true,
    }));

    try {
      const { products } = await getRecentlyViewed();

      set((state) => ({
        ...state,
        recentlyViewed: products,
      }));
    } catch (e) {
      Notify.error(e.message);
    } finally {
      set((state) => ({
        ...state,
        recentlyViewedLoading: false,
      }));
    }
  },

  updateRecentView: async (id) => {
    try {
      const { products } = await updateRecentlyViewed(id);
    } catch (e) {
    } finally {
    }
  },
  fetchSelectedProduct: async (id) => {
    set((state) => ({
      ...state,
      selectedProductLoading: true,
    }));

    try {
      const { product, related_items } = await getProduct(id);
      product.related_items = related_items;

      set((state) => ({
        ...state,
        selectedProduct: product,
      }));
    } catch (e) {
      Notify.error(e.message);
    } finally {
      set((state) => ({
        ...state,
        selectedProductLoading: false,
      }));
    }
  },
}));

export default useProductStore;

import create from "zustand";
import {
  devtools,
  persist
} from "zustand/middleware";
import {
  getProducts,
  getDealOfTheDay,
  getTrendingProducts,
  getProduct,
  getRecentlyViewed,
  updateRecentlyViewed,
  searchProducts,
} from "../services/product-service";
import Notify from "../util/Notify";

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
 * @prop {(query?:SearchQuery)=>void} fetchProducts
 * @prop {(query?:SearchQuery)=>void} searchProducts
 * @prop {()=>void} fetchDealOfTheDay
 * @prop {()=>void} fetchTrendingProducts
 * @prop {(id:string)=>void} fetchSelectedProduct
 * @prop {()=>void} fetchRecentlyViewed
 * @prop {(id:string)=>void} updateRecentView;
 * @prop {(product:Product)=>void} addLocalRecentlyViewed
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
const useProductStore = create(persist((set, get) => ({
  ...initialState,

  fetchProducts: async (query) => {
    set((state) => ({
      ...state,
      productsLoading: true,
    }));

    try {
      const {
        products,
        total_records
      } = await getProducts({
        ...query
      });

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

  searchProducts: async (query) => {
    set((state) => ({
      ...state,
      productsLoading: true,
    }));

    try {
      const {
        products,
        total_records
      } = await searchProducts({
        ...query
      });

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
      const {
        products
      } = await getRecentlyViewed();

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
      await updateRecentlyViewed(id);
    } catch (e) {}
  },
  addLocalRecentlyViewed: (product) => {

    let recentlyViewed = get().recentlyViewed.filter((item) => (item.id !== product.id));

    recentlyViewed = [product, ...recentlyViewed];

    //Don't save more than 10 local recently viewed items
    recentlyViewed = recentlyViewed.slice(0, 10);


    set((state) => ({
      ...state,
      recentlyViewed,
    }));
  },
  fetchSelectedProduct: async (id) => {
    set((state) => ({
      ...state,
      selectedProductLoading: true,
    }));

    try {
      const {
        product,
        related_items
      } = await getProduct(id);
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
}), {
  name: 'products',
  whitelist: ['recentlyViewed']
}));

export default useProductStore;
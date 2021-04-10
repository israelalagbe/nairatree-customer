import create from 'zustand'
import {
  getCategories
} from '../services/categoryService'
import delay from '../util/delay';
import Notify from '../util/Notify';
import reportError from '../util/reportError';


/**
 * @typedef {Object} InitialStateType
 * @prop {Category[]} categories
 * @prop {boolean} categoriesLoading
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} fetchCategories
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  categories: [],
  categoriesLoading: false
}

/**
 * @type {import('zustand').UseStore<InitialStateType & MethodsType>}
 */
const useCategoryStore = create(
  (set, get) => ({
    ...initialState,

    fetchCategories: async () => {
      //Only set loading to false when there are no categories available
      if(!get().categories.length){
        set((state)=> ({...state, categoriesLoading: true}))
      }
      try{
        const categories = await getCategories();
        set((state)=> ({...state, categories: categories}))
      }
      catch(e){
        Notify.error(e.message)
      }
      finally{
        set((state)=> ({...state, categoriesLoading: false}))
      }
    },
  }))


export default useCategoryStore;
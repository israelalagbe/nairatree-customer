import create from 'zustand'
import { getCarts, saveCart } from '../services/cart-service';
import Notify from '../util/Notify';



/**
 * @typedef {Object} InitialStateType
 * @prop {Cart[]} carts
 * @prop {boolean} cartsLoading
 * @prop {boolean} saveCartsLoading
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} fetchCarts
 * @prop {(payload:any)=>void} saveCarts
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  carts: [],
  cartsLoading: false,
  saveCartsLoading: false
}

/**
 * @type {UseStore<InitialStateType & MethodsType>}
 */
const useCartStore = create(
  (set, get) => ({
    ...initialState,

    fetchCarts: async () => {
      set((state)=> ({...state, cartsLoading: true}))

      try{
        const carts = await getCarts();
       
        set((state)=> ({...state, carts}))
      }
      catch(e){
        Notify.error(e.message)
      }
      finally{

        set((state)=> ({...state, cartsLoading: false}))

      }
    },
    saveCarts: async (cartsPayload) => {
        set((state)=> ({...state, saveCartsLoading: true}))
  
        try{
          const carts = await saveCart(cartsPayload);
          console.log("cart result", carts)
          //   set((state)=> ({...state, carts: brands}))
        }
        catch(e){
          Notify.error(e.message)
        }
        finally{
  
          set((state)=> ({...state, saveCartsLoading: false}))
  
        }
      },
  }))
  

export default useCartStore;
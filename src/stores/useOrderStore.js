import create from 'zustand'
import { persist } from 'zustand/middleware';
import { getCarts, saveCart } from '../services/cart-service';
import { saveCheckoutUser, updateOrderPaymentStatus } from '../services/order-service';
import Notify from '../util/Notify';



/**
 * @typedef {Object} InitialStateType
 * @prop {Cart[]} carts
 * @prop {boolean} cartsLoading
 * @prop {boolean} saveCheckoutLoading
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} fetchCarts
 * @prop {(payload:any, onSuccess)=>void} saveCheckout
 * @prop {(payload:any)=>void} updateOrderPaymentStatus
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  carts: [],
  cartsLoading: false,
  saveCheckoutLoading: false,
}

/**
 * @type {UseStore<InitialStateType & MethodsType>}
 */
const useOrderStore = create(persist(
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
    saveCheckout: async (cartsPayload, onSuccess) => {
        set((state)=> ({...state, saveCheckoutLoading: true}))
  
        try{
            
          const paymentInfo = await saveCheckoutUser(cartsPayload);
          onSuccess(paymentInfo);
        }
        catch(e){
         
          Notify.error(e.message)
        }
        finally{
  
          set((state)=> ({...state, saveCheckoutLoading: false}))
  
        }
      },
      updateOrderPaymentStatus: async (payload) => {  
        try{
            
          const paymentInfo = await updateOrderPaymentStatus(payload);

          Notify.success("Your payment was successfully!");
        }
        catch(e){
          Notify.error(e.message)
        }
      },
  }), {
      name: 'order',
      whitelist: []
  }))
  

export default useOrderStore;
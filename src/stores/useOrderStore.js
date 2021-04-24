import create from "zustand";
import { persist } from "zustand/middleware";
import {
  saveCheckoutUser,
  updateOrderPaymentStatus,
  getOrders,
} from "../services/order-service";
import Notify from "../util/Notify";

/**
 * @typedef {Object} InitialStateType
 * @prop {Cart[]} carts
 * @prop {boolean} cartsLoading
 * @prop {boolean} saveCheckoutLoading
 * @prop {Order[]} orders
 * @prop {boolean} ordersLoading
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} fetchOrders
 * @prop {(payload:any, onSuccess)=>void} saveCheckout
 * @prop {(payload:any)=>void} updateOrderPaymentStatus
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  carts: [],
  orders: [],
  ordersLoading: false,
  cartsLoading: false,
  saveCheckoutLoading: false,
};

/**
 * @type {UseStore<InitialStateType & MethodsType>}
 */
const useOrderStore = create(
  persist(
    (set, get) => ({
      ...initialState,

      fetchOrders: async () => {
        set((state) => ({ ...state, ordersLoading: true }));

        try {
          const { orders } = await getOrders();

          set((state) => ({ ...state, orders }));
        } catch (e) {
          Notify.error(e.message);
        } finally {
          set((state) => ({ ...state, ordersLoading: false }));
        }
      },
      saveCheckout: async (cartsPayload, onSuccess) => {
        set((state) => ({ ...state, saveCheckoutLoading: true }));

        try {
          const paymentInfo = await saveCheckoutUser(cartsPayload);
          onSuccess(paymentInfo);
        } catch (e) {
          Notify.error(e.message);
        } finally {
          set((state) => ({ ...state, saveCheckoutLoading: false }));
        }
      },
      updateOrderPaymentStatus: async (payload) => {
        try {
          const paymentInfo = await updateOrderPaymentStatus(payload);

          Notify.success("Your payment was successfully!");
        } catch (e) {
          Notify.error(e.message);
        }
      },
    }),
    {
      name: "order",
      whitelist: [],
    }
  )
);

export default useOrderStore;

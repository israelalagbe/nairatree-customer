import create from "zustand";
import { persist } from "zustand/middleware";
import {
  saveCheckoutUser,
  updateOrderPaymentStatus,
  getOrders,
  saveCheckoutGuest,
  userReviews,
} from "../services/order-service";
import Notify from "../util/Notify";

/**
 * @typedef {Object} InitialStateType
 * @prop {Cart[]} carts
 * @prop {boolean} cartsLoading
 * @prop {boolean} saveCheckoutLoading
 * @prop {Order[]} orders
 * @prop {boolean} ordersLoading
 * @prop {boolean} reviewsLoading
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} fetchOrders
 * @prop {(payload:any, onSuccess)=>void} saveCheckout
 * @prop {(payload:any, onSuccess)=>void} saveCheckoutGuest
 * @prop {(payload:any, callback)=>void} updateOrderPaymentStatus
 * @prop {(payload:any, callback)=>void} updateOrderPaymentStatus
 * @prop {(payload:any, callback)=>void} userReviews
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
  reviewsLoading: false,
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
      saveCheckoutGuest: async (cartsPayload, onSuccess) => {
        set((state) => ({ ...state, saveCheckoutLoading: true }));

        try {
          const paymentInfo = await saveCheckoutGuest(cartsPayload);
          onSuccess(paymentInfo);
        } catch (e) {
          Notify.error(e.message);
        } finally {
          set((state) => ({ ...state, saveCheckoutLoading: false }));
        }
      },
      userReviews: async (payload, callback) => {
        set((state) => ({ ...state, reviewsLoading: true }));

        try {
          const orders = await userReviews(payload);
          set((state) => ({
            ...state,
            userReviews: orders,
          }));
        } catch (e) {
          Notify.error(e.message);
        } finally {
          set((state) => ({ ...state, reviewsLoading: false }));
        }
      },
      updateOrderPaymentStatus: async (payload, callback) => {
        try {
          await updateOrderPaymentStatus(payload);

          Notify.success(
            "Your payment was successful! Please check your mail for delivery timelines"
          );
          callback();
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

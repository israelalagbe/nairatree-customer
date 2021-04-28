import create from "zustand";
import { persist } from "zustand/middleware";
import {
  saveCheckoutUser,
  updateOrderPaymentStatus,
  getOrders,
  saveCheckoutGuest,
  userReviews,
  getOrderByRef,
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
 * @prop {Order} selectedOrder
 * @prop {boolean} selectedOrderLoading
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} fetchOrders
 * @prop {(ref: string, callback)=>void} fetchOrderByRef
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
  selectedOrder: null,
  selectedOrderLoading: false
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
      fetchOrderByRef: async (ref, cb) => {
        set((state) => ({ ...state, selectedOrderLoading: true }));

        try {
          const order = await getOrderByRef(ref);
          set((state) => ({ ...state, selectedOrder: order }));
          cb?.()
        } catch (e) {
          Notify.error(e.message);
        } finally {
          set((state) => ({ ...state, selectedOrderLoading: false }));
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
          const response = await updateOrderPaymentStatus(payload);

          Notify.success(
            "Your payment was successful! Please check your mail for delivery timelines"
          );
          callback(response);
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

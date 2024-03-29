import create from "zustand";
import {
  register,
  login,
  forgotPassword,
  verifyOtp,
  resetPassword,
  updateProfile,
  updatePassword,
  registerSubscriber,
} from "../services/authentication";

import { persist } from "zustand/middleware";

import Notify from "../util/Notify";
import api from "../util/api";

/**
 * @typedef {Object} InitialStateType
 * @prop {boolean} registerLoading
 * @prop {boolean} loginLoading
 * @prop {boolean} forgotPasswordLoading
 * @prop {boolean} verifyOtpLoading
 * @prop {boolean} resetPasswordLoading
 * @prop {boolean} updateUserLoading
 * @prop {boolean} updateUserPasswordLoading
 * @prop {boolean} postSubscriberLoading
 * @prop {User} user
 * @prop {string} accessToken
 */

/**
 * @typedef {Object} MethodsType
 * @prop {(payload, callback)=>void} register
 * @prop {(payload, callback)=>void} login
 * @prop {(payload, callback)=>void} forgotPassword
 * @prop {(payload, callback)=>void} verifyOtp
 * @prop {(payload, callback)=>void} resetPassword
 * @prop {(payload, callback)=>void} updateUser
 * @prop {(payload, callback)=>void} updateUserPassword
 * @prop {(payload, callback)=>void} postSubscriber
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  accessToken: null,
  user: null,
  loginLoading: false,
  registerLoading: false,
  forgotPasswordLoading: false,
  resetPasswordLoading: false,
  verifyOtpLoading: false,
  updateUserLoading: false,
  updateUserPasswordLoading: false,
  postSubscriberLoading: false,
};

/**
 * @type {UseStore<InitialStateType & MethodsType>}
 */
const useAuthentication = create(
  persist(
    (set, get) => ({
      ...initialState,

      register: async (payload, callback) => {
        set((state) => ({
          ...state,
          registerLoading: true,
        }));

        try {
          await register(payload);

          Notify.success("Customer successfully added");
          callback();
        } catch (e) {
          Notify.error(e.message);
        } finally {
          set((state) => ({
            ...state,
            registerLoading: false,
          }));
        }
      },
      login: async (payload, callback) => {
        set((state) => ({
          ...state,
          loginLoading: true,
        }));
        try {
          const { user, token } = await login(payload);

          set((state) => ({
            ...state,
            user,
            accessToken: token,
          }));

          Notify.success("Customer successfully logged in");

          callback();
        } catch (e) {
          Notify.error(e.message);
        } finally {
          set((state) => ({
            ...state,
            loginLoading: false,
          }));
        }
      },
      forgotPassword: async (payload, callback) => {
        set((state) => ({
          ...state,
          forgotPasswordLoading: true,
        }));

        try {
          await forgotPassword(payload);

          Notify.success("An otp has been sent to your mail");
          callback();
        } catch (e) {
          Notify.error(e.message);
        } finally {
          set((state) => ({
            ...state,
            forgotPasswordLoading: false,
          }));
        }
      },
      verifyOtp: async (payload, callback) => {
        set((state) => ({
          ...state,
          verifyOtpLoading: true,
        }));

        try {
          const result = await verifyOtp(payload);
          Notify.success("Otp verification is successful");
          callback(result.id);
        } catch (e) {
          Notify.error(e.message);
        } finally {
          set((state) => ({
            ...state,
            verifyOtpLoading: false,
          }));
        }
      },
      resetPassword: async (payload, callback) => {
        set((state) => ({
          ...state,
          resetPasswordLoading: true,
        }));

        try {
          await resetPassword(payload);
          Notify.success("Password Reset Successful");
          callback();
        } catch (e) {
          Notify.error(e.message);
        } finally {
          set((state) => ({
            ...state,
            resetPasswordLoading: false,
          }));
        }
      },
      updateUser: async (payload, callback) => {
        set((state) => ({
          ...state,
          updateUserLoading: true,
        }));

        try {
          const addresses = payload.address_book;
          if (
            addresses &&
            addresses.length &&
            !addresses.find((address) => address.is_default)
          ) {
            payload.address_book[0].is_default = true;
          }

          const data = await updateProfile(payload);
          const user = data;
          set((state) => ({
            ...state,
            user,
          }));

          callback();
        } catch (e) {
          Notify.error(e.message);
        } finally {
          set((state) => ({
            ...state,
            updateUserLoading: false,
          }));
        }
      },
      updateUserPassword: async (payload, callback) => {
        set((state) => ({
          ...state,
          updateUserPasswordLoading: true,
        }));

        try {
          const data = await updatePassword(payload);
          const user = data;
          set((state) => ({
            ...state,
            user,
          }));

          Notify.success("Password Updated");
          callback();
        } catch (e) {
          Notify.error(e.message);
        } finally {
          set((state) => ({
            ...state,
            updateUserPasswordLoading: false,
          }));
        }
      },
      postSubscriber: async (payload, callback) => {
        set((state) => ({
          ...state,
          postSubscriberLoading: true,
        }));
        try {
          await registerSubscriber(payload);
          Notify.success("Email Added To Newsletter Subscribers");
          callback();
        } catch (e) {
          Notify.error(e.message);
        } finally {
          set((state) => ({
            ...state,
            postSubscriberLoading: false,
          }));
        }
      },
    }),
    {
      name: "auth",
      whitelist: ["user", "accessToken"],
      getStorage: () => localStorage,
    }
  )
);

useAuthentication.subscribe((state) => {
  api.defaults.headers.common.Authorization = `Bearer ${state.accessToken}`;
});

export default useAuthentication;

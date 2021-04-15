import create from "zustand";
import {
  register,
  login,
  forgotPassword,
  verifyOtp,
  resetPassword,
} from "../services/authentication";

import {
  persist
} from "zustand/middleware"

import Notify from "../util/Notify";





/**
 * @typedef {Object} InitialStateType
 * @prop {boolean} registerLoading
 * @prop {boolean} loginLoading
 * @prop {boolean} forgotPasswordLoading
 * @prop {boolean} verifyOtpLoading
 * @prop {boolean} resetPasswordLoading
 * @prop {User} user
 * @prop {string} accessToken
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} register
 * @prop {(payload, callback)=>void} login
 * @prop {(payload, callback)=>void} forgotPassword
 * @prop {(payload, callback)=>void} verifyOtp
 * @prop {(payload, callback)=>void} resetPassword
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
};

/**
 * @type {import('zustand').UseStore<InitialStateType & MethodsType>}
 */
const useAuthentication = create(persist((set, get) => ({
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
      const {
        user,
        token
      } = await login(payload);

      set((state) => ({
        ...state,
        user,
        accessToken: token
      }));
      
      Notify.success("Login Successful!");

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
}), {

  name: "auth",
  whitelist: ['user', 'accessToken'],
  getStorage: ()=> localStorage,
}));
export default useAuthentication;
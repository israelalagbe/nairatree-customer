import create from "zustand";
import {
  register,
  login,
  forgotPassword,
  verifyOtp,
  resetPassword,
} from "../services/authentication";
import Notify from "../util/Notify";

/**
 * @return {*}
 */

/**
 * @typedef {Object} InitialStateType
 * @prop {boolean} registerLoading
 * @prop {Login} login
 * @prop {boolean} loginLoading
 * @prop {boolean} forgotPasswordLoading
 * @prop {boolean} verifyOtpLoading
 * @prop {ResetPassword} resetPassword
 * @prop {boolean} resetPasswordLoading
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} register
 * @prop {()=>void} login
 * @prop {()=>void} forgotPassword
 * @prop {()=>void} verifyOtp
 * @prop {()=>void} resetPassword
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  user: {},
  loginLoading: false,
  registerLoading: false,
  forgotPasswordLoading: false,
  resetPasswordLoading: false,
};

/**
 * @type {import('zustand').UseStore<InitialStateType & MethodsType>}
 */
const useAuthentication = create((set, get) => ({
  ...initialState,

  register: async (payload, callback) => {
    //Only set loading to false when there are no categories available

    try {
      const { registeration } = await register(payload);
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
    //Only set loading to false when there are no categories available

    try {
      const { loginUser } = await login(payload);
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
    //Only set loading to false when there are no categories available

    try {
      const { userForgot } = await forgotPassword(payload);
      Notify.success("Check Email For Otp");
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
    //Only set loading to false when there are no categories available

    try {
      const result = await verifyOtp(payload);
      Notify.success("Otp verification is successful");
      console.log(result.data.id);
      console.log(result.id);
      callback(result.data.id);
    } catch (e) {
      Notify.error(e.message);
    } finally {
      set((state) => ({
        ...state,
        verifyOtpLoading: false,
      }));
    }
  },
  resetPassword: async (payload, callback, data) => {
    //Only set loading to false when there are no categories available

    try {
      const { userReset } = await resetPassword(payload);
      Notify.success("Password Reset Successful");
      callback(data);
    } catch (e) {
      Notify.error(e.message);
    } finally {
      set((state) => ({
        ...state,
        resetPasswordLoading: false,
      }));
    }
  },
}));

export default useAuthentication;

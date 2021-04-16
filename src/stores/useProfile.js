import create from "zustand";

import { persist } from "zustand/middleware";

import Notify from "../util/Notify";
import { updateProfile } from "../services/profile";

/**
 * @typedef {Object} InitialStateType
 * @prop {boolean} updateUserLoading
 * @prop {User} user
 * @prop {string} accessToken
 */

/**
 * @typedef {Object} MethodsType
 * @prop {(payload, callback)=>void} updateUser
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  accessToken: null,
  user: null,
  updateUserLoading: false,
};

/**
 * @type {import('zustand').UseStore<InitialStateType & MethodsType>}
 */

const useProfile = create((set, get) => ({
  ...initialState,

  updateUser: async (payload, callback) => {
    set((state) => ({
      ...state,
      updateUserLoading: true,
    }));

    try {
      const { user, token } = await updateProfile(payload);
      set((state) => ({
        ...state,
        user,
        accessToken: token,
      }));

      Notify.success("Profile Updated");
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
  name: "auth",
  whitelist: ["user", "accessToken"],
  getStorage: () => localStorage,
}));

export default useProfile;

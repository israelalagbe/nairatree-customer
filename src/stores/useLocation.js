import create from "zustand";
import Notify from "../util/Notify";
import { getStates } from "../services/location";

/**
 * @typedef {Object} InitialStateType
 * @prop {State[]} states
 * @prop {boolean} statesLoading
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} fetchStates
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  states: [],
  statesLoading: false,
};

/**
 * @type {UseStore<InitialStateType & MethodsType>}
 */
const useLocationStore = create((set, get) => ({
  ...initialState,

  fetchStates: async () => {
    try {
      const states = await getStates();
      set((state) => ({ ...state, states: states }));
    } catch (e) {
      Notify.error(e.message);
    } finally {
      set((state) => ({ ...state, statesLoading: false }));
    }
  },
}));

export default useLocationStore;

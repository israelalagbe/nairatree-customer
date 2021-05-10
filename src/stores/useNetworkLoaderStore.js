import create from "zustand";

/**
 * @typedef {Object} InitialStateType
 * @prop {number} loadingCount
 */

/**
 * @typedef {Object} MethodsType
 * @prop {()=>void} increaseLoadingCount
 * @prop {()=>void} decreaseLoadingCount
 */

/**
 * @type {InitialStateType}
 */
const initialState = {
  loadingCount: 0,
};

/**
 * @type {UseStore<InitialStateType & MethodsType>}
 */
const useNetworkLoaderStore = create((set, get) => ({
  ...initialState,
  increaseLoadingCount: () => {
    const state = get();
    set({
      loadingCount: state.loadingCount + 1,
    });
  },
  decreaseLoadingCount: () => {
    const state = get();
    set({
      loadingCount: state.loadingCount - 1,
    });
  },
}));

export default useNetworkLoaderStore;

import Axios from "axios";
import {
  showLoading,
  hideLoading
} from "react-redux-loading-bar";
import {
  CustomHttpError
} from "./Errors/CustomHttpError";
import Notify from "./Notify";
import { logout } from "../store/actions/loginAction";

function showLoadingBar() {
  import('../store/index').then((store) => {
    store.default.dispatch(showLoading());
  });
}

function hideLoadingBar() {
  import('../store/index').then((store) => {
    store.default.dispatch(hideLoading());
  });
}
const api = Axios.create({
  withCredentials: false,
});
api.interceptors.request.use(function (config) {
  showLoadingBar()
  return config;
}, function (error) {
  hideLoadingBar()
  // Do something with request error
  return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
  hideLoadingBar();
  return response.data?.data ?? response.data;
}, function (err) {
  hideLoadingBar();
  if (!err.response) {
    return Promise.reject(new CustomHttpError(
      'Error occured while sending the request, please check your internet settings', {
        statusCode: 0,
        responseText: 'Error occured while sending the request, please check your internet settings'
      }));
  }
  if (err.response.status === 401) {
    //
    import('../store').then((module) => {
      module.default.dispatch(logout());
    });
    return Promise.reject(new CustomHttpError('User session has expired!', {
      statusCode: err.response.status,
      responseText: 'User session has expired!'
    }));
  }
  // if (err.response.status === 403) {
  //   return Promise.reject(new CustomHttpError(
  //     'You do not have permission to perform this operation', {
  //       statusCode: err.response.status,
  //       responseText: 'You do not have permission to perform this operation'
  //     }));
  // }
  if (err.response.data && err.response.data.data) {
    return Promise.reject(new CustomHttpError(err.response.data.data, {
      statusCode: err.response.status,
      responseText: err.response.data.data,
      payload: err.response.data.payload,
      responseCode: err.response.data.responseCode
    }));
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(new CustomHttpError(
    'Error occured while sending the request', {
      statusCode: err.response.status,
      responseText: 'Error occured while sending the request'
    }));
});

export default api;

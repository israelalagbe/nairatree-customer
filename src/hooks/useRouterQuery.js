import React from 'react';
import {
  useHistory
} from "react-router-dom";
import getQueryParams from './getQueryParams';



export default function useRouterQuery() {
  const history = useHistory();

  /**
   * @param {Object} query
   */
  const addQuery = (query) => {
    const currentQuery = getQueryParams(history.location.search)

    history.push({
      // pathname: '/client',
      search: "?" + new URLSearchParams({
        ...currentQuery,
        ...query
      }).toString()
    });

  };

  /**
   * @param {...String} queryNames
   */
  const removeQuery = (...queryNames) => {
    const currentQuery = getQueryParams(history.location.search)
    queryNames.forEach(q => delete currentQuery[q]);
    history.push({
      // pathname: '/client',
      search: "?" + new URLSearchParams({
        ...currentQuery
      }).toString()
    });

  };
  return {
    addQuery,
    removeQuery
  }
}

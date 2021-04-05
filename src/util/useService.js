import { useState, useRef } from "react";

const cache = {};
window.cache = cache;
/**
 *
 * @param {(...args)=>Promise} service
 * @param {{cache?: 'memory'|'localstorage', name?:string }} config
 */
export default function useService(service, config={}) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const currentOnError = useRef(null);
  const currentOnSuccess = useRef(null);


  const currentOnDone = useRef(null);

  /**
   *
   * @param {Function} handler
   */
  const onDone = (handler) => {
    currentOnDone.current = handler;
  };

  /**
   *
   * @param {(e:Error)=>void} handler
   */
  const onError = (handler) => {
    currentOnError.current = handler;

    return { onDone };
  };
  /**
   *
   * @param {Function} handler
   */
  const onSuccess = (handler) => {
    currentOnSuccess.current = handler;

    return { onError, onDone };
  };


  const shouldUseCache = config.cache && config.name;

  const call = (...args)=>{
    if (shouldUseCache) {
      const itemInCache = cache[config.name];
      if (itemInCache) {
        setData(itemInCache);
        return { onError, onSuccess, onDone };
      }
    }

    // setData(null);
    setLoading(true);
    service(...args).then((result)=>{
      if (shouldUseCache) {
        cache[config.name] = result;
      }
      setData(result);
      currentOnSuccess.current && currentOnSuccess.current(result);
      currentOnSuccess.current = null;

      setLoading(false);
      currentOnDone.current && currentOnDone.current();
      currentOnDone.current=null;

    }).catch((error)=>{
      setError(error);
      currentOnError.current && currentOnError.current(error);
      currentOnError.current=null;

      setLoading(false);
      currentOnDone.current && currentOnDone.current();
      currentOnDone.current=null;
    });


    return { onError, onSuccess, onDone };
  };
  return {call, data, error, loading};
}

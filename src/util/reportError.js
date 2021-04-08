import Notify from "./Notify";

/**
 * @template T
 * @param {function} cb 
 */
async function reportError(cb){
  try{
    return await cb();
  }
  catch(e){
      Notify.error(e.message)
  }
}
export default reportError;
/**
 *
 * @param {Function} callback
 * @param {number} limit Amount of time it should run within the time range
 * @param {number} time Time in millisecons
 */
export function throttle(callback, limit, time) {
  /// monitor the count
  var calledCount = 0;

  /// refresh the `calledCount` varialbe after the `time` has been passed
  setInterval(function(){ calledCount = 0 }, time);

  /// creating a closure that will be called
  return function(){
      /// checking the limit (if limit is exceeded then do not call the passed function
      if (limit > calledCount) {
          /// increase the count
          calledCount++;
          callback(); /// call the function
      }
      else console.log('not calling because the limit has exceeded');
  };
}

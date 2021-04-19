import React, { useRef, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
import useNetworkLoaderStore from '../../stores/useNetworkLoaderStore';


const NetworkLoader = () => {
  const isNetworkLoading = useNetworkLoaderStore((state) => state.loadingCount > 0);

  const ref = useRef(null)
  useEffect(() => {
    if(!isNetworkLoading){
      ref.current.complete()
    }
    if(isNetworkLoading){
      ref.current.continuousStart()
    }
  }, [isNetworkLoading, ref]);
  return (
      <>
        {/* {loadingBar ? <div className='network-loader'></div>: null} */}
        <LoadingBar waitingTime={0} height={2} color="red" ref={ref} shadow={true} />
      </>

  )
}

export default NetworkLoader;

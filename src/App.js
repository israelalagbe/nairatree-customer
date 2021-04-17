import React, { useEffect } from 'react';
import "./App.css";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { Routes } from "./routes";

function App() {
  const [isInitialized, setIsInitialized] = React.useState(false);

  useEffect(() => {
    //This is needed so localstorage can set auth details before the routes is processed
    requestAnimationFrame(()=>{
        setIsInitialized(true);
    });
}, []);

  return (
    <>
      <NotificationContainer />
      {isInitialized? <Routes />: null}
    </>
  );
}

export default App;

import React from 'react';
import "./App.css";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { Routes } from "./routes";

function App() {
  return (
    <>
      <NotificationContainer />
      <Routes />
    </>
  );
}

export default App;

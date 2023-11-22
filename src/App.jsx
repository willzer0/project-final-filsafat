// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import "./styles/styles.css";

// import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/Contact/ContactUs";
import History from "./components/History/History";
import Lecture from "./components/Lecture/Lecture";
import Masterhead from "./components/Masterhead/Masterhead";
import VisiMisi from "./components/VisiMisi/VisiMisi";
import Header from "./components/header/header";
import "./config/Firebase";

function App() {
  return (
    <>
      <Header />
      <Masterhead />
      <VisiMisi />
      {/* <AboutUs /> */}
      <History />
      <Lecture />
      <ContactUs />
    </>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'

// import AboutUs from './components/AboutUs/aboutus'
// import ContactUs from './components/Contact/ContactUs'
import History from "./components/History/history";
import Lecture from './components/Lecture/Lecture'
// import Masterhead from './components/Masterhead/Masterhead'
// import VisiMisi from './components/VisiMisi/VisiMisi'
// import Header from './components/header/header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    {/*<Masterhead />
    <VisiMisi/>
    <AboutUs /> */}
      <History />
      <Lecture />
    {/* <ContactUs />  */}
    </>
  );
}

export default App;


import './App.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import FruitCounter from "./Components/FruitCounter.jsx";
import ReactForm from "./Components/form/reactForm.jsx";
import Modal from "./Components/modal/Modal.jsx";
import logo from './assets/screenshot-logo.png';

function App() {

    const [appleCount, setAppleCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    const [orangeCount, setOrangeCount] = useState(0);
    const [pearCount, setPearCount] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({});




    const handleFormSubmit = ((data, resetForm) => {
        const combinedData = {
            ...data,
            shoppingCart: {
                appleCount,
                bananaCount,
                orangeCount,
                pearCount
            }
        };

        console.log(combinedData);
        setFormData(combinedData);
        resetForm();
        setAppleCount(0);
        setBananaCount(0);
        setOrangeCount(0);
        setPearCount(0);

        setIsSubmitted(true);
    });



  return (
      <>
          <div className="home-outer">
              <div className="home-inner">
          <img src={logo} alt="logo"/>
          <>


              <Modal show={isSubmitted} onClose={() => setIsSubmitted(false)}>
                  <div className="confirmation">


                      <p>De volgende gegevens zijn verzonden:</p>
                      <pre>{JSON.stringify(formData, null, 2)}</pre>
                  </div>
              </Modal>

              <FruitCounter fruit="Appel" count={appleCount} setCount={setAppleCount}/>
              <FruitCounter fruit="Banaan" count={bananaCount} setCount={setBananaCount}/>
              <FruitCounter fruit="Sinasappel" count={orangeCount} setCount={setOrangeCount}/>
              <FruitCounter fruit="Peer" count={pearCount} setCount={setPearCount}/>
              <ReactForm onSubmit={handleFormSubmit}/>


          </>
              </div>
            </div>
      </>
  )

}

export default App


import './App.css'
import { useForm } from 'react-hook-form';
import FruitCounter from "./Components/FruitCounter.jsx";
import ReactForm from "./Components/form/reactForm.jsx";


function App() {

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <FruitCounter fruit="Appel" />
        <FruitCounter fruit="Banaan" />
        <FruitCounter fruit="Sinasappel" />
        <FruitCounter fruit="Peer" />
        <ReactForm />
    </>
  )

}

export default App

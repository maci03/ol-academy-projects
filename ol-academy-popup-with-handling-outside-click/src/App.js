import './App.css';
import { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((oldState => !oldState))
  };

  return (
    <div className="App">
      {!isModalOpen && <button onClick={handleToggleModal}>click me</button>}
      {isModalOpen && <Modal modalText={"welcome"} onModalClose={handleToggleModal} />}
    </div>
  );
}

export default App;

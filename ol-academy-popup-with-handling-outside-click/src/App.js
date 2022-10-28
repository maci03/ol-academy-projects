import './App.css';
import { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="App">
      {!isModalOpen && <button>click me</button>}
      {isModalOpen && <Modal />}
    </div>
  );
}

export default App;

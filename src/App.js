import './App.css';

import Popup from './components/popup/popup.component';
import Form from './components/form/form.component';

import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState (false);
  return (
    <div className='app'>
      <main> 
        <button className='btn1' onClick={() => setButtonPopup(true)}>Open Popup</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <Form />
      </Popup>
    </div>
  );
}

export default App;

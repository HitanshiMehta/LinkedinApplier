import React from 'react';
import { sendRunScriptMessage } from '../../utils/commonFunctions';
import './Popup.css';

const Popup = () => {

  const runContentScript = () => {
    sendRunScriptMessage({ runScript: true });
    console.log("Aacha!")
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={runContentScript}>
          Apply
        </button>
      </header>
    </div>
  );
};

export default Popup;

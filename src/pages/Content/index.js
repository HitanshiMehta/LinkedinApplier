import { printLine } from './modules/print';

printLine("Using the 'printLine' function from the Print Module");

const startApplyProcess = () => {
    console.log("StartApplyProcess!");
}


chrome.runtime.onMessage.addListener(async function (
    request,
    sender,
    sendResponse
  ) {
    if (request && request.runScript) {
      startApplyProcess();
    } 
    sendResponse({ runScript: request.runScript });
  });
export const sendRunScriptMessage = (data) => {
  window.chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs) {
      window.chrome.tabs.sendMessage(tabs[0].id, data, function (response) {
        // do something
      });
    }
  );
};

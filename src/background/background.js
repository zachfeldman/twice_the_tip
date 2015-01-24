chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {
      command: "double_tip"
    },
    function(msg) {
      console.log("result message:", msg);
    });
});
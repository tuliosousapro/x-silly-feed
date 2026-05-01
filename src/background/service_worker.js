chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ enabled: true });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'toggleTheme') {
    chrome.storage.local.set({ enabled: request.enabled });
  }
});

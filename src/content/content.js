function updateTheme(enabled) {
  if (enabled) {
    document.documentElement.classList.add('silly-enabled');
  } else {
    document.documentElement.classList.remove('silly-enabled');
  }
}

// Initial state
chrome.storage.local.get(['enabled'], (result) => {
  updateTheme(result.enabled ?? true);
});

// Listen for toggle from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'updateTheme') {
    updateTheme(request.enabled);
  }
});

const toggle = document.getElementById('themeToggle');

chrome.storage.local.get(['enabled'], (result) => {
  toggle.checked = result.enabled ?? true;
});

toggle.addEventListener('change', () => {
  const enabled = toggle.checked;
  chrome.storage.local.set({ enabled });
  
  // Notify active tab to update UI immediately
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'updateTheme', enabled });
    }
  });
});

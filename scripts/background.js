chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed and background script running.");
});
function getUserEmail() {
  chrome.identity.getAuthToken({ interactive: true }, (token) => {
    if (chrome.runtime.lastError) {
      console.log("Error: " + chrome.runtime.lastError.message);
      return;
    }
    fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.email) {
          console.log("User email: " + data.email);
          chrome.storage.local.set({ userEmail: data.email });
        }
      })
      .catch((error) => {
        console.log("Error fetching user info: ", error);
      });
  });
}
chrome.action.onClicked.addListener(() => {
  getUserEmail();
});
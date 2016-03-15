// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  lectio = 'http://lectio-fidalgopt.rhcloud.com/links/new?url=';
  chrome.tabs.create({
    url: lectio + tab.url
  });
});

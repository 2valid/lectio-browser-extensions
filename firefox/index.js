var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "lectio-link",
  label: "Add to lectio",
  icon: {
    "32": "./../images/lectio-32.png",
    "48": "./../images/lectio-48.png",
    "64": "./../images/lectio-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  link = tabs.activeTab.url;
  lectio = 'http://lectio-fidalgopt.rhcloud.com/links/new?url=';
  tabs.open(lectio + link);
}

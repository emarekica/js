let browserDetailsRef = document.getElementById("browserType");

let osDetailsRef = document.getElementById("osType");

var browserList = [
  { name: "Chrome", value: "Chrome" },
  { name: "Edge", value: "Edge" },
  { name: "Firefox", value: "Firefox" },
  { name: "Opera", value: "Opera" },
  { name: "Safari", value: "Safari" },
];

var os = [
  { name: "Android", value: "Android" },
  { name: "ios", value: "ios" },
  { name: "ipad", value: "ipad" },
  { name: "Linux", value: "Linux" },
  { name: "Macintosh", value: "Mac" },
  { name: "Windows", value: "win" },
];

let browserChecker = () => {
  // where you get the main info from
  let userDetails = navigator.userAgent;

  for (let i in browserList) {
    if (userDetails.includes(browserList[i].value)) {
      browserDetailsRef.innerHTML = browserList[i].name || "Unknown browser";

      break;
    }
  }

  for (let i in os) {
    if (userDetails.includes(os[i].value)) {
      osDetailsRef.innerHTML = os[i].name;

      break;
    }
  }
};

window.onload = browserChecker();

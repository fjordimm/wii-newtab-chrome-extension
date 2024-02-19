
function onUpdate()
{
	const now = new Date();
	const timeFormat = new Intl.DateTimeFormat("en-US", {hour: "2-digit", minute: "2-digit", hour12: false}).format;
	document.getElementById("digital-clock-text").innerHTML = timeFormat(now);
}

onUpdate();
setInterval(onUpdate, 60000);

// console.log(chrome.cookies);

chrome.cookies.set({
    "name": "Bruh",
    "url": "chrome://newtab",
    "value": "Hahaweeeeee"
}, function (cookie) {
    console.log(JSON.stringify(cookie));
    console.log(chrome.extension.lastError);
    console.log(chrome.runtime.lastError);
});

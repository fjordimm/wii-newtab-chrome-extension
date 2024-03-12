
function onUpdate()
{
	const now = new Date();

	const digitalClockTime = new Intl.DateTimeFormat("en-US", {hour: "2-digit", minute: "2-digit", hour12: false}).format(now);
	document.getElementById("digital-clock-text").innerHTML = digitalClockTime;

	const dateWeekday = new Intl.DateTimeFormat("en-US", {weekday: "short"}).format(now);
	const dateMonth = new Intl.DateTimeFormat("en-US", {month: "numeric"}).format(now);
	const dateDay = new Intl.DateTimeFormat("en-US", {day: "numeric"}).format(now);
	document.getElementById("date-text").innerHTML = dateWeekday + " " + dateMonth + "/" + dateDay;
}

onUpdate();
setInterval(onUpdate, 60000);

// console.log(chrome.cookies);

// chrome.cookies.set({
//     "name": "Bruh",
//     "url": "chrome://newtab",
//     "value": "Hahaweeeeee"
// }, function (cookie) {
//     console.log(JSON.stringify(cookie));
//     console.log(chrome.extension.lastError);
//     console.log(chrome.runtime.lastError);
// });

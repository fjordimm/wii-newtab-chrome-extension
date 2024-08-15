
function onUpdate()
{
	const now = new Date();

	const digitalClockTime = new Intl.DateTimeFormat("en-US", {hour: "2-digit", minute: "2-digit", hour12: false}).format(now);
	document.getElementById("digital-clock-text").innerHTML = "" + digitalClockTime;

	const dateWeekday = new Intl.DateTimeFormat("en-US", {weekday: "short"}).format(now);
	const dateMonth = new Intl.DateTimeFormat("en-US", {month: "numeric"}).format(now);
	const dateDay = new Intl.DateTimeFormat("en-US", {day: "numeric"}).format(now);
	document.getElementById("date-text").innerHTML = "" + dateWeekday + " " + dateMonth + "/" + dateDay;

	document.getElementById("calendar-channel-top-circle-text").innerHTML = "" + dateDay;

	const dateMonthName = new Intl.DateTimeFormat("en-US", {month: "long"}).format(now);
	const dateYear = new Intl.DateTimeFormat("en-US", {year: "numeric"}).format(now);
	document.getElementById("calendar-channel-top-text").innerHTML = "" + dateMonthName + " " + dateYear;
}

onUpdate();
setInterval(onUpdate, 60000);

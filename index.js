setInterval(setClock, 1000);

const hoursHand = document.querySelector('[data-hour-hand]')
const minutesHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
	const currentDate = new Date()
	const secoundRatio = currentDate.getSeconds() / 60
	const minutesRatio = (secoundRatio + currentDate.getMinutes()) / 60
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
	setRotation(secondHand, secoundRatio)
	setRotation(minutesHand, minutesRatio)
	setRotation(hoursHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360);
}
setClock()
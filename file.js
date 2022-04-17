//select elements (hours, seconds and minutes)

const hours = document.querySelector('.clock-hours')
const minutes = document.querySelector('.clock-minutes')
const seconds = document.querySelector('.clock-seconds')

//create set time function
const setTime=()=>{
	const date = new Date();  //get the complete date
	//get hours, minutes and seconds from this date
	const getSecondsRotation = date.getSeconds() / 60
	const getMinutesRotation = (getSecondsRotation + date.getMinutes()) / 60
	const getHoursRotation = (getMinutesRotation + date.getHours()) / 12
	setRotation(hours, getHoursRotation)
	setRotation(minutes, getMinutesRotation)
	setRotation(seconds, getSecondsRotation)
}

//create function to set rotation

const setRotation=(element,rotation)=>{
	element.style.setProperty('--rotation', rotation * 360)
}

//use set interval to run set time function every one minutes
setInterval(setTime, 1000);

var door = {doorOpen:false}; //doorOpen 초기값
var topFloor = 0;
var bottomFloor = 0;
var currentFloor = 0;
var desiredFloor = 0;
var result = []; //결과문을 담가위한 배열

function elevatorResult() {
	topFloor = Number(document.getElementById("topfloor").value);
	bottomFloor = Number(document.getElementById("bottomfloor").value);
	currentFloor = Number(document.getElementById("currentfloor").value);
	desiredFloor = Number(document.getElementById("desiredfloor").value);
	document.getElementById("message").innerHTML = ""; //출력화면 초기화
	
	if(topFloor != 0 && bottomFloor != 0 && currentFloor != 0) {
		if(bottomFloor <= desiredFloor && desiredFloor <= topFloor) {
			openDoor();
			closeDoor();
			result.push("Floor :" + " " + currentFloor);
			if(currentFloor == desiredFloor) {
				result.push("현재층입니다.");
			}
			for(;currentFloor != desiredFloor;) {
				if(currentFloor < desiredFloor) {
					goUp();
				} else {
					goDown();
				}
			}
			openDoor();
			closeDoor();
		} else {
			result.push("Invalid Floor.");
		}
		resultmsg();
	} else {
		alert("데이터가 입력되지 않았습니다.");
	}
	result = [];
}
function openDoor() {
	 result.push("Opening door.");
	door.doorOpen = true;
	result.push("Door is open.");
}
function closeDoor() {
	result.push("Closing door.");
	door.doorOpen = false;
	result.push("Door is closed.");
}
function goUp() {
	if(currentFloor < topFloor){
		if(!door.doorOpen) {
			result.push("Going up one floor.");
			currentFloor++;
			result.push("Floor :" + " " + currentFloor);
		}
	}
	else if(currentFloor == topFloor) {
		result.push("Cannot Go Up.");
	}
}
function goDown() {
	if(currentFloor > bottomFloor) {
		if(!door.doorOpen) {
			result.push("Going down one floor.");
			currentFloor--;
			result.push("Floor :" + " " + currentFloor);
		}
	}
	else if(currentFloor == bottomFloor) {
		result.push("Cannot Go Down.");
	}
}
function resultmsg() {
	for(var i=0; i<result.length; i++) {
		document.getElementById("message").innerHTML += result[i] + "<br>";
	}
}
function clearElevator() {
	window.location.reload();
}
function sampleData() {
	document.getElementById("topfloor").value = "10";
	document.getElementById("bottomfloor").value = "1";
	document.getElementById("currentfloor").value = "1";
	document.getElementById("desiredfloor").value = "3";
}

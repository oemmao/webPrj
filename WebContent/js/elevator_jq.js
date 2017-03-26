var door = {
	doorOpen : false
}; //doorOpen 초기값
var topFloor = 0;
var bottomFloor = 0;
var currentFloor = 0;
var desiredFloor = 0;
var result = []; //결과문을 담기위한 배열

$(function() {
	$("#elevatorResult").click(function() {
		topFloor = Number($("#topfloor").val());
		bottomFloor = Number($("#bottomfloor").val());
		currentFloor = Number($("#currentfloor").val());
		desiredFloor = Number($("#desiredfloor").val());
		$("#message").html(""); //출력화면 초기화

		if (topFloor != 0 && bottomFloor != 0 && currentFloor != 0) { //값 입력여부 확인
			if (bottomFloor <= desiredFloor && desiredFloor <= topFloor) {
				openDoor();
				closeDoor();
				result.push("Floor :" + " " + currentFloor);
				if (currentFloor == desiredFloor) {
					result.push("현재층입니다.");
				}
				for (; currentFloor != desiredFloor;) {
					if (currentFloor < desiredFloor) {
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
	});

	var openDoor = function() { //js 함수 호출 패턴
		result.push("Opening door.");
		door.doorOpen = true;
		result.push("Door is open.");
	}

	var closeDoor = function() {
		result.push("Closing door.");
		door.doorOpen = false;
		result.push("Door is closed.");
	}

	var goUp = function() {
		if (currentFloor < topFloor) {
			if (!door.doorOpen) {
				result.push("Going up one floor.");
				currentFloor++;
				result.push("Floor :" + " " + currentFloor);
			}
		} else if (currentFloor == topFloor) {
			result.push("Cannot Go Up.");
		}
	}

	var goDown = function() {
		if (currentFloor > bottomFloor) {
			if (!door.doorOpen) {
				result.push("Going down one floor.");
				currentFloor--;
				result.push("Floor :" + " " + currentFloor);
			}
		} else if (currentFloor == bottomFloor) {
			result.push("Cannot Go Down.");
		}
	}

	var resultmsg = function() {
		var tmp = "";
		for (var i = 0; i < result.length; i++) {
			tmp += result[i] + "<br>";
		}
		$("#message").html(tmp);
	}

	$("#sampleData").click(function() {
		$("#topfloor").val("10");
		$("#bottomfloor").val("1");
		$("#currentfloor").val("1");
		$("#desiredfloor").val("3");
	});

	$("#clearElevator").click(function() {
		window.location.reload();
	});
});
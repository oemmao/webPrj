
var op = "";
var op1 = 0;
var op2 = 0;
var str1 = ""; //식 출력을 위해 사용 (op1, op)
var str2 = ""; //식 출력을 위해 사용 (op2)

function cal(num) {	//값 입력
	if(op == "") {
		str1 += num;
		document.getElementById("number").value = str1; //식 출력
		op1 = Number(str1); //값 계산을 위해 op1에 값을 할당
	} else { 
		str2 += num;
		document.getElementById("number").value = str1 + str2; //식 출력
		op2 = Number(str2); //값 계산을 위해 op2에 값을 할당
	}
}
function operator(ops) { //연산자 입력
	op = ops; //연산자를 op에 할당
	str1 += op;
	document.getElementById("number").value = str1; //식 출력
	
}
function calresult() {	//계산
	try {
		if(op == "+") {
			if(op1 == 0 || op2 == 0) {
				throw "Add Zero";
			} else {
				printresult(op1 + op2);
			}
		} else if(op == "-") {
			if(op2 == 0) {
				throw "Sub Zero";
			} else {
				printresult(op1 - op2);
			}
		} else if(op == "*") {
			if(op1 == 1 || op2 == 1) {
				throw "Mul One";
			} else {
				printresult(op1 * op2);
			}
		} else if(op == "/") {
			if(op2 == 1) {
				throw "Div One";
			} else {
				printresult(op1 / op2);
			}
		} 
	} catch(err) {
		excPrint(err);
	}	
}
function printresult(result) { //결과값 출력
	document.getElementById("number").value = result; //inner tag에는 값(value)을 넣어줘야한당.	
	op1 = result; //연산을 계속하기 위해 op1에 result를 할당 => 값 계산을 위한 것
	str1 = result; //연산을 계속하기 위해 str1에 result를 할당 => 식 출력을 위한 것
	str2 = ""; //연산을 계속하기 위해 초기화
}
function clearCal() { //clear
	document.getElementById("number").value = "";
	op = "";
	op1 = 0;
	op2 = 0;
	str1 = "";
	str2 = "";
}
function excPrint(err) {
	document.getElementById("number").value = err;
	op = "";
	op1 = 0;
	op2 = 0;
	str1 = "";
	str2 = "";
}
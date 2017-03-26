var inputData = [];

function rankResult() { //입력받은 데이터를 inputData에 저장하여 합/평균/석차를 구함.
	inputData.push(
		{
			name:input("student",1,1),
			score:input("score",1,3)
		}
	);	
	inputData.push(
		{
			name:input("student",2,2),
			score:input("score",4,6)
		}
	);
	inputData.push(
			{
				name:input("student",3,3),
				score:input("score",7,9)
			}
	);
	if(check(inputData)) { //데이터가 입력되었는지 아닌지 확인
		sum();
		avg();
		rank();
		subtotal();
	} else {
		alert("데이터가 입력되지 않았습니다.");
	}
	inputData = [];
}
function check(data) { //if(check(inputData) -> 값의 유무를 확인하기 위한 함수
	for(i in data) {
		for(j in data[i].score) {
			console.log(data[i].score);
			if(data[i].score[j] == "") {
				return false;
			}	 
		}
	}
	return true;
}
function input(title, num1, num2) { //입력받은 정보를 배열로 inputData에 저장
	var arrData = [];
	for(var i = num1; i<=num2; i++) {
		arrData.push(document.getElementById(title+i).value);
	}
	return arrData;
}
function sum() { // 각 학생별 점수 합
	var sum = 0;
	var sumTotal = 0;
	for(var i=0; i<inputData.length; i++) {
		for(var j=0; j<inputData[i].score.length; j++) {
			sum += Number(inputData[i].score[j]);
			document.getElementById("sum"+(i+1)).innerHTML = sum;
		}
		sumTotal += sum;
		document.getElementById("sumtotal4").innerHTML = sumTotal; //합의 총합
		sum = 0;
	}
}
function avg() { //각 학생별 점수 평균
	var avg = 0;
	var tmp = 0;
	for(var i=0; i<inputData.length; i++) {
		for(var j=0; j<inputData[i].score.length; j++) {
			tmp += Number(inputData[i].score[j]);
		}
		avg = tmp/inputData[i].score.length;
		document.getElementById("avg"+(i+1)).innerHTML = avg.toFixed(2);
		tmp = 0;
	}	
}
function rank() { // 학생별 점수합을 가지고 석차 구함.
	var rank = [1, 1, 1];
	var tmp = [];
	var sum = 0;
	for(var i=0; i<inputData.length; i++) { //점수를 tmp 배열에 저장
		for(var j=0; j<inputData[i].score.length; j++) {
			sum += Number(inputData[i].score[j]);
		}
		tmp[i] = sum;
		sum = 0;
	}
	for(var i=0; i<tmp.length; i++) { //tmp배열을 통해 비교하여 rank배열에 저장
		var num = 1;
		for(var j=0; j<tmp.length; j++) {
			if(tmp[i] < tmp[j])
				num++;
		}
		rank[i] = num;
	}
	for(var i=0; i<rank.length; i++) { //table에 석차 기재
	document.getElementById("rank"+(i+1)).innerHTML = rank[i];
	}
}
function subtotal() { //과목별 총합
	var total = [0, 0, 0];
	var tmp = 0;
	for(var i=0; i<inputData.length; i++) {
		for(var j=0; j<inputData[i].score.length; j++) {
			tmp = Number(inputData[i].score[j]);
			total[j] += tmp;
			tmp = 0;
		}
	}
	for(var i=0; i<total.length; i++) { //table에 과목별 총합 기재
		document.getElementById("subtotal"+(i+1)).innerHTML = total[i];	
	}
}
function clearRank() { //입력값 초기화
	window.location.reload(); //reload()함수 사용
}
function sampleData() { //샘플데이터 입력 함수
	document.getElementById("student1").value = "홍길동";
	document.getElementById("student2").value = "강감찬";
	document.getElementById("student3").value = "유관순";
	
	for(var i=1; i<10; i++) {	
		document.getElementById("score"+i).value = Math.floor(Math.random()*101);
	}
}
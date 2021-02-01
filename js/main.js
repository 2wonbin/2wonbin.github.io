let target = document.querySelector("#dynamic");

function randomString() {
	let stringArr = [
		"검색어를 입력하세요",
		"ERROR 404",
		"자바~ 나를 잊지마!",
		"System.Out.Println",
		"NullPointerException",
		"아, 제임스형!",
		"🐶깜장이 라떼 엘리 영삼이 제이🐱",
	];
	let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
	let selectStringArr = selectString.split("");

	return selectStringArr;
}
//타이핑 리셋
function resetTyping() {
	target.textContent = "";
	dynamic(randomString());
}

//한글자씩 텍스트 출력
function dynamic(randomArr) {
	if (randomArr.length > 0) {
		target.textContent += randomArr.shift();
		setTimeout(function () {
			dynamic(randomArr);
		}, 120);
	} else {
		setTimeout(resetTyping(), 4500);
	}
}

dynamic(randomString());

function blink() {
	target.classList.toggle("active");
}

setInterval(blink, 500);

//https://codepen.io/gnsp/pen/vYBQZJm
const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");

const w = (canvas.width = document.body.offsetWidth);
const h = (canvas.height = document.body.offsetHeight);
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = "#000";
ctx.fillRect(0, 0, w, h);

function matrix() {
	ctx.fillStyle = "#0001";
	ctx.fillRect(0, 0, w, h);

	ctx.fillStyle = "#0f0";
	ctx.font = "10pt monospace";

	ypos.forEach((y, ind) => {
		const text = String.fromCharCode(Math.random() * 128);
		const x = ind * 20;
		ctx.fillText(text, x, y);
		if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
		else ypos[ind] = y + 20;
	});
}

setInterval(matrix, 50);

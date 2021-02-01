$(document).ready(function (e) {
	var login = sessionStorage.getItem("mysiteLogin");
	if (login == null) {
		alert("로그인이 필요한 서비스입니다.");
		location.href = "../html/login.html";
		return;
	}

	var users = JSON.parse(localStorage.getItem("mysiteUser"));

	var table = $("#memberListTable");
	var index = 1;
	users.forEach(function (element) {
		var date = new Date(element.enrollTime);

		var tr = "";
		if (login == element.userMail) {
			tr += "<tr class='isMe'>";
		} else {
			tr += "<tr>";
		}
		tr += "<td>" + index++ + "</td>";
		tr += "<td>" + element.userName + "</td>";
		tr += "<td>" + element.userMail + "</td>";
		tr += "<td>" + displayTime(date) + "</td>";
		tr += "</tr>";
		table.append(tr);
	});

	function displayTime(date) {
		var hours = date.getHours();
		var minutes = date.getMinutes();

		return (
			date.getFullYear() +
			"/" +
			(date.getMonth() + 1) +
			"/" +
			date.getDate() +
			" " +
			(hours < 10 ? "0" + hours : hours) +
			":" +
			(minutes < 10 ? "0" + minutes : minutes)
		);
	}

	$("#logout").click(function (e) {
		if (!confirm("정말 로그아웃 하시겠습니까?")) {
			return;
		}

		sessionStorage.removeItem("mysiteLogin");
		alert("로그아웃 되었습니다.");
		location.href = "../html/index.html";
	});
});

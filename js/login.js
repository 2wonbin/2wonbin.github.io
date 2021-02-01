function login() {
	var userMail = $("#userMail").val();
	var userPassword = $("#userPassword").val();

	if (userMail == "") {
		alert("이메일을 입력해주세요");
		$("#userMail").focus();
		return;
	}
	if (userPassword == "") {
		alert("패스워드를 입력해주세요");
		$("#userPassword").focus();
		return;
	}

	var users = JSON.parse(localStorage.getItem("mysiteUser"));

	// 브라우저 스토리지에서 이메일 체크
	var account = null;
	users.forEach(function (element) {
		if (element.userMail == userMail) {
			account = element;
		}
	});

	if (account == null) {
		alert("가입되지 않은 이메일입니다.");
		return;
	}

	if (account.userPassword != userPassword) {
		alert("비밀번호가 맞지 않습니다.");
		return;
	}

	sessionStorage.setItem("mysiteLogin", userMail);
	alert("로그인 되었습니다.");

	location.href = "../html/memberlist.html";
}

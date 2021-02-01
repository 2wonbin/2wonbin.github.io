function onSubmitBtnClick() {
	var userName = $("#userName").val();
	var userMail = $("#userMail").val();
	var userPassword = $("#userPassword").val();
	var passwordchk = $("#passwordchk").val();
	var enrollTime = new Date().getTime();

	if (userName == "") {
		alert("이름을 작성해주세요");
		$("#userName").select();
		return;
	}

	if (!/^[가-힣]{2,}$/.test(userName)) {
		alert("이름은 한글 2글자 이상이어야합니다.");
		$("#userName").select();
		return;
	}
	if (userMail == "") {
		alert("이메일을 작성해주세요");
		$("#userMail").select();
		return;
	}

	if (userPassword == "") {
		alert("패스워드를 작성해주세요");
		$("#userPassword").select();
		return;
	}

	if (userPassword.length < 4) {
		alert("패스워드는 4글자 이상이어야합니다.");
		$("#userPassword").select();
		return;
	}

	if (passwordchk == "") {
		alert("패스워드 확인칸에 작성주세요");
		$("#passwordchk").select();
		return;
	}
	if (userPassword !== passwordchk) {
		alert("입력한 패스워드가 다릅니다. 확인해주세요.");
		return;
	}

	var obj = {
		userName: userName,
		userMail: userMail,
		userPassword: userPassword,
		enrollTime: enrollTime,
	};

	var users = JSON.parse(localStorage.getItem("mysiteUser"));

	if (users == null) {
		users = [];
	}

	var isDuplicated = false;
	users.forEach(function (element) {
		if (element.userMail == userMail) {
			isDuplicated = true;
		}
	});

	if (isDuplicated) {
		alert("이미 가입된 이메일입니다.");
		return;
	}

	users.push(obj);

	localStorage.setItem("mysiteUser", JSON.stringify(users));

	alert("가입이 완료되었습니다.");

	$("#userName").val("");
	$("#userMail").val("");
	$("#userPassword").val("");
	$("#passwordchk").val("");
}

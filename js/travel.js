$("#tab1_title").click(function (e) {
	$(".tab_content").each(function () {
		$(this).removeClass("active");
	});
	$("#tab1").addClass("active");
});

$("#tab2_title").click(function (e) {
	$(".tab_content").each(function () {
		$(this).removeClass("active");
	});
	$("#tab2").addClass("active");
});

$(document).ready(function () {
	$(".modal_background").click(function (e) {
		var asd = e.target;
		if ($(".modal_background").is(e.target)) {
			$(".modal_background").hide();
		}
	});
});

function showModal(rt, title, content) {
	var bgClass = rt.classList[0];
	$(".modal_background").show();
	var target = $(".modal_div_picture");
	target.removeClass();
	target.addClass("modal_div_picture " + bgClass);
	$(".modal_title").html(title);
	$(".modal_content").html(content);
}

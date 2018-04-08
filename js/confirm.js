$(function(){
	$("img.leaveMessage").click(function(){
		$(this).hide();
		$("span.leaveMessageTextareaSpan").show();
		$("div.orderItemSumDiv").css("height","100px");
	});
});

$(function(){
	$("img.smallImage").mouseenter(function(){
		var bigImgURL = $(this).attr("bigImgURL");
		$("img.bigImg").attr("src",bigImgURL);
	});

	$("img.bigImg").load(function(){
		$("img.smallImage").each(function(){
			var bigImgURL = $(this).attr("bigImgURL");
			img = new Image();
			img.src = bigImgURL;
			img.onload = function(){
				console.log(bigImgURL);
				$("div.img4load").append($(img));
			};
		});
	});

	var stock = 30;
	$(".productNumberSetting").keyup(function(){
		var num = $(".productNumberSetting").val();
		num = parseInt(num);
		if(isNaN(num))
			num=1;
		if(num<=0)
			num=1;
		if(num>stock)
			num=stock;
		$(".productNumberSetting").val(num);
	});


	$(".increaseNumber").click(function(){
		var num = $(".productNumberSetting").val();
		num++;
		if(num>stock)
			num = stock;
		$(".productNumberSetting").val(num);
	});

	$(".decreaseNumber").click(function(){
		var num = $(".productNumberSetting").val();
		--num;
		if(num<1)
			num = 1;
		$(".productNumberSetting").val(num);
	});

	$("div.productReviewContentPart").hide();
	
	$("a.productDetailTopReviewLink").click(function(){
		$("div.productReviewContentPart").show();
		$("div.productParamentPart").hide();
		$("div.productDetailImagePart").hide();
		$("a.productDetailTopReviewLink").addClass("selected");
		$("a.productDetailTopPartSelectedLink").removeClass("selected");
	});

	$("a.productDetailTopPartSelectedLink").click(function(){
		$("div.productParamentPart").show();
		$("div.productDetailImagePart").show();
		$("div.productReviewContentPart").hide();
		$("a.productDetailTopPartSelectedLink").addClass("selected");
		$("a.productDetailTopReviewLink").removeClass("selected");
	});


















});
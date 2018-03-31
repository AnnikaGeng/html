$(function(){
	function syncCreateOrderButton(){
		var selectAny = false;
		$(".cartProductItemIfSelected").each(function(){
			if("selectit"==$(this).attr("selectit")){
				selectAny = true;
			}
		});

		if(selectAny){
			$("button.createOrderButton").css("background-color","#C40000");
			$("button.createOrderButton").removeAttr("disabled");
		}
		else{
			$("button.createOrderButton").css("background-color","AAA");
			$("button.createOrderButton").addAttr("disabled","disabled");
		}
	}

	function syncSelect(){
		var selectAll=true;
		$(".cartProductItemIfSelected").each(function(){
			if("false"==$(this).attr("selectit")){
				selectAll=false;
			}
		});

		if(selectAll){
			$("img.selectAllItem").attr("src","pics/selected.png");
		}
		else{
			$("img.selectAllItem").attr("src","pics/notSelected.png");
		}
	}

	function syncPrice(pid,num,price){
		$(".orderItemNumberSetting[pid="+pid+"]").val(num);
		var cartProductItemSmallSumPrice = num*price;
		$(".cartProductItemSmallSumPrice[pid="+pid+"]").html("￥"+cartProductItemSmallSumPrice);
		calcCartSumPriceAndNumber();
	}

	function calcCartSumPriceAndNumber(){
		var sum = 0;
		var totalNumber = 0;
		$("img.cartProductItemIfSelected[selectit='selectit']").each(function(){
			var oiid = $(this).attr("oiid");
			var price = $(".cartProductItemSmallSumPrice[oiid="+oiid+"]").text();
			price = price.replace(/,/g,"");
			price = price.replace(/￥/g,"");
			sum += new Number(price);
			var num = $(".orderItemNumberSetting[oiid="+oiid+"]").val();
			totalNumber += new Number(num);
		});
		$("span.cartSumPrice").html("￥"+sum);
		$("span.cartTitlePrice").html("￥"+sum);
		$("span.cartSumNumber").html(totalNumber);
	}

	$("img.cartProductItemIfSelected").click(function(){
		var selectit = $(this).attr("selectit");
		if(selectit == "selectit"){
			$(this).attr("src","pics/notpics/selected.png");
			$(this).attr("selectit","false");
			$(this).parents("tr.cartProductItemTR").css("background-color","#fff");
		}
		else{
			$(this).attr("src","pics/selected.png");
			$(this).attr("selectit","selectit");
			$(this).parents("tr.cartProductItemTR").css("background-color","#FFF8E1");
		}
		syncSelect();
		syncCreateOrderButton();
		calcCartSumPriceAndNumber();
	});

	$("img.selectAllItem").click(function(){
		var selectit = $(this).attr("selectit");
		if(selectit == "selectit"){
			$("img.selectAllItem").attr("src","pics/notSelected.png");
			$(this).attr("selectit","false");
			$(".cartProductItemIfSelected").each(function(){
				$(this).attr("src","pics/notSelected.png");
				$(this).attr("selectit","false");
				$(this).parents("tr.cartProductItemTR").css("background-color","#fff");
			});
		}
		else{
			$("img.selectAllItem").attr("src","pics/selected.png");
			$("img.selectAllItem").attr("selectit","selectit");
			$(".cartProductItemIfSelected").each(function(){
				$(this).attr("src","pics/selected.png");
				$(this).attr("selectit","selectit");
				$(this).parents("tr.cartProductItemTR").css("background-color","#FFF8E1");
			});
		}
		syncCreateOrderButton();
		calcCartSumPriceAndNumber();
	});

	$(".numberPlus").click(function(){
		var pid = $(this).attr("pid");
		var stock = $("span.orderItemStock[pid = "+pid+"]").text();
		var num = $(".orderItemNumberSetting[pid ="+pid+"]").val();
		var price = $(".orderItemPromotePrice[pid="+pid+"]").text();
		num++;
		if(num>stock)
			num = stock;
		
		syncPrice(pid,num,price);
	});

	$(".numberMinus").click(function(){
		var pid = $(this).attr("pid");
		var stock = $("span.orderItemStock[pid="+pid+"]").text();
		var num = $(".orderItemNumberSetting[pid="+pid+"]").val();
		var price = $(".orderItemPromotePrice[pid="+pid+"]").text();
		num--;
		if(num<=0)
			num = 1;
		syncPrice(pid,num,price);
	});


	$(".orderItemNumberSetting").keyup(function(){
		var pid = $(this).attr("pid");
		var stock = $("span.orderItemStock[pid="+pid+"]").text();
		var num = $(".orderItemNumberSetting[pid="+pid+"]").val();
		var price = $("span.orderItemPromotePrice[pid="+pid+"]").text();
		num = parseInt(num);
		if(isNaN(num))
			num = 1;
		if(num<0)
			num = 1;
		if(num>stock)
			num = stock;
		syncPrice(pid,num,price);
	});
	
});

































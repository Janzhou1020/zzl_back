$(function() {
	setTimeout('funInd()', 300);//缓加载 ---> 因为标题栏是通过json动态生成的，所以等标题栏加载完后再加载该方法
})

function funInd() {
	var fbts = document.querySelectorAll(".fbt");//获得所有头标题栏
	for (var i = 0; i < fbts.length; i++) {
		var lis = fbts[i].querySelectorAll("ul li");//得到当前大标题栏下的小标题
		for (var j = 0; j < lis.length; j++) {
			$("." + lis[j].className + "").on('click', function() {//为小标题栏添加点击事件
				var h3 = document.querySelector("h3[class=" + this.className + "]");//获取小标题栏对应的h3内容
				var length = h3.offsetTop - 30 ;//获取当前h3距离内容页顶部的距离
				$("html, body").stop().animate({//点击时触发滑动动画，滑动距离为length，时间为20毫秒
					scrollTop: length
				}, 20);
			});

		}
	}
}

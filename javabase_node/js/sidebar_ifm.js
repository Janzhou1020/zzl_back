$(function() {
	$("#navmenu").on("click", ".liname", function(index) {
		var index = $("#navmenu .liname").index(this);
		$("#navmenu>li>.child_menu").eq(index).slideToggle();
		$("#navmenu>li>.child_menu").eq(index).parent().siblings("li").find(".child_menu").slideUp();
	});


});

function showSideMenu(res) {
	for (var i = 0; i < res.length; i++) {
		var html = "";
		html += "<li class='fbt'>"; //每个大标题的内容
		html += "<a class='liname'><i class='fa fa-home'></i>" + res[i].menuName +
			"<span class='fa fa-chevron-down'></span></a>"; //a标签里是大标题头
		html += "<ul class='nav child_menu'>"; //每个标题下的内容
		for (var k = 0; k < res[i].children.length; k++) { //遍历出所有的标题
			if (typeof(res[i].children[k].children) != 'undefined') { //如果该标题下还有子节点
				html += "<li class='three_menu'>";
				html += "<a href='" + res[i].children[k].menuAction + "'>" + res[i].children[k].menuName + "</a>";
				html += "<ul class='nav child_menu'>";
				for (var j = 0; j < res[i].children[k].children.length; j++) {
					html += "<li>";
					html += "<a href='" + res[i].children[k].children[j].menuAction + "' target='myFrame' >" + res[i]
						.children[k].children[j].menuName + "</a>";
					html += "</li>";
				}
				html += "</ul>";
				html += "</li>";
			} else if (typeof(res[i].children[k].children) == 'undefined') { //如果子节点不存在
				html += "<li class='a" + i + "_" + k + "'>";
				//二级导航栏的信息
				html += "<a href='javascript:;'>" + res[i].children[k].menuName + "</a>";
				html += "</li>";
			}
		}
		html += "</ul>";
		html += "</li>";
		$("#navmenu").append(html);
	};
}

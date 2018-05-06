$(function(){
	$('.NavigationTree').tree({
		onClick: function(node){
			var title=getPageTitle(node.id);
			var url=getPageUrl(title);
			$.ajax({
				type: "POST",
				url: "/NoSbeam/ShowPage.action",
				cache: 'false',
				data: {"page": url}, 
				contentType: "application/json;charset=utf-8",
				dataType: "text",
				success: function(data){
					$('#MainContent').html(data);
					$.parser.parse($('#MainContent').parent());
				},
				error: function(){
					alert("后台服务器异常，请告知相关人员处理！");
				}
			})

		}
	});
});



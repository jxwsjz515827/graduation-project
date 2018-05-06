<#assign ctx=request.contextPath />
<!DOCTYPE html>    
    
<html lang="zh-cmn">    
	<head>
		<base id="ctx" href="${ctx}">
		<!-- ctx=request.getc -->
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8;NO-CACHE" />
		<title>欢迎使用后台管理系统</title>
		<link href="${ctx}/static/easyui/insdep.easyui.min.css" rel="stylesheet" type="text/css" />
    	<link href="${ctx}/static/easyui/insdep.theme_default.css" rel="stylesheet" type="text/css" />
    	<link href="${ctx}/static/easyui/icon.css" rel="stylesheet" type="text/css" />
    	<link href="${ctx}/static/easyui/iconfont/iconfont.css" rel="stylesheet" type="text/css" />
    	
    	<link href="${ctx}/static/css/HomeCss.css" rel="stylesheet" type="text/css"/>
    	
    	<script type="text/javascript" src="${ctx}/static/easyui/jquery.min.js"></script>
    	<script type="text/javascript" src="${ctx}/static/easyui/jquery.easyui.min.js"></script>
    	<script type="text/javascript" src="${ctx}/static/easyui/insdep.extend.min.js"></script>
    	
		<script type="text/javascript" src="${ctx}/static/js/Utils.js"></script>
		<script type="text/javascript" src="${ctx}/static/js/HomeJs.js"></script>
		
		
	</head>

	<body>    
		<div class="easyui-layout" data-options="fit:true">  
            <div region="north" style="height: 70px;">  
                <h1>后台管理系统</h1>  
            </div>  
            <#include "Navigation.ftl"/> <!-- 导航栏 -->
            <div id="MainContent" data-options="region:'center',split:true,fit:true"> 
					<#include "HomePage.ftl"/>
            </div>  
            <#include "Foot.ftl"/>    <!-- 底部显示 -->
        </div>  
	</body>    
</html>    
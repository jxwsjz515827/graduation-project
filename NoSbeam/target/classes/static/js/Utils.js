function getPageUrl(title)
{
	var text=title;
	var pageAddress="";
	switch(text)
	{
		case "代办任务":
			pageAddress="HomePage";
			break;
		case "系统概览":
			pageAddress="HomePage";
			break;
		case "列表管理":
			pageAddress="game/GameList";
			break;
		case "分类管理":
			pageAddress="HomePage";
			break;
		case "用户管理":
			pageAddress="HomePage";
			break;
		case "商品报表":
			pageAddress="HomePage";
			break;
		case "系统报表":
			pageAddress="HomePage";
			break;
		case "人员管理":
			pageAddress="HomePage";
			break;
		case "数据字典":
			pageAddress="HomePage";
			break;
		case "角色管理":
			pageAddress="HomePage";
			break;
		case "权限管理":
			pageAddress="HomePage";
			break;
			
	}
	return pageAddress;
}


function getPageTitle(id)
{
	var key=id;
	var title="";
	switch(key)
	{
		case "s01":
			title="代办任务";
			break;
		case "s02":
			title="系统概览";
			break;
			
		case "s11":
			title="列表管理";
			break;
		case "s12":
			title="分类管理";
			break;
			
		case "s21":
			title="用户管理";
			break;
			
		case "s31":
			title="";
			break;
			
		case "s41":
			title="商品报表";
			break;
		case "s42":
			title="系统报表";
			break;
			
		case "s51":
			title="人员管理";
			break;
		case "s52":
			title="数据字典";
			break;
			
		case "s61":
			title="角色管理";
			break;
		case "s62":
			title="权限管理";
			break;
	}
	return title;
	}
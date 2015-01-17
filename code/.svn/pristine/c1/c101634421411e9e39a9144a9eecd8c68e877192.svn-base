<%@ page pageEncoding="UTF-8"%>
<%@ include file="/taglibs.jsp"%>

<!DOCTYPE html>

<html lang="en">
<head>
<title><decorator:title default="iRead Manager" /> | <fmt:message
		key="webapp.name" />
</title>
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />

<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">

<link rel="stylesheet" type="text/css" href="<c:url value='/bootstrap/css/bootstrap.css'/>">
<link rel="stylesheet" type="text/css" 	href="<c:url value='/styles/theme.css'/>">
<link rel="stylesheet" type="text/css"   href="<c:url value='/styles/app.css'/>">
<link rel="stylesheet" href="<c:url value='/font-awesome/css/font-awesome.css'/>">
<script src="<c:url value='/scripts/jquery-1.8.0.min.js'/>" type="text/javascript"></script>
	

<script src="<c:url value='/bootstrap/js/bootstrap.js'/>"  type="text/javascript"></script>
   

<style type="text/css">
#line-chart {
	height: 300px;
	width: 800px;
	margin: 0px auto;
	margin-top: 1em;
}

.brand {
	font-family: georgia, serif;
}

.brand .first {
	color: #ccc;
	font-style: italic;
}

.brand .second {
	color: #fff;
	font-weight: bold;
}
</style>

<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

<!-- Le fav and touch icons -->
<link rel="shortcut icon" href="../assets/ico/favicon.ico">
<link rel="apple-touch-icon-precomposed" sizes="144x144"
	href="../assets/ico/apple-touch-icon-144-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114"
	href="../assets/ico/apple-touch-icon-114-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72"
	href="../assets/ico/apple-touch-icon-72-precomposed.png">
<link rel="apple-touch-icon-precomposed"
	href="../assets/ico/apple-touch-icon-57-precomposed.png">
<%-- <link rel="shortcut icon" href="${ctx}/images/favicon.ico" type="image/x-icon"/> --%>
<decorator:head />
</head>



<%-- <%@ include file="/messages.jsp"%>
                <decorator:body/>
<!-- <body class="">  -->
                <decorator:getProperty property="page.underground"/> --%>

<!--[if lt IE 7 ]> <body class="ie ie6"> <![endif]-->
<!--[if IE 7 ]> <body class="ie ie7 "> <![endif]-->
<!--[if IE 8 ]> <body class="ie ie8 "> <![endif]-->
<!--[if IE 9 ]> <body class="ie ie9 "> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->

<body
	<decorator:getProperty property="body.id" writeEntireProperty="true"/>
	<decorator:getProperty property="body.class" writeEntireProperty="true"/>>
	<!--<![endif]-->

	<!-- begin 页面顶部banner -->
	<div class="navbar">
		<div class="navbar-inner">
			<ul class="nav pull-right">

				<li><a href="#"
					class="hidden-phone visible-tablet visible-desktop" role="button">设置</a>
				</li>
				<li id="fat-menu" class="dropdown"><a href="#" role="button"
					class="dropdown-toggle" data-toggle="dropdown"> <i
						class="icon-user"></i> ${currentUser.username} <i class="icon-caret-down"></i> </a>

					<ul class="dropdown-menu">
						<li><a tabindex="-1" href="#">我的帐户</a>
						</li>
						<li class="divider"></li>
						<li><a tabindex="-1" class="visible-phone" href="#">设置</a>
						</li>
						<li class="divider visible-phone"></li>
						<li><a tabindex="-1" href="<c:url value='/logout.jsp'/>">退出</a>
						</li>
					</ul>
				</li>

			</ul>
			<a class="brand" href="javascript:void(0);"><span class="first"> </span> <span class="second">iRead Manager</span>
				
			</a>
		</div>
	</div>
	<!-- end 页面顶部banner -->


	<!-- begin 左边导航菜单栏 -->
	<div class="sidebar-nav">
		<form class="search form-inline">
			<input type="text" placeholder="" readonly="readonly">
		</form>
		<a href="#manager-menu" class="nav-header collapsed" data-toggle="collapse"><i
			class="icon-briefcase"></i>后台管理<i class="icon-chevron-up"></i>
		</a>
		<ul id="manager-menu" class="nav nav-list collapse">
			<li><a href="${basePath}/articles/manager">内容管理</a>
			</li>
		</ul>
		
		<a href="#dashboard-menu" class="nav-header" data-toggle="collapse">
		    <i class="icon-dashboard"></i>内容管理 <i class="icon-chevron-up"></i>
		</a>
		<ul id="dashboard-menu" class="nav nav-list collapse in">
<!-- 			<li><a href="#">主页</a></li> -->
			<li><a href="${basePath}/circles">圈子管理</a></li>
			<li><a href="${basePath}/articles">文章管理</a></li>
		</ul>

		<a href="#accounts-menu" class="nav-header collapsed" data-toggle="collapse"><i
			class="icon-briefcase"></i>活动管理 <i class="icon-chevron-up"></i><!-- <span class="label label-info">+3</span> -->
		</a>
		<ul id="accounts-menu" class="nav nav-list collapse">
			<li><a href="${basePath}/activities">活动列表</a>
			</li>
		</ul>

		<a href="#circle-menu" class="nav-header collapsed" data-toggle="collapse"><i
			class="icon-briefcase"></i>置顶项<i class="icon-chevron-up"></i><!-- <span class="label label-info">+3</span> -->
		</a>
		<ul id="circle-menu" class="nav nav-list collapse">
			<li><a href="${basePath}/circle/tops">置顶列表</a>
			</li>
		</ul>
		
				
		<a href="#legal-menu" class="nav-header collapsed" data-toggle="collapse"><i
            class="icon-legal"></i>系统管理 <i class="icon-chevron-up"></i></a>
        <ul id="legal-menu" class="nav nav-list collapse">
            <li><a href="${basePath}/users">前台用户管理</a></li>
            <li><a href="${basePath}/sysusers">用户管理</a></li>
            <li><a href="${basePath}/android/list">android版本发布</a></li>
        </ul>
        
        <a href="${basePath}/changePassword" class="nav-header"><i
            class="icon-comment"></i>修改密码</a> 
        
        <a href="<c:url value='/logout.jsp'/>" class="nav-header"><i
            class="icon-comment"></i>退出系统</a> 

		<!-- <a href="#error-menu" class="nav-header collapsed"
			data-toggle="collapse"><i class="icon-exclamation-sign"></i>Error
			Pages <i class="icon-chevron-up"></i>
		</a>
		<ul id="error-menu" class="nav nav-list collapse">
			<li><a href="403.html">403 page</a>
			</li>
			<li><a href="404.html">404 page</a>
			</li>
			<li><a href="500.html">500 page</a>
			</li>
			<li><a href="503.html">503 page</a>
			</li>
		</ul> -->

		

		<!-- <a href="help.html" class="nav-header"><i
			class="icon-question-sign"></i>Help</a> 
			<a href="faq.html"
			class="nav-header"><i class="icon-comment"></i>Faq</a> -->
	</div>
	<!-- end 左边导航菜单栏 -->

 
	<div class="content">
	
        <decorator:body/>
		
	</div>

	<script src="<c:url value='/bootstrap/js/bootstrap.js'/>"></script>
	<script type="text/javascript">
		$("[rel=tooltip]").tooltip();
		$(function() {
			$('.demo-cancel-click').click(function() {
				return false;
			});
		});
	</script>

</body>
</html>

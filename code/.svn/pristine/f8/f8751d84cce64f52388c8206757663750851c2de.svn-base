<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/taglibs.jsp"%>
<%
    String path = request.getContextPath();
			String basePath = request.getScheme() + "://"
					+ request.getServerName() + ":" + request.getServerPort()
					+ path + "/";

String fileUrlPrefix = com.mycompany.iread.manager.SystemConfig.getProperty(com.mycompany.iread.manager.Constants.KEY_FILE_URL_PREFIX);
pageContext.setAttribute("fileUrlPrefix", fileUrlPrefix);

%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->

<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->

<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->

<!-- BEGIN HEAD -->

<head>

	<meta charset="utf-8" />

	<title>领域天马</title>

	<meta content="width=device-width, initial-scale=1.0" name="viewport" />

	<meta content="" name="description" />

	<meta content="" name="author" />

	<!-- BEGIN GLOBAL MANDATORY STYLES -->

	<link href="${ctx}/scripts/leyye.bootstrap/media/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>

	<link href="${ctx}/scripts/leyye.bootstrap/media/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>

	<link href="${ctx}/scripts/leyye.bootstrap/media/css/font-awesome.css" rel="stylesheet" type="text/css"/>

	<link href="${ctx}/scripts/leyye.bootstrap/media/css/style-metro.css" rel="stylesheet" type="text/css"/>

	<link href="${ctx}/scripts/leyye.bootstrap/media/css/style.css" rel="stylesheet" type="text/css"/>

	<link href="${ctx}/scripts/leyye.bootstrap/media/css/style-responsive.css" rel="stylesheet" type="text/css"/>

	<link href="${ctx}/scripts/leyye.bootstrap/media/css/default.css" rel="stylesheet" type="text/css" id="style_color"/>

	<link href="${ctx}/scripts/leyye.bootstrap/media/css/uniform.default.css" rel="stylesheet" type="text/css"/>

	<!-- END GLOBAL MANDATORY STYLES -->

	<!-- BEGIN PAGE LEVEL STYLES -->


	<!-- END PAGE LEVEL STYLES -->

	<link rel="shortcut icon" href="${ctx}/scripts/leyye.bootstrap/media/image/favicon.ico" />
	
	
	<style type="text/css">
	
	   .leyye_support{
          position: absolute;
          /*display:block;*/
          display: none;
          background: none repeat scroll 0 0 #3d3d3d;
          max-width: 550px !important;
          min-width: 160px !important;
          height: 300px;
          width: 400px;
          padding: 10px 15px;
          color: #cfcfcf;
          z-index: 1000;
	   }
	   
	   .support_tile{
	     height: 100px;
	   }
	   
	   
	</style>
	


	<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->

	<!-- BEGIN CORE PLUGINS -->

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/jquery-1.10.1.min.js" type="text/javascript"></script>

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/jquery-migrate-1.2.1.min.js"
		type="text/javascript"></script>

	<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
		

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/bootstrap.min.js" type="text/javascript"></script>

	<!--[if lt IE 9]>

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/excanvas.min.js"></script>

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/respond.js"></script>  

	<![endif]-->

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/jquery.slimscroll.min.js" type="text/javascript"></script>

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/jquery.blockui.min.js" type="text/javascript"></script>

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/jquery.cookie.min.js" type="text/javascript"></script>

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/jquery.uniform.min.js" type="text/javascript"></script>

	<!-- END CORE PLUGINS -->

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/app.js"></script>

	<script>

		jQuery(document).ready(function() {    
		   App.init();
		   
		   $("#a_support").click(function(){
			   if($("#div_support").css("display") == "none"){
				   $("#div_support").show("normal");
			   }else{
				   $("#div_support").hide("normal");
			   }
		   });
		   
		   
		   $("#div_circle").click(function(){
			     //window.location.href="";
			   
		   });
		   $("#div_club").click(function(){
			   window.location.href="${basePath}/club";
		   });	
		   $("#div_article").click(function(){
			   
		   });

		   $("#icon-user").click(function(){
			   
		   });
		   $("#div_activity").click(function(){
			   
		   });		   

		   $("#div_config").click(function(){
			   
		   });	
		   
		});

	</script>

	<!-- END JAVASCRIPTS -->

	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push([ '_setAccount', 'UA-37564768-1' ]);
		_gaq.push([ '_setDomainName', 'keenthemes.com' ]);
		_gaq.push([ '_setAllowLinker', true ]);
		_gaq.push([ '_trackPageview' ]);
		(function() {
			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://'
					: 'http://')
					+ 'stats.g.doubleclick.net/dc.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
		})();
	</script>
	<decorator:head />
</head>

<!-- END HEAD -->

<!-- BEGIN BODY -->

<body class="page-header-fixed">
<script type="text/javascript">
</script>
	<decorator:getProperty property="body.id" writeEntireProperty="true"/>
	<decorator:getProperty property="body.class" writeEntireProperty="true"/>
	
	<!-- BEGIN HEADER -->

	<div class="header navbar navbar-inverse navbar-fixed-top">

		<!-- BEGIN TOP NAVIGATION BAR -->

		<div class="navbar-inner">

			<div class="container-fluid">
			
               <ul class="nav pull-left">
               
                 <li>
				    <a class="brand" href="${basePath}/circles" style="width:34px;margin-top: -5px;"> <img
					       src="${ctx}/scripts/leyye.bootstrap/media/image/logo.png" alt="" width="34" height="34"/>
				    </a>               
                 
                 </li>
                 
                 <li>
                   	<a id="a_support" class="brand icon-th" href="javascript:void(0)" style="width:34px; margin-left: 10px;margin-top: 5px;"> 
				    </a>
				    <div id="div_support" class="leyye_support"> 
                     
                       <div class="row-fluid">
                         
                          <div id="div_circle" class="span4">
                            <div class="tile  support_tile span4">
						      <div class="tile-body">
							      <i class="icon-inbox" style="width: 100%;"></i>
							       <div  align="center" style="margin-top: 10px;">
							                    领域
							       </div>
					         </div>
                            </div>                       
                          </div>
                       
                           <div id="div_club" class="span4">
                              <div class="tile  support_tile span4">
						         <div class="tile-body">
							        <i class="icon-comments-alt" style="width: 100%;"></i>
							       <div  align="center" style="margin-top: 10px;">
							                        俱乐部         
							       </div>
					             </div>
                               </div>                          
                           </div>
                           
                           <div class="span4">
                               <div id="div_article" class="tile  support_tile span4">
						            <div class="tile-body">
							           <i class="icon-file-text" style="width: 100%;"></i>
							           <div  align="center" style="margin-top: 10px;">
							                                    文章
							           </div>
					                 </div>
                               </div>                             
                           </div>

                         </div>
 
                        <div class="row-fluid">
                         
                          <div id="div_user" class="span4">
                            <div class="tile  support_tile span4">
						      <div class="tile-body">
							      <i class="icon-user" style="width: 100%;"></i>
							       <div  align="center" style="margin-top: 10px;">
							                    用户
							       </div>
					         </div>
                            </div>                       
                          </div>
                       
                           <div id="div_activity" class="span4">
                              <div class="tile  support_tile span4">
						         <div class="tile-body">
							        <i class="icon-archive" style="width: 100%;"></i>
							       <div  align="center" style="margin-top: 10px;">
							                        活动         
							       </div>
					             </div>
                               </div>                          
                           </div>
                           
                           <div id="div_config" class="span4">
                               <div class="tile  support_tile span4">
						            <div class="tile-body">
							           <i class="icon-cog" style="width: 100%;"></i>
							           <div  align="center" style="margin-top: 10px;">
							                                     系统设置
							           </div>
					                 </div>
                               </div>                             
                           </div>

                         </div>
                         
                                                 
				     </div>	
				       <!-- END SUPPORT -->
			     </li>
			     
			    </ul>                
                 


				<!-- BEGIN RESPONSIVE MENU TOGGLER -->

				<a href="javascript:;" class="btn-navbar collapsed"
					data-toggle="collapse" data-target=".nav-collapse"><img
					src="${ctx}/scripts/leyye.bootstrap/media/image/menu-toggler.png" alt="" />
				</a>

				<!-- END RESPONSIVE MENU TOGGLER -->

				<!-- BEGIN TOP NAVIGATION MENU -->

				<ul class="nav pull-right">

					<!-- BEGIN NOTIFICATION DROPDOWN -->

					<li class="dropdown" id="header_notification_bar"><a href="#"
						class="dropdown-toggle" data-toggle="dropdown"> <i
							class="icon-warning-sign"></i> <span class="badge">6</span>

					</a>

						<ul class="dropdown-menu extended notification">

							<li>

								<p>You have 14 new notifications</p>

							</li>

							<li><a href="#"> <span class="label label-success"><i
										class="icon-plus"></i></span> New user registered. <span class="time">Just
										now</span>

							</a></li>

							<li><a href="#"> <span class="label label-important"><i
										class="icon-bolt"></i></span> Server #12 overloaded. <span
									class="time">15 mins</span>

							</a></li>

							<li><a href="#"> <span class="label label-warning"><i
										class="icon-bell"></i></span> Server #2 not respoding. <span
									class="time">22 mins</span>

							</a></li>

							<li><a href="#"> <span class="label label-info"><i
										class="icon-bullhorn"></i></span> Application error. <span
									class="time">40 mins</span>

							</a></li>

							<li><a href="#"> <span class="label label-important"><i
										class="icon-bolt"></i></span> Database overloaded 68%. <span
									class="time">2 hrs</span>

							</a></li>

							<li><a href="#"> <span class="label label-important"><i
										class="icon-bolt"></i></span> 2 user IP blocked. <span class="time">5
										hrs</span>

							</a></li>

							<li class="external"><a href="#">See all notifications <i
									class="m-icon-swapright"></i></a></li>

						</ul></li>

					<!-- END NOTIFICATION DROPDOWN -->

					<!-- BEGIN INBOX DROPDOWN -->

					<li class="dropdown" id="header_inbox_bar"><a href="#"
						class="dropdown-toggle" data-toggle="dropdown"> <i
							class="icon-envelope"></i> <span class="badge">5</span>

					</a>

						<ul class="dropdown-menu extended inbox">

							<li>

								<p>You have 12 new messages</p>

							</li>

							<li><a href="inbox.html?a=view"> <span class="photo"><img
										src="${ctx}/scripts/leyye.bootstrap/media/image/avatar2.jpg" alt="" /></span> <span class="subject">

										<span class="from">Lisa Wong</span> <span class="time">Just
											Now</span>

								</span> <span class="message"> Vivamus sed auctor nibh congue
										nibh. auctor nibh auctor nibh... </span>

							</a></li>

							<li><a href="inbox.html?a=view"> <span class="photo"><img
										src="${ctx}/scripts/leyye.bootstrap/media/image/avatar3.jpg" alt="" /></span> <span class="subject">

										<span class="from">Richard Doe</span> <span class="time">16
											mins</span>

								</span> <span class="message"> Vivamus sed congue nibh auctor
										nibh congue nibh. auctor nibh auctor nibh... </span>

							</a></li>

							<li><a href="inbox.html?a=view"> <span class="photo"><img
										src="${ctx}/scripts/leyye.bootstrap/media/image/avatar1.jpg" alt="" /></span> <span class="subject">

										<span class="from">Bob Nilson</span> <span class="time">2
											hrs</span>

								</span> <span class="message"> Vivamus sed nibh auctor nibh
										congue nibh. auctor nibh auctor nibh... </span>

							</a></li>

							<li class="external"><a href="inbox.html">See all
									messages <i class="m-icon-swapright"></i>
							</a></li>

						</ul></li>

					<!-- END INBOX DROPDOWN -->

					<!-- BEGIN TODO DROPDOWN -->

					<li class="dropdown" id="header_task_bar"><a href="#"
						class="dropdown-toggle" data-toggle="dropdown"> <i
							class="icon-tasks"></i> <span class="badge">5</span>

					</a>

						<ul class="dropdown-menu extended tasks">

							<li>

								<p>You have 12 pending tasks</p>

							</li>

							<li><a href="#"> <span class="task"> <span
										class="desc">New release v1.2</span> <span class="percent">30%</span>

								</span> <span class="progress progress-success "> <span
										style="width: 30%;" class="bar"></span>

								</span>

							</a></li>

							<li><a href="#"> <span class="task"> <span
										class="desc">Application deployment</span> <span
										class="percent">65%</span>

								</span> <span class="progress progress-danger progress-striped active">

										<span style="width: 65%;" class="bar"></span>

								</span>

							</a></li>

							<li><a href="#"> <span class="task"> <span
										class="desc">Mobile app release</span> <span class="percent">98%</span>

								</span> <span class="progress progress-success"> <span
										style="width: 98%;" class="bar"></span>

								</span>

							</a></li>

							<li><a href="#"> <span class="task"> <span
										class="desc">Database migration</span> <span class="percent">10%</span>

								</span> <span class="progress progress-warning progress-striped">

										<span style="width: 10%;" class="bar"></span>

								</span>

							</a></li>

							<li><a href="#"> <span class="task"> <span
										class="desc">Web server upgrade</span> <span class="percent">58%</span>

								</span> <span class="progress progress-info"> <span
										style="width: 58%;" class="bar"></span>

								</span>

							</a></li>

							<li><a href="#"> <span class="task"> <span
										class="desc">Mobile development</span> <span class="percent">85%</span>

								</span> <span class="progress progress-success"> <span
										style="width: 85%;" class="bar"></span>

								</span>

							</a></li>

							<li class="external"><a href="#">See all tasks <i
									class="m-icon-swapright"></i></a></li>

						</ul></li>

					<!-- END TODO DROPDOWN -->

					<!-- BEGIN USER LOGIN DROPDOWN -->

					<li class="dropdown user"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown"> <img alt=""
							src="${ctx}/scripts/leyye.bootstrap/media/image/avatar1_small.jpg" /> <span class="username">${currentUser.username}</span> <i class="icon-angle-down"></i>

					</a>

						<ul class="dropdown-menu">

							<li><a href="extra_profile.html"><i class="icon-user"></i>
									My Profile</a></li>

							<li><a href="page_calendar.html"><i
									class="icon-calendar"></i> My Calendar</a></li>

							<li><a href="inbox.html"><i class="icon-envelope"></i>
									My Inbox(3)</a></li>

							<li><a href="#"><i class="icon-tasks"></i> My Tasks</a></li>

							<li class="divider"></li>

							<li><a href="extra_lock.html"><i class="icon-lock"></i>
									Lock Screen</a></li>

							<li><a href="login.html"><i class="icon-key"></i> Log
									Out</a></li>

						</ul></li>

					<!-- END USER LOGIN DROPDOWN -->

				</ul>

				<!-- END TOP NAVIGATION MENU -->

			</div>

		</div>

		<!-- END TOP NAVIGATION BAR -->

	</div>

	<!-- END HEADER -->

	<!-- BEGIN CONTAINER -->

	<div class="page-container row-fluid">

		<!-- BEGIN SIDEBAR -->

		<div class="page-sidebar nav-collapse collapse">

			<!-- BEGIN SIDEBAR MENU -->

			<ul class="page-sidebar-menu">

				<li>
					<!-- BEGIN SIDEBAR TOGGLER BUTTON -->

					<div class="sidebar-toggler hidden-phone"></div> <!-- BEGIN SIDEBAR TOGGLER BUTTON -->

				</li>

				<li>
					<!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->

					<form class="sidebar-search">

						<div class="input-box">

							<a href="javascript:;" class="remove"></a> <input type="text"
								placeholder="Search..." /> <input type="button" class="submit"
								value=" " />

						</div>

					</form> <!-- END RESPONSIVE QUICK SEARCH FORM -->

				</li>

				<li class="start "><a href="index.html"> <i
						class="icon-home"></i> <span class="title">服务指南</span>

				</a></li>

				<li class=""><a href="javascript:;"> <i class="icon-cogs"></i>

						<span class="title">领域管理</span> <span class="arrow "></span>

				</a>

					<ul class="sub-menu">

						<li><a href="layout_horizontal_sidebar_menu.html">

								领域</a></li>

						<li><a href="layout_horizontal_menu1.html"> 置顶项</a></li>

					</ul></li>

				<li class=""><a href="javascript:;"> <i
						class="icon-bookmark-empty"></i> <span class="title">文章管理</span> <span class="arrow "></span>

				</a>

					<ul class="sub-menu">

						<li><a href="ui_general.html"> 文章</a></li>

						<li><a href="ui_buttons.html"> Buttons</a></li>

					</ul></li>

				<li class=""><a href="javascript:;"> <i class="icon-table"></i>

						<span class="title">服务号管理</span> <span class="arrow "></span>

				</a>

					<ul class="sub-menu">

						<li><a href="form_layout.html"> 服务号</a></li>

						<li><a href="form_samples.html"> Advance Form Samples</a></li>

					</ul></li>

				<li class="active "><a href="javascript:;"> <i
						class="icon-briefcase"></i> <span class="title">系统设置</span> <span
						class="selected"></span> <span class="arrow open"></span>

				</a>

					<ul class="sub-menu">

						<li><a href="page_timeline.html"> <i class="icon-time"></i>

								用户管理
						</a></li>

						<li><a href="page_coming_soon.html"> <i
								class="icon-cogs"></i> Coming Soon
						</a></li>

						<li class="active"><a href="page_about.html"> <i
								class="icon-group"></i> About Us
						</a></li>

					</ul></li>







				<li class="last "><a href="charts.html"> <i
						class="icon-bar-chart"></i> <span class="title">退出</span>

				</a></li>

			</ul>

			<!-- END SIDEBAR MENU -->

		</div>

		<!-- END SIDEBAR -->
		

		<!-- BEGIN PAGE -->

		<div class="page-content" style="margin-left: 0px;">

			<!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->

			<div id="portlet-config" class="modal hide">

				<div class="modal-header">

					<button data-dismiss="modal" class="close" type="button"></button>

					<h3>portlet Settings</h3>

				</div>

				<div class="modal-body">

					<p>Here will be a configuration form</p>

				</div>

			</div>

			<!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->

			<!-- BEGIN PAGE CONTAINER-->

			<div class="container-fluid">
                 <decorator:body/>
			</div>

			<!-- END PAGE CONTAINER-->

		</div>

		<!-- END PAGE -->

	</div>

	<!-- END CONTAINER -->

	<!-- BEGIN FOOTER -->

	<div class="footer">

		<div class="footer-inner">深圳领域天马网络有限公司 2014 &copy; 版权所有 粤ICP备14044637号.</div>

		<div class="footer-tools">

			<span class="go-top"> <i class="icon-angle-up"></i>

			</span>

		</div>

	</div>

	<!-- END FOOTER -->


</body>

<!-- END BODY -->

</html>

<%@ page pageEncoding="UTF-8"%>
<%@ include file="/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->

<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->

<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->

<!-- BEGIN HEAD -->

<head>

	<meta charset="utf-8" />

	<title>MTC100 | 登录</title>

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

	<link href="${ctx}/scripts/leyye.bootstrap/media/css/login.css" rel="stylesheet" type="text/css"/>

	<!-- END PAGE LEVEL STYLES -->

	<link rel="shortcut icon" href="${ctx}/images/MTC100.png" />

</head>

<!-- END HEAD -->

<!-- BEGIN BODY -->

<body class="login">

   <!-- 背景层"C:/Users/ADMINI~1/AppData/Local/Temp/lj3u60k1.bmp" -->
   <div id="background" style="position:absolute;z-index:-1;width:100%;height:100%;top:0px;left:0px;">
         <img src="${ctx}/images/piotrfurman4.jpg" style="width: 100%;height:100%;"/>
   </div>


	<!-- BEGIN LOGO -->

	<div class="logo">

		<img src="${ctx}/images/MTC100.png" width="130" height="130" alt="" />

	</div>

	<!-- END LOGO -->

	<!-- BEGIN LOGIN -->

	<div class="content">

		<!-- BEGIN LOGIN FORM -->

		<form class="form-vertical login-form" method="post" action="${basePath}/login">

			<h3 class="form-title">登录</h3>

			<div class="alert alert-error hide">

				<button class="close" data-dismiss="alert"></button>

				<span>
				    <c:choose>
				      <c:when test="${not empty errors or not empty message}">
				          ${message}
				      </c:when>
				      <c:otherwise>
				                               请输入用户名与密码.
				      </c:otherwise>
				    </c:choose>
				 
				  </span>

			</div>

			<div class="control-group">

				<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->

				<label class="control-label visible-ie8 visible-ie9">Username</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-user"></i> <input class="m-wrap placeholder-no-fix"
							type="text" placeholder="请输入用户名" name="username" />

					</div>

				</div>

			</div>

			<div class="control-group">

				<label class="control-label visible-ie8 visible-ie9">Password</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-lock"></i> <input class="m-wrap placeholder-no-fix"
							type="password" placeholder="请输入密码" name="password" />

					</div>

				</div>

			</div>

			<div class="form-actions">

				<label class="checkbox"> <input type="checkbox"
					name="remember" value="1" /> 记住我

				</label>

				<button type="submit" class="btn green pull-right">

					登录 <i class="m-icon-swapright m-icon-white"></i>

				</button>

			</div>

			<div class="forget-password">

				<h4>忘记密码  ？</h4>

				<p>

					请单击 <a href="javascript:;" class=""
						id="forget-password">这里</a> 重置您的密码.

				</p>

			</div>
           
           <!-- 
			<div class="create-account">

				<p>

					Don't have an account yet ?&nbsp; <a href="javascript:;"
						id="register-btn" class="">Create an account</a>

				</p>

			</div>
            -->
		</form>

		<!-- END LOGIN FORM -->

		<!-- BEGIN FORGOT PASSWORD FORM -->

		<form class="form-vertical forget-form" action="index.html">

			<h3 class="">忘记密码 ?</h3>

			<p>请在下方输入您的电子邮件，系统将发送一封密码修改邮件给您.</p>

			<div class="control-group">

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-envelope"></i> <input
							class="m-wrap placeholder-no-fix" type="text" placeholder="Email"
							name="email" />

					</div>

				</div>

			</div>

			<div class="form-actions">

				<button type="button" id="back-btn" class="btn">

					<i class="m-icon-swapleft"></i> Back

				</button>

				<button type="submit" class="btn green pull-right">

					确认 <i class="m-icon-swapright m-icon-white"></i>

				</button>

			</div>

		</form>

		<!-- END FORGOT PASSWORD FORM -->

		<!-- BEGIN REGISTRATION FORM -->

		<form class="form-vertical register-form" action="index.html">

			<h3 class="">Sign Up</h3>

			<p>Enter your account details below:</p>

			<div class="control-group">

				<label class="control-label visible-ie8 visible-ie9">Username</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-user"></i> <input class="m-wrap placeholder-no-fix"
							type="text" placeholder="Username" name="username" />

					</div>

				</div>

			</div>

			<div class="control-group">

				<label class="control-label visible-ie8 visible-ie9">Password</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-lock"></i> <input class="m-wrap placeholder-no-fix"
							type="password" id="register_password" placeholder="Password"
							name="password" />

					</div>

				</div>

			</div>

			<div class="control-group">

				<label class="control-label visible-ie8 visible-ie9">Re-type
					Your Password</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-ok"></i> <input class="m-wrap placeholder-no-fix"
							type="password" placeholder="Re-type Your Password"
							name="rpassword" />

					</div>

				</div>

			</div>

			<div class="control-group">

				<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->

				<label class="control-label visible-ie8 visible-ie9">Email</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-envelope"></i> <input
							class="m-wrap placeholder-no-fix" type="text" placeholder="Email"
							name="email" />

					</div>

				</div>

			</div>

			<div class="control-group">

				<div class="controls">

					<label class="checkbox"> <input type="checkbox" name="tnc" />
						I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy
							Policy</a>

					</label>

					<div id="register_tnc_error"></div>

				</div>

			</div>

			<div class="form-actions">

				<button id="register-back-btn" type="button" class="btn">

					<i class="m-icon-swapleft"></i> Back

				</button>

				<button type="submit" id="register-submit-btn"
					class="btn green pull-right">

					Sign Up <i class="m-icon-swapright m-icon-white"></i>

				</button>

			</div>

		</form>

		<!-- END REGISTRATION FORM -->

	</div>

	<!-- END LOGIN -->

	<!-- BEGIN COPYRIGHT -->

	<div class="copyright" style="color: #000000;">邓玉龙 2015 © 版权所有 粤ICP备14044637号.</div>

	<!-- END COPYRIGHT -->

	<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->

	<!-- BEGIN CORE PLUGINS -->

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/jquery-1.10.1.min.js" type="text/javascript"></script>

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/jquery-migrate-1.2.1.min.js"
		type="text/javascript"></script>

	<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/jquery-ui-1.10.1.custom.min.js"
		type="text/javascript"></script>

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

	<!-- BEGIN PAGE LEVEL PLUGINS -->

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/jquery.validate.min.js" type="text/javascript"></script>

	<!-- END PAGE LEVEL PLUGINS -->

	<!-- BEGIN PAGE LEVEL SCRIPTS -->

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/app.js" type="text/javascript"></script>

	<script src="${ctx}/scripts/leyye.bootstrap/media/js/login.js" type="text/javascript"></script>

	<!-- END PAGE LEVEL SCRIPTS -->

	<script>

		jQuery(document).ready(function() {     

		  App.init();

		  Login.init();
		  
		  var serverMessage = '${message}';
		  if(serverMessage != null && serverMessage != ""){
			  $('.alert-error', $('.login-form')).show();
		  }

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
</body>

<!-- END BODY -->

</html>
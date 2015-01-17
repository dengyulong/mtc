package com.mtc.admin.webapp;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * 认证过滤器，根据accessToken参数，判断当前session中是否存在相等的令牌，若不存在则认证失败，返回json格式错误信息
 * @author Drencky
 *
 */
public class AuthenticationFilter implements Filter{
    private static Logger log = LoggerFactory.getLogger(AuthenticationFilter.class);
    
    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
            FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        HttpSession session = httpServletRequest.getSession(true);
        HttpServletResponse httpServletResponse = (HttpServletResponse) response;
        String path = httpServletRequest.getRequestURI();
        String contextPath = httpServletRequest.getContextPath();
        String loginURI = "/admin/login";
        String[] protectedUris = null;
        
        log.debug("authentication url:" + path);
        
        if(isLogin(session) || path.startsWith(contextPath + loginURI)) {
            chain.doFilter(request, response);
        }
        else {
            httpServletResponse.sendRedirect(contextPath + "/login.jsp");
        }
                
        /*if(protectedUris != null && protectedUris.length > 0 && !isLogin(session)) {
            boolean isProtectedRequest = false;
            for(String protectedUri:protectedUris) {
                if(path.startsWith(contextPath + protectedUri)) {
                    isProtectedRequest = true;
                    break;
                }
            }
            
            if(isProtectedRequest) {
                //TODO:提醒没有权限
                return;
            }
            else {
                log.info("the request uri is not protected");
                chain.doFilter(request, response);
            }
        }
        else {
            log.info("there is no protected uri.");
            chain.doFilter(request, response);
        }*/
        
        
        /*if(path.startsWith(contextPath + loginURI) || path.startsWith(contextPath + upgradeURI) || path.startsWith(contextPath + resPath)){
            //log.debug("pass url:" + path);
            
            chain.doFilter(request, response);
        }
        else {
            Object currentUser = session.getAttribute(Constants.CURRENT_USER);
            
            //String accessToken = request.getParameter("accessToken");
            //Object sessionAccessToken = session.getAttribute(JsonResult.KEY_ACCESS_TOKEN);
            //if(currentUser == null || accessToken == null || sessionAccessToken == null || !accessToken.equals(sessionAccessToken.toString())) {
            //if(false) {
            if(currentUser == null ) {
                httpServletResponse.setCharacterEncoding("UTF-8");
                httpServletResponse.setContentType("application/json");
                JsonResult result = new JsonResult();
                result.setError(JsonResult.ERROR_SESSION_TIME_OUT);
                httpServletResponse.getWriter().write(result.toJsonStringWithoutData());
            }
            else {
                chain.doFilter(request, response);
            }
        }*/
    }
    
    private boolean isLogin(HttpSession session) {
        boolean isLogin = false;
//        Object currentUser = session.getAttribute(Constants.CURRENT_USER);
//        if(currentUser != null) {
//            isLogin = true;
//        }
        return isLogin;
    }

    @Override
    public void destroy() {
        
    }

    @Override
    public void init(FilterConfig arg0) throws ServletException {
        log.info("MobileAuthenticationFilter init...");
    }
}

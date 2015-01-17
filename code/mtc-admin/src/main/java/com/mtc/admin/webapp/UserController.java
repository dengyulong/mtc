package com.mtc.admin.webapp;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 用户控制器
 * @author dengyulongs
 *
 */
@Controller
@RequestMapping("/user")
public class UserController {

	
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(String username, String password,
			HttpServletRequest request) {
          
		if(StringUtils.isEmpty(username) || StringUtils.isEmpty(password)){
			
		}
		 
		
		
		return "redirect:/admin/dashboard";
	}
	
	
}

package com.tgr.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;


@ControllerAdvice
public class BaseController {

	/*@ModelAttribute("currentUser")
	public User currentUser(HttpServletRequest request) {
		User user = (User)request.getSession().getAttribute("currentUser");
		System.out.println("currentUser name :"+(user == null ? "null" : user.getName()));
		return user;
	}*/
	
	//@ExceptionHandler(value = {Exception.class,RuntimeException.class})
	@ResponseBody
	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	public int handlerException(HttpServletRequest request, Throwable ex) {
		System.err.println("路径 "+request.getRequestURI()+"出现异常: "+ex.getMessage());
		return 400;
	}
	
}

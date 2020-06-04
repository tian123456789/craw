package com.tgr.component.servlet;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.stereotype.Component;

@Component
public class MyServletContextInitializer implements ServletContextInitializer {

	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		System.err.println("servlet容器已经启动: with : "+"com.tgr.component.servlet.MyServletContextInitializer#onStartup(ServletContext)");
	}

}

package com.tgr.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.http.HttpServletRequest;

import Zorg.springframework.util.AntPathMatcher;
import Zorg.springframework.util.Assert;
import Zorg.springframework.util.PathMatcher;

@WebFilter(filterName = "antPathMatcherFilter",urlPatterns = "/pathMatcher/*",
			initParams = {
					@WebInitParam(name = "preParam",value = "true")
					}
)
@SuppressWarnings("all")
public class AntPathMatcherFilter implements Filter{
	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
	
		
		ServletContext servletContext = request.getServletContext();
		
		String contextPath = servletContext.getContextPath();
		String remoteAddr = request.getRemoteAddr();
		request.getAttribute("");
		
		HttpServletRequest httpServletRequest = (HttpServletRequest)request;
		String url = httpServletRequest.getRequestURI();
		
		System.err.println("URL是 :" + url);
		System.err.println("远程地址是: " + remoteAddr);
		System.err.println("contextPath是: "+ contextPath);
		
		PathMatcher pathMatcher = new AntPathMatcher();
		
		String patternPath = "/pathMatcher/*";
		Assert.isTrue(pathMatcher.match(patternPath, url), "测试路径匹配不可能不对");
		
		
		chain.doFilter(request, response);
		
	}

	@Override
	public void destroy() {
		
	}

}

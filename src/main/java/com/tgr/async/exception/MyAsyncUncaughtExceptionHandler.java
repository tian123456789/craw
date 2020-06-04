package com.tgr.async.exception;

import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;

import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;
import org.springframework.stereotype.Component;

@Component
public class MyAsyncUncaughtExceptionHandler implements AsyncUncaughtExceptionHandler{

	@Override
	public void handleUncaughtException(Throwable ex, Method method, Object... params) {
		
		List<Object> paramList = Arrays.asList(params);
		
		System.err.println("进入异常处理器");
		if(method.getName().equals("auditNoticeSms")) {
			System.err.println("是这个方法");
			System.err.println("参数是: "+paramList.get(0));
		}
	}

}

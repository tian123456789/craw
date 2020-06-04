package com.tgr.async.service;


import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;


@Component
public class AsyncSendSmsService {

	@Async("asyncThreadPoolTaskExecutor")
	public void auditNoticeSms(int id) {
		System.err.println("当前线程: "+Thread.currentThread().getName());
		int a = id/0;
	}
	
	public synchronized void updateOrder(String orderId) {
		
	}
	
}

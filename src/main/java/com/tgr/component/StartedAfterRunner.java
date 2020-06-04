package com.tgr.component;

import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(value = Ordered.HIGHEST_PRECEDENCE-1)
public class StartedAfterRunner implements CommandLineRunner{

	@Override
	public void run(String... args) throws Exception {
		
		System.err.println("应用启动了 !!!! 我在这做点啥呢");
		
	}

}

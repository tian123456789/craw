package com.tgr.component;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(value = Ordered.HIGHEST_PRECEDENCE-9)
public class StartedAfterRunner2 implements ApplicationRunner{

	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.err.println("程序启动后!!!!!!!!!!!!!!!我做点啥222");
	}

}

package com.tgr.test.spring.util.systemPropertyUtils;

import org.junit.Test;

import Zorg.springframework.util.SystemPropertyUtils;

public class TestSystemPropertyUtils {

	@Test
	public void test() {
		System.err.println(SystemPropertyUtils.resolvePlaceholders("${os.name}/logs/app.log"));
		System.err.println(SystemPropertyUtils.resolvePlaceholders("${app.root}/logs/app.log", true));
	}
	
}

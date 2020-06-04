package com.tgr.test.spring.util.version;

import org.junit.Test;
import org.springframework.boot.SpringBootVersion;
import org.springframework.core.SpringVersion;

public class TestVersion {

	@Test
	public void test() {
		System.err.println(SpringVersion.getVersion());
		System.err.println(SpringBootVersion.getVersion());
	}
}

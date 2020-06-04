package com.tgr.test.spring.util.StringUtils;

import java.util.Properties;

import org.junit.Test;

import Zorg.springframework.util.StringUtils;

public class TestStringUtils {

	@Test
	public void test() {
		String[] strs = new String[] {"key:value","key2:中文"};
		Properties ps = StringUtils.splitArrayElementsIntoProperties(strs, ":");
		System.err.println(ps);
	}
}

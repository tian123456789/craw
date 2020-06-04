package com.tgr.test.spring.util.resourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.junit.Test;
import org.springframework.core.io.ClassPathResource;

import Zorg.springframework.util.ResourceUtils;

public class TestResourceUtils {

	@Test
	public void test() throws FileNotFoundException {
		File file = ResourceUtils.getFile("classpath:application.properties");
		System.err.println(file);//E:\workspace\tgr\tgr-video-crawler\target\test-classes\application.properties
		
		System.err.println(ResourceUtils.isUrl("classpath:application.properties"));//true
		
		System.err.println(ResourceUtils.getURL("classpath:application.properties"));
		//file:/E:/workspace/tgr/tgr-video-crawler/target/test-classes/application.properties
	}
	
	@Test
	public void test2() throws IOException {
		ClassPathResource resource = new ClassPathResource("application.properties");
		File file = resource.getFile();
		System.err.println(resource);
		System.err.println(file);
	}
}

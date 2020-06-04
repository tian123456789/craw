package com.tgr.test.spring.util.propertyPlaceholderHelper;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.junit.Test;

import Zorg.springframework.util.PropertyPlaceholderHelper;

public class TestPropertyPlaceholderHelper {

	@Test
	public void test() throws IOException {
		
		/*
		 * 	name=wangzha
			age=18
			sex=man
			name18man=love
		*/
		
		String a = "{name}{age}{sex}";
		String b = "{name}{age}{sex}";
		
		String filePath = "D:\\testUtil\\application.properties";
		PropertyPlaceholderHelper pph = new PropertyPlaceholderHelper("{","}");
		InputStream in = new BufferedInputStream(new FileInputStream(new File(filePath)));
		
		Properties properties = new Properties();
		properties.load(in);
		
		//=================开始解析========================
		System.err.println("替换前: "+a);//{name}{age}{sex}
		System.err.println("替换后: "+pph.replacePlaceholders(a, properties));//wangzha18man
		
		System.err.println("==========================================================");
		
		System.err.println("替换前: "+b);//{name}{age}{sex}
		System.err.println("替换后: "+properties);//{name18man=love, age=18, name=wangzha, sex=man}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

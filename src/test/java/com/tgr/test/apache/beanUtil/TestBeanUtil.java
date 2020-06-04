package com.tgr.test.apache.beanUtil;

import java.awt.Point;
import java.lang.reflect.InvocationTargetException;

import org.apache.commons.beanutils.BeanUtils;
import org.junit.Test;

public class TestBeanUtil {
	
	@Test
	public void test() throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
		Point point = new Point(2 , 5);
		String proName = "x";
		BeanUtils.setProperty(point, proName, "8");
		
		System.err.println(point.getX());
		System.err.println(BeanUtils.getProperty(point, proName));
		System.err.println(BeanUtils.getProperty(point, proName).getClass().getName());
		
		BeanUtils.setProperty(point, proName, 8);
		System.err.println(point.getX());
		System.err.println(BeanUtils.getProperty(point, proName).getClass().getName());
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

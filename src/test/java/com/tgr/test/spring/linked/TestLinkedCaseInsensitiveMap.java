package com.tgr.test.spring.linked;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import Zorg.springframework.util.LinkedMultiValueMap;

import Zorg.springframework.util.LinkedCaseInsensitiveMap;

public class TestLinkedCaseInsensitiveMap {

	/**
	 * LinkedCaseInsensitiveMap
	 * key不区分大小写
	 */
	@Test
	public void test() {
		
		Map<String, Object> map = new LinkedCaseInsensitiveMap<>();
		
		map.put("a", "1");
		map.put("A", "2");
		
		System.err.println(map.get("a"));//2
		System.err.println(map.get("A"));//2
		System.err.println(map);//{A=2}
		
	}
	
	@Test
	public void test2() {
		
		Map<String, List<Object>> map = new LinkedMultiValueMap<>();
		map.put("a", Arrays.asList(1));
		map.put("a", Arrays.asList(2));
		map.put("a", Arrays.asList(3));
		System.err.println(map);//{a=[3]} 父Map  put方法没有效果
		
		LinkedMultiValueMap<String, List<Object>> map2 = new LinkedMultiValueMap<>();
		map2.add("a", Arrays.asList(1));
		map2.add("a", Arrays.asList(2));
		map2.add("a", Arrays.asList(3));
		System.err.println(map2);//{a=[[1], [2], [3]]}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

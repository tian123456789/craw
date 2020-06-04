package com.tgr.test.spring.util;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Test;

import Zorg.springframework.util.ConcurrentReferenceHashMap;

public class TestConcurrentReferenceHashMap {

	@Test
	public void test() throws InterruptedException {
		
		String key = new String("key");
		String value = new String("val");
		
		Dog dog = new TestConcurrentReferenceHashMap().new Dog("旺财");
		
		Map<String, Object> map 
			= new ConcurrentReferenceHashMap<>(8, ConcurrentReferenceHashMap.ReferenceType.WEAK);
		
		map.put(key, value);
		map.put("dog", new TestConcurrentReferenceHashMap().new Dog("旺财2"));
		//key = null;
		map.put("1","a");
		TimeUnit.SECONDS.sleep(1);
		
		User user = new TestConcurrentReferenceHashMap().new User();
		user.setName((String)map.get("key"));
		user.setMap(map);
		user.setDog((Dog)map.get("dog"));
		
		System.err.println("GC前map取Key值Value: " + map.get("1"));
		
		System.gc();
		TimeUnit.MILLISECONDS.sleep(5000);
		
		System.err.println("GC后用户里Map: " + user.getMap().toString());
		System.err.println("GC后用户的爱犬: " + user.getDog().toString());
		
		System.err.println("GC后的Map: " + map);
		
	}
	
	class User{
		private String name;
		
		private Dog dog;
		
		private Map<String, Object> map;

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public Map<String, Object> getMap() {
			return map;
		}

		public void setMap(Map<String, Object> map) {
			this.map = map;
		}

		public Dog getDog() {
			return dog;
		}

		public void setDog(Dog dog) {
			this.dog = dog;
		}
		
	}
	
	class Dog{
		private String name;

		public Dog(String name) {
			super();
			this.name = name;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}
		
		@Override
		public String toString() {
			return this.getName();
		}
	}
}

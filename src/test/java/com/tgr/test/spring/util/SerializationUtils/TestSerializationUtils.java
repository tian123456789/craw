package com.tgr.test.spring.util.SerializationUtils;

import java.io.Serializable;

import javax.persistence.Transient;

import org.junit.Test;

import Zorg.springframework.util.SerializationUtils;

public class TestSerializationUtils implements Serializable{

	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@Test
	public void test() {
		byte[] bytes = SerializationUtils.serialize(new TestSerializationUtils().new Person2("王二麻子", 19)); 
		System.err.println(bytes);
		
		Person2 person2 = (Person2) SerializationUtils.deserialize(bytes);
		System.err.println(person2.getName());
	}
	
class Person2 implements Cloneable,Serializable{
		
	private static final long serialVersionUID = 1L;

		@Transient
		private String name;
		
		private int age;
		
		public Person2(String name, int age) {
			super();
			this.name = name;
			this.age = age;
		}
		
		public Person2(){
		}

		public String getName() {
			System.err.println("getName方法");
			return name;
		}

		public void setName(String name) {
			System.err.println("setName方法");
			this.name = name;
		}
		
		public int getAge() {
			return age;
		}

		public void setAge(int age) {
			this.age = age;
		}

		@Override
		protected Object clone() throws CloneNotSupportedException {
			return super.clone();
		}
		
		@SuppressWarnings("unused")
		private void privateMethod() throws Exception{
			System.err.println("调用了私有方法");
		}
		
	}
}

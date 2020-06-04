package com.tgr.test.spring.util.socketUtils;

import java.io.Serializable;

import javax.persistence.Transient;

import org.junit.Test;

import Zorg.springframework.util.SocketUtils;


public class TestSocketUtils {

	@Test
	public void test() {
		System.err.println(SocketUtils.PORT_RANGE_MIN+"~"+SocketUtils.PORT_RANGE_MAX);
		System.err.println(SocketUtils.findAvailableTcpPort());
		System.err.println(SocketUtils.findAvailableTcpPort(1000, 2000));
		
		System.err.println(SocketUtils.findAvailableTcpPorts(10, 1000, 2000));
		
		System.err.println(SocketUtils.findAvailableUdpPort());
	}
	
	class Person3 implements Cloneable,Serializable{
		
		private static final long serialVersionUID = 1L;

			@Transient
			private String name;
			
			private int age;
			
			public Person3(String name, int age) {
				super();
				this.name = name;
				this.age = age;
			}
			
			public Person3(){
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

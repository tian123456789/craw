package com.tgr.test.spring.util.reflectionUtils;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import javax.persistence.Transient;

import org.junit.Test;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tgr.bean.MyClass;

import Zorg.springframework.util.ReflectionUtils;

public class TestRefelectionUtils {

	@Test
	public void test() {
		Person person = new Person();
		person.setName("呼哈哈");
		
		Field field = ReflectionUtils.findField(Person.class, "name");
		field.setAccessible(true);
		
		System.err.println(ReflectionUtils.getField(field, person));
	}
	
	@Test
	@SuppressWarnings("all")
	public void test2() throws IllegalAccessException, IllegalArgumentException, InvocationTargetException {
		Person person = new Person("张三", 18);
		System.err.println(ReflectionUtils.findMethod(Person.class, "clone"));
		System.err.println(ReflectionUtils.findMethod(Person.class, "getName"));
		System.err.println(ReflectionUtils.findMethod(Person.class, "setName" , String.class));
		System.err.println(ReflectionUtils.findMethod(Person.class, "privateMethod"));
		
		Method privateMethod = ReflectionUtils.findMethod(Person.class, "privateMethod");
		privateMethod.setAccessible(true);
		privateMethod.invoke(person, null);
	}
	
	@Test
	public void test3() {
		try {
			//System.err.println(2/0);
			throw new NoSuchMethodException("测试处理没有实例方法异常");
		} catch (Exception e) {
			ReflectionUtils.handleReflectionException(e);
		}
	}
	
	/**
	 * 如果构造函数的声明类是

	 * 非静态上下文，构造函数的第一个参数需要

	 * 作为封闭实例；见第15.9.3节

	 * <cite>Java&trade；语言规范。
	 */
	@Test
	@SuppressWarnings("all")
	public void test4() throws NoSuchMethodException, SecurityException, InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, ClassNotFoundException {
		Field field = ReflectionUtils.findField(Person.class, "name");
		System.err.println(field.isAccessible());
		System.err.println(field.isAccessible());
		System.err.println(field.isAnnotationPresent(Transient.class));
		
		System.err.println(ReflectionUtils.isPublicStaticFinal(field));
		
		Method method = ReflectionUtils.findMethod(Person.class, "privateMethod");
		System.err.println(method.isAnnotationPresent(RequestMapping.class));
		System.err.println(method.isAccessible());
		System.err.println(method.isBridge());
		System.err.println(method.isDefault());
		System.err.println(method.isSynthetic());
		System.err.println(method.isVarArgs());
		
		System.err.println(ReflectionUtils.isToStringMethod(method));
		System.err.println(ReflectionUtils.isObjectMethod(method));
		System.err.println(ReflectionUtils.isCglibRenamedMethod(method));
		System.err.println(ReflectionUtils.isHashCodeMethod(method));
		System.err.println(ReflectionUtils.isToStringMethod(method));
		
		Constructor<MyClass> c = MyClass.class.getConstructor(String.class , int.class);
		MyClass m = c.newInstance("11",11);
		System.err.println(m.getName());
		
		
		/**
		 * 外部内部
		 * 内部类编译生成文件名是 outer$inner
		 * 
		 * 如果构造函数的声明类是

		 * 非静态上下文，构造函数的第一个参数需要
		 * ctor.newInstance(new TestRefelectionUtils(),"李四",22);

		 * 作为封闭实例；见第15.9.3节

		 */
		Constructor<Person> ctor = (Constructor<Person>) Class
				.forName("com.tgr.test.spring.util.reflectionUtils.TestRefelectionUtils$Person")
				.getDeclaredConstructors()[0];
		System.err.println(ctor);//public com.tgr.test.spring.util.reflectionUtils.TestRefelectionUtils$Person(com.tgr.test.spring.util.reflectionUtils.TestRefelectionUtils,java.lang.String,int)

		Person p = ctor.newInstance(new TestRefelectionUtils(),"李四",22);
		System.err.println(p.getName());
		
	}
	
	@Test
	@SuppressWarnings("all")
	public void test5() {
		Person person = new Person("张三", 16);
		Method[] allDeclaredMethods = ReflectionUtils.getAllDeclaredMethods(Person.class);
		for(Method method : allDeclaredMethods) {
			System.err.println(method);
		}
		
		System.err.println("----------------------------------------");
		
		Method[] uniqueDeclaredMethods = ReflectionUtils.getUniqueDeclaredMethods(Person.class);
		for(Method method : uniqueDeclaredMethods) {
			System.err.println(method);
		}
	}
	
	
	
	class Person implements Cloneable{
		
		@Transient
		private String name;
		
		private int age;
		
		public Person(String name, int age) {
			super();
			this.name = name;
			this.age = age;
		}
		
		public Person() {
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

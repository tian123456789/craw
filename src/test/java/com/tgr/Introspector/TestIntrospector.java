package com.tgr.Introspector;

import java.beans.BeanInfo;
import java.beans.IntrospectionException;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import org.junit.Test;

import com.tgr.bean.Person;

/**
 * @author tgr
 * 通过PropertyDescriptor修改属性方式
 */
public class TestIntrospector {

	public void setProperty(Person personInfo , String propertyName) throws IntrospectionException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
		PropertyDescriptor propDesc = new PropertyDescriptor(propertyName, Person.class);
		Method methodSetName = propDesc.getWriteMethod();
		methodSetName.invoke(personInfo,"喔哈哈哈哈");
		System.err.println(" setName: "+personInfo.getName());
	}
	
	public void getProperty(Person personInfo , String propertyName) throws IntrospectionException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
		PropertyDescriptor propDescriptor = new PropertyDescriptor(propertyName, Person.class);
		Method methodGetName = propDescriptor.getReadMethod();
		Object objName = methodGetName.invoke(personInfo);
		System.err.println(" getName: "+objName.toString());
	}
	
	@Test
	public void test() throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, IntrospectionException {
		Person person = new Person();
		setProperty(person, "name");
		getProperty(person, "name");
	}
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	public void setPropertyByIntrospector(Person personInfo , String propertyName) throws IntrospectionException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
		
		BeanInfo beanInfo = Introspector.getBeanInfo(Person.class);
		PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();
		
		if(propertyDescriptors != null && propertyDescriptors.length > 0) {
			for(PropertyDescriptor propDesc : propertyDescriptors) {
				if(propDesc.getName().equals(propertyName)) {
					Method methodSetName = propDesc.getWriteMethod();
					methodSetName.invoke(personInfo, "成吉思汗");
					System.err.println(" setName: "+personInfo.getName());
					break;
				}
			}
		}
		
	}
	
	public void getPropertyByIntrospector(Person personInfo , String propertyName) throws IntrospectionException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
		
		BeanInfo beanInfo = Introspector.getBeanInfo(Person.class);
		PropertyDescriptor[] proDescs = beanInfo.getPropertyDescriptors();
		
		if(proDescs != null && proDescs.length > 0) {
			for(PropertyDescriptor propDesc : proDescs) {
				if(propDesc.getName().equals(propertyName)) {
					Method methodGetName = propDesc.getReadMethod();
					Object objName = methodGetName.invoke(personInfo);
					System.err.println(" getName: "+personInfo.getName());
					break;
				}
			}
		}
	}
	
	@Test
	public void test2() throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, IntrospectionException {
		Person personInfo = new Person();
		setPropertyByIntrospector(personInfo, "name");
		getProperty(personInfo, "name");
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

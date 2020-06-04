package com.tgr.test.spring.util.classUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Test;

import Zorg.springframework.util.ClassUtils;

public class TestClassUtils {

	@Test
	public void test() throws ClassNotFoundException, LinkageError {
		ClassLoader defaultClassLoader = ClassUtils.getDefaultClassLoader();
		
		System.err.println(ClassUtils.forName("int", defaultClassLoader));//int
		System.err.println(ClassUtils.forName("java.lang.String", defaultClassLoader));//class java.lang.String
		System.err.println(ClassUtils.forName("java.lang.Thread.State", defaultClassLoader));//class java.lang.Thread$State
	
		System.err.println(ClassUtils.isPresent("java.lang.String", defaultClassLoader));
		System.err.println(ClassUtils.isPresent("java.lang.xxx", defaultClassLoader));
		
		System.err.println(ClassUtils.resolvePrimitiveClassName("int"));
		System.err.println(ClassUtils.resolvePrimitiveClassName("aa"));
		
		System.err.println(ClassUtils.isVisible(String.class, defaultClassLoader));
	}
	
	@Test
    public void test2() throws ClassNotFoundException {
        System.out.println(ClassUtils.isPrimitiveWrapper(Integer.class)); //true
        System.out.println(ClassUtils.isPrimitiveWrapper(int.class)); //false
        System.out.println(ClassUtils.isPrimitiveOrWrapper(int.class)); //true

        System.out.println(ClassUtils.isPrimitiveArray(Integer[].class)); //false
        System.out.println(ClassUtils.isPrimitiveArray(int[].class)); // true
        System.out.println(ClassUtils.isPrimitiveWrapperArray(int[].class)); //false

        // 传进去事包装类型  最终返回的是基本类型
        Class<?> clazz = ClassUtils.resolvePrimitiveIfNecessary(Integer[].class);
        System.out.println(clazz); //class [Ljava.lang.Integer;
        System.out.println(Integer[].class); //class [Ljava.lang.Integer;
        System.out.println(clazz == Integer[].class); //true
    }
	
	@Test
    public void test3() {
        System.out.println(Object.class.isAssignableFrom(Integer.class)); // true
        System.out.println(Object.class.isAssignableFrom(int.class)); // false  请注意这里返回的是false

        // 但是下面这么弄  就都返回true了
        System.out.println(ClassUtils.isAssignable(Object.class, Integer.class)); //true
        System.out.println(ClassUtils.isAssignable(Object.class, int.class)); // true

        // 有个更简便的方式 对象参与比较
        Integer i = 0;
        System.out.println(ClassUtils.isAssignableValue(Object.class, i)); //true
    }
	
	@Test
    public void test4() {
        //String filePath = "links\\fsx\\A.class";
        String filePath = "links/fsx/A.class";
        System.out.println(ClassUtils.convertResourcePathToClassName(filePath)); //links.fsx.A.class
        //System.out.println(ClassUtils.convertClassNameToResourcePath(filePath));

        //在指定类的所属包下面，寻找一个资源文件，并返回该资源文件的文件路径 java.lang.String
        System.out.println(ClassUtils.addResourcePathToPackagePath(String.class, "someResource.xml")); // java/lang/someResource.xml

        System.out.println(ClassUtils.classPackageAsResourcePath(String.class)); //java/lang

        // 打印classNames
        System.out.println(ClassUtils.classNamesToString(String.class, Integer.class)); //[java.lang.String, java.lang.Integer]
        System.out.println(ClassUtils.classNamesToString(Arrays.asList(String.class, Integer.class))); //[java.lang.String, java.lang.Integer]
    }
	
	@Test
	public void test5() {
		List<String> list = new ArrayList<String>();
		
		System.err.println(Arrays.asList(ClassUtils.getAllInterfaces(list)));
		System.err.println(ClassUtils.getAllInterfacesAsSet(list));
	}
	
	@Test
    public void test6() {
        System.out.println(ClassUtils.determineCommonAncestor(Integer.class,Long.class)); //class java.lang.Number  找到他们共同父类
        System.out.println(ClassUtils.determineCommonAncestor(Integer.class,Number.class)); //class java.lang.Number  若其中一个就是父类 就直接返回即可
        System.out.println(ClassUtils.determineCommonAncestor(Integer.class, Exception.class)); //null  八竿子打不着就返回null吧（注意相当于是Object.class 直接返回null的）
    }
	
	@Test
    public void test7() {

        System.out.println(ClassUtils.getShortName("java.lang.String")); //String
        System.out.println(ClassUtils.getShortName(String.class)); //String
        System.out.println(ClassUtils.getShortNameAsProperty(String.class)); //String
        System.out.println(ClassUtils.getPackageName(String.class)); //java.lang
        System.out.println(ClassUtils.getPackageName("java.lang.String")); //java.lang
        // clazz.getTypeName()
        System.out.println(ClassUtils.getQualifiedName(String.class)); //java.lang.String
        System.out.println(String.class.getName()); //java.lang.String
        System.out.println(String.class.getTypeName()); //java.lang.String

        System.out.println(ClassUtils.getDescriptiveType(ArrayList.class)); //java.lang.Class  注意此处的输出


        ////java.lang.Class
        //System.out.println(ClassUtils.getDescriptiveType(getClass()));
        ////java.lang.String[]
        //System.out.println(ClassUtils.getDescriptiveType(new String[]{}));
        //
        ////com.sun.proxy.$Proxy20 implementing cn.wolfcode.springboot.utilstest.IEmployeeService,
        ////cn.wolfcode.springboot.utilstest.IAddition,
        ////org.springframework.aop.SpringProxy,org.springframework.aop.framework.Advised
        //System.out.println(ClassUtils.getDescriptiveType(service));
    }





}

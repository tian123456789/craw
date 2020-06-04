package com.tgr.spider.redis;

import java.io.IOException;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.Transaction;

public class RedisServiceProxy {

	private static RedisServiceProxy instance = new RedisServiceProxy();
	
	private RedisService proxy;
	
	public static RedisService getProxy() {
		return instance.proxy;
	}
	
	@SuppressWarnings("all")
	private RedisServiceProxy() {
		//redis数据库
		Jedis jedis = new Jedis("127.0.0.1", 6379);
		//类加载器
		ClassLoader loader = Thread.currentThread().getContextClassLoader();
		//接口集合
		Class[] inters = {RedisService.class};
		
		//目标对象
		RedisServiceImpl targ = new RedisServiceImpl();
		
		//调用方法处理器
		InvocationHandler h = new InvocationHandler() {
			@Override
			public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
				Transaction tx = null;
				try {
					//从当前线程获取绑定的事务对象
					tx = RedisServiceImpl.local.get();
					//给当前线程绑定事务 没有获取到
					if(tx == null) {
						tx = jedis.multi();
						RedisServiceImpl.local.set(tx);
					}
					//调用目标对象的方法 返回目标对象
					Object ret = method.invoke(targ, args);
					//提交事务
					tx.exec();
					return ret;
				} catch (Exception e) {
					e.printStackTrace();
					tx.discard();
				}finally {
					try {
						if(tx != null) {
							tx.close();
						}
					} catch (IOException e) {
						e.printStackTrace();
					}
					
				}
				return null;
			}
		};
		
		//(loader类加载器, inters要反射的.class, h反射的方法实现处理器)
		proxy = (RedisService)Proxy.newProxyInstance(loader, inters, h);
		
	}
}

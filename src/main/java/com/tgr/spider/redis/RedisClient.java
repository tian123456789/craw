package com.tgr.spider.redis;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

public class RedisClient {

	private JedisPool jedisPool;

	public void getJedsi(String key, Object value) {
		Jedis jedis = null;
		try {
			jedis = jedisPool.getResource();
			jedis.set(key, value.toString());
		}catch (Exception e){
			e.printStackTrace();
		}finally {
			jedis.close();
		}
	}
}

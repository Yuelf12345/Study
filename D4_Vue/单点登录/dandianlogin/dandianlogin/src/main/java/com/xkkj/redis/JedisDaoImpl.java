package com.xkkj.redis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

@Component
public class JedisDaoImpl implements JedisDao{

    //连接池
    @Autowired
    private JedisPool jedisPool;

    @Override
    public String getValue(String key) {
        Jedis jedis = jedisPool.getResource();
        String value = jedis.get(key);
        jedis.close();
        return value;
    }

    @Override
    public Long delValue(String key) {
        Jedis jedis = jedisPool.getResource();
        Long result = jedis.del(key);
        jedis.close();
        return result;
    }

    @Override
    public String setValue(String key, String value) {
        Jedis jedis = jedisPool.getResource();
        String str = jedis.set(key, value);
        jedis.close();
        return str;
    }

    @Override
    public Long expire(String key,int seconds) {
        Jedis jedis = jedisPool.getResource();
        Long time = jedis.expire(key, seconds);
        jedis.close();
        return time;
    }
}

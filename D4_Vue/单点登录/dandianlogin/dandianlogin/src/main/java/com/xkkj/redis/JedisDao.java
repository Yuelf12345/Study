package com.xkkj.redis;

public interface JedisDao {

    //查
    public String getValue(String key);
    //删
    public Long delValue(String key);
    //增
    public String setValue(String key, String value);
    //设置时间
    public Long expire(String key, int seconds);
}

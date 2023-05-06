package com.xkkj.util;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import redis.clients.jedis.JedisPool;

@Configuration
//链接redis 获取appliaction.yml 里的数据以spring.redis开头的方式
@ConfigurationProperties(prefix = "spring.redis")
public class JedisUtil {
    //属性名字和配置文件中必须一致,还要提供get和set方法
    private String host;  //读取到spring.redis.hostg.redis.port
    private int port;//sprin


    @Bean
    public JedisPool jedisPool(){
        JedisPool jedisPool = new JedisPool(host,port);
        System.out.println("已连接："+host+"上的redis，端口号为："+port);
        return jedisPool;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }
}

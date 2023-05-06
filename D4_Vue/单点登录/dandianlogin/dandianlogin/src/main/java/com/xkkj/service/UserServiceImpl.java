package com.xkkj.service;

import com.xkkj.dao.UserDao;
import com.xkkj.pojo.User;
import com.xkkj.redis.JedisDao;
import com.xkkj.util.CookieUtils;
import com.xkkj.util.JsonUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class UserServiceImpl{
    @Autowired
    private UserDao userDao;
    @Autowired
    private JedisDao jedisDao;
    @Value("${REDIS_KEY}")   //从配置文件中取值
    private String KEY;

    private Map<Integer,String> UserLogin = new HashMap<>();

    /**
     * 登录
     * @param request
     * @param response
     * @param u
     * @return
     */
    public User userlogin(HttpServletRequest request, HttpServletResponse response, User u){
        //查询登录是否成功
        User user=userDao.findByUsernameAndPassword(u.getUsername(),u.getPassword());
        //判断us是否为空
        if(user==null){
            return null;
        }
        //生成token
        String token="user_"+ UUID.randomUUID().toString();
        //从map中获得redis中的key
        String oldToken = UserLogin.get(user.getId());
        //判断map中是否存在该id
        if(!StringUtils.isEmpty(oldToken)){
            //删除redis中老的值
            jedisDao.delValue(oldToken);
        }
        //将新的的key保存到map中
        UserLogin.put(user.getId(),token);
        //将信息存入redis
        jedisDao.setValue(token, JsonUtils.objectToJson(user));
        //将token放入cookie中
        CookieUtils.setCookie(request,response,KEY,token,5*60,true);
        return user;
    }

    /**
     * 判断是否登录
     * @param response
     * @param request
     * @return
     */
    public String getUserByToken(HttpServletResponse response, HttpServletRequest request) {
        //从cookie中取出用户token
        String token=CookieUtils.getCookieValue(request,KEY);
        //从redis中取出用户信息
        String user= jedisDao.getValue(token);
        return user;
    }
}

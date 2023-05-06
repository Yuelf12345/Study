package com.xkkj.controller;

import com.xkkj.config.ResponseResult;
import com.xkkj.pojo.User;
import com.xkkj.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @description: LoginController
 * @author: xuhao
 * @time: 2019/11/25 16:35
 */
@RestController
public class LoginController {

    @Autowired
    private UserServiceImpl userService;

    /**
     * 登录
     * @param response
     * @param request
     * @param user
     * @param model
     * @return
     */
    @PostMapping("/login")
    public ResponseResult Login(HttpServletResponse response , HttpServletRequest request, @RequestBody User user, Model model){
        ResponseResult responseResult=new ResponseResult();
        try {
            User user2 = userService.userlogin(request, response, user);
            if (user2!=null){
                responseResult.setState(200);
                responseResult.setMsg("登录成功！");
                return responseResult;
            }else{
                responseResult.setState(202);
                responseResult.setMsg("用户名或密码错误！");
                return responseResult;
            }
        }catch (Exception e) {
            responseResult.setState(500);
            responseResult.setMsg("发生错误，登录失败！");
            return responseResult;
        }
    }

    /**
     * 判断是否登录
     * @param response
     * @param request
     * @return
     * @throws Exception
     */
    @GetMapping("/toLogin")
    public ResponseResult getUserInfo(HttpServletResponse response , HttpServletRequest request) throws Exception {
        ResponseResult responseResult=new ResponseResult();
        try{
            String token = userService.getUserByToken(response, request);
            if(token!=null){
                responseResult.setState(200);
                responseResult.setMsg("登录中！");
                return responseResult;
            }else{
                responseResult.setState(202);
                responseResult.setMsg("在别处登录！");
                return responseResult;
            }
        }catch (Exception e){
            response.setStatus(500);
            responseResult.setMsg("发生错误！");
            return responseResult;
        }
    }
}

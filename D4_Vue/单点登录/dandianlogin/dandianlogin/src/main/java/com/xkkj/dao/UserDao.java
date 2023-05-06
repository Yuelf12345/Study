package com.xkkj.dao;

import com.xkkj.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Administrator on 2019/11/18.
 */
@Repository
public interface UserDao extends JpaRepository<User,Integer> {
   public User findByUsernameAndPassword(String username, String password);
}

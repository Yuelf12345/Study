package com.xkkj.pojo;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by Administrator on 2019/11/18.
 */
@Data
@Entity
@Table(name = "user")
public class User {
    @Id
    @Column(name = "id",unique = true,nullable = false)
    private int id;
    @Column(name = "username",nullable = false)
    private  String username;
    @Column(name = "password",nullable = false)
    private String  password;
}

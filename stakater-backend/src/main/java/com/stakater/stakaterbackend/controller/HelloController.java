package com.stakater.stakaterbackend.controller;

import com.stakater.stakaterbackend.response.HelloResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@ComponentScan
@RequestMapping("/api")
public class HelloController {

    @Autowired
    private Environment env;

    @GetMapping("/hello")
    public HelloResponse greeting() {
        StringBuilder hello = new StringBuilder();
        hello.append("Hello ");
        hello.append(env.getProperty("NAME"));
        return new HelloResponse(hello.toString());
    }
}

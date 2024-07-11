package com.kob.backend.controller.pk;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//controller返回字符串时，会在static里找模板
@Controller
@RequestMapping("/pk")
public class IndexController {//前后端不分离（server直接打出结果）

    @RequestMapping("/index")
    public String index() {
        return "/pk/index.html";
    }
}

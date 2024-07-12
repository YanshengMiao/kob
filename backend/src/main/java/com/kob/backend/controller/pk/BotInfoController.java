package com.kob.backend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

//对于RestController，默认返回数据而非模板
@RestController
@RequestMapping("/pk") //映射
public class BotInfoController {//前后端分离（前端render结果）

    @RequestMapping("/getbotinfo/")
    public Map<String,String> getBotInfo() {
        List<Map<String,String>> list = new LinkedList<>();
        Map<String,String> bot1 = new HashMap<>();
        bot1.put("name","jax");
        bot1.put("rating","1.0.0");
        Map<String,String> bot2 = new HashMap<>();
        bot2.put("name","monkey");
        bot2.put("rating","1.0.5");
        list.add(bot1);
        list.add(bot2);

        return bot1;
    }
}

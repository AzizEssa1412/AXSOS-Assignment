package com.example.hello_human;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

public class ServletInitializer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(HelloHumanApplication.class);
	}

	@RestController
public class HumanController {


    @RequestMapping("/")
    public String index2(@RequestParam(value = "name", required = false) String name, @RequestParam(value = "last", required = false) String last,  @RequestParam(value = "times", required = false) String times) {
        if (name == null && last == null) {
            return "Hello Human";
        }
        if (name != null && last != null) {
            return "Hello   " + name+ " " + last;

        }

        return "Hello    " + name ;
    }

    @RequestMapping("/h")
    public StringBuilder index3(@RequestParam(value = "name", required = false) String name, @RequestParam(value = "times", required = false) String times) {
        StringBuilder text= new StringBuilder("hello"+"  "+name+"  ");
        if (times  != null){
            for (int i = 0; i < Integer.parseInt(times); i++) {
                text.append("hello").append("  ").append(name).append("  ");}

            return text;
        }
        StringBuilder text2= new StringBuilder("name ");

        return text2 ;
    }

	}
}

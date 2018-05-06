package com.sbeam.controller;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Date;  
import java.util.HashMap;  
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sbeam.model.GameBase;  
  
  
  
@Controller  
@RequestMapping(value = "/NoSbeam") 
public class HomeController {

	
	@RequestMapping
    public String index() {  
        return "Home";  
    }  
  
 
    @RequestMapping(value = "/ShowPage.action")  
    public String getShowPage(@RequestBody String page) {  
    	try {
    		page=URLDecoder.decode(page.split("=")[1],"UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
        return page;  
    }  
}

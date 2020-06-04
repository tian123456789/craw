package com.tgr.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/pathMatcher")
public class PathMatcherController {

	@GetMapping("/test")
	public String testPathMatcherFilter() {
		return "喔吼吼吼";
	}
	
	
}

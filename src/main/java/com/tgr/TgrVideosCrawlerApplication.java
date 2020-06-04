package com.tgr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ExitCodeGenerator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.client.RestTemplate;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@ComponentScan("com.tgr")
@EnableSwagger2
@EnableAsync
@ServletComponentScan("com.tgr")//注释掉这个过滤器 换成springboot cross配置类试试 都可以
public class TgrVideosCrawlerApplication {
	
	@Bean("myExitCodeGenerator")
	public static ExitCodeGenerator exitCodeGenerator() {
		return ()->999;
	}
	
	public static void main(String[] args) throws Exception {
		//System.exit(SpringApplication.exit(SpringApplication.run(TgrVideosCrawlerApplication.class , args), exitCodeGenerator()));
		SpringApplication.run(TgrVideosCrawlerApplication.class, args);
	}
	
	@Autowired
	private RestTemplateBuilder builder;

	@Bean
	public RestTemplate restTemplate() {
		return builder.build();
	}

}

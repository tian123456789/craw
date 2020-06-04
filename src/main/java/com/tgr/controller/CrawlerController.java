package com.tgr.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.Charset;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Random;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.apache.commons.compress.utils.CharsetNames;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ExitCodeGenerator;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.yaml.snakeyaml.util.UriEncoder;

import com.alibaba.fastjson.JSONObject;
import com.tgr.async.service.AsyncSendSmsService;
import com.tgr.request.AsyncBody;
import com.tgr.starter.Starter;

@RestController
@RequestMapping("/boot")
public class CrawlerController extends BaseController implements ApplicationContextAware{

	private ApplicationContext applicationContext;
	
	@Autowired
	private Starter starter;
	
	@Autowired
	private AsyncSendSmsService asyncSendSmsService;
	
	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		this.applicationContext = applicationContext;
	}
	
	/**
	 * 请求前 请先flushall redis
	 * 分析时请结合 redisDestok reload
	 * @throws IOException 
	 */
	/*@GetMapping("/")
	public void crawler() {
		starter.action("http://list.youku.com/category/video", 1);//请不要更改 seed and level
	}*/

	@GetMapping("/a")
	public JSON http(HttpServletRequest request , HttpServletResponse response) throws IOException {
		
		String setCookie = response.getHeader(HttpHeaders.SET_COOKIE);
		System.err.println("创建session前的setCookie: "+(StringUtils.isEmpty(setCookie) ? "" : setCookie));
		
		JSON json = new JSON();
		
		json.setStatus(200);
		json.setResult("success2汉字");
		
		System.err.println("cookie ===========================================");
		
		Cookie[] cookies = request.getCookies();
		if(cookies != null && cookies.length > 0) {
			for(Cookie cookie : cookies) {
				System.err.println(cookie.getValue());
			}
		}
		
		System.err.println("session ==========================================");
		
		HttpSession session = request.getSession();//没有就设置一个
		
		String setCookie2 = response.getHeader(HttpHeaders.SET_COOKIE);
		System.err.println("创建session后的setCookie: "+(StringUtils.isEmpty(setCookie2) ? "" : setCookie2));
		
		
		//session.setAttribute(name, value);
		System.err.println("session = "+session);
		
		
		
		Enumeration<String> names = session.getAttributeNames();
		while(names.hasMoreElements()) {
			
			String name = names.nextElement();
			
			if(!StringUtils.isEmpty(name)) {
				System.err.println(name+" : "+(session.getValue(name) == null ? "" : session.getValue(name)));
			}
		}
		
		response.addCookie(new Cookie("myCookie"+new Random().nextInt(), "kukakahou"+new Random().nextInt()));
		
		String jsonStr = JSONObject.toJSONString(json);
		UriEncoder.decode("%E8%AF%95%E4%B8%80%E8%AF%95");	
		response.addHeader(HttpHeaders.SERVER, "tgr的乐乐乐乐乐");
		response.addHeader("body", jsonStr);
		response.addHeader(HttpHeaders.CONTENT_LENGTH, "50");
		//response.setContentType("text/html;charset=UTF-8");
		//response.setStatus(HttpStatus.FORBIDDEN.value());
		response.setLocale(Locale.CHINESE);
		response.setHeader(HttpHeaders.ACCEPT_CHARSET, CharsetNames.UTF_8);
		response.setCharacterEncoding(CharsetNames.UTF_8);
		/*PrintWriter w = response.getWriter();
		w.print(jsonStr);
		w.flush();
		w.close();
		return;*/
		return json;
	}
	
	@GetMapping("/b")
	public void b(HttpServletRequest request , HttpServletResponse response) {
		//text/html,text/plain纯文本,text/css
		//image/gif,image.jpeg,image/png
		//audio/mpeg,video/mp4
		//application/xml,application/json,application/javascript,application/pdf
		request.getHeader("Accept");//b告诉s希望接收类型
		
		//gzip,deflate,br
		request.getHeader("Accept-Encoding");//b告诉s我能支持的压缩格式
		
		response.setHeader("Content-Type", "text/html");//s告诉b实际发的类型
		response.setContentType("text/html");			//s告诉b实际发的类型
		response.setHeader("Content-Encoding", "gzip"); //s告诉b实际发的类型
	}
	
	@PostMapping("/")
	public void httpPost(HttpServletRequest request , HttpServletResponse response , String message) {
		Enumeration<String> names = request.getAttributeNames();
		while(names.hasMoreElements()) {
			String name = names.nextElement();
			if(!StringUtils.isEmpty(name)) {
				System.err.println(name+" : "+(request.getAttribute(name) == null ? "" : request.getAttribute(name).toString()));
			}
		}
		
		System.err.println("down header-------------------------------------");
		
		Enumeration<String> headers = request.getHeaderNames();
		while(headers.hasMoreElements()) {
			String name = headers.nextElement();
			if(!StringUtils.isEmpty(name)) {
				System.err.println(name+" : "+(request.getHeader(name) == null ? "" : request.getHeader(name).toString()));
			}
		}
		
		System.err.println("down paramters-------------------------------------");
		
		Enumeration<String> paramters = request.getParameterNames();
		while(paramters.hasMoreElements()) {
			String name = paramters.nextElement();
			if(!StringUtils.isEmpty(name)) {
				System.err.println(name+" : "+(request.getParameter(name) == null ? "" : request.getParameter(name).toString()));
			}
		}
		
		System.err.println("down URI-------------------------------------");
		
		System.err.println("URI="+(request.getRequestURI() == null ? "" : request.getRequestURI()));
		
		HttpSession session = request.getSession();
		System.err.println("session = "+(session == null ? "" : session.toString()));
		
		System.err.println("content-type = "+(request.getContentType() == null ? "" : request.getContentType()));
		
		String pathInfo = request.getPathInfo() == null ? "" : request.getPathInfo();//额外数据
		System.err.println("pathInfo = "+pathInfo);
	}
	
	class JSON{
		
		private int status;
		
		private Object result;

		public int getStatus() {
			return status;
		}

		public void setStatus(int status) {
			this.status = status;
		}

		public Object getResult() {
			return result;
		}

		public void setResult(Object result) {
			this.result = result;
		}
	}
	
	/**
	 * 	打开声明void java.lang.System.exit（int status）
	 *	终止当前运行的Java虚拟机。参数用作状态代码；按照惯例，非零状态代码表示异常终止。
	 */
	@GetMapping("/exitApplication")
	public void exitApplication() {
		System.exit(SpringApplication.exit(this.applicationContext , (ExitCodeGenerator)applicationContext.getBean("myExitCodeGenerator")));
		//int flg = SpringApplication.exit(this.applicationContext , (ExitCodeGenerator)applicationContext.getBean("myExitCodeGenerator"));
		//System.err.println("执行了退出 标记FLG = "+flg);
	}
	
	@GetMapping("/stop")
	public void stop() {
		starter.actionStop();
	}
	
	//也可以 注解@CrossOrigin解决跨域问题
	@GetMapping("to_cross")
	public void myCross(HttpServletRequest req , HttpServletResponse res) {
		
		String jsoncallback = req.getParameter("jsoncallbackOOO");
		Map<String,String> map = new HashMap<String, String>();
		map.put("name", "tgr");
		System.err.println("接收到跨域请求");
		
		net.sf.json.JSONObject jsonObject = net.sf.json.JSONObject.fromObject(map);
		String result =jsoncallback+"("+jsonObject+")";//拼装json对象 而不是字符串
		
		try {
			res.getWriter().print(result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@GetMapping("to_cross2")
	public Map<String,String> myCross2(HttpServletRequest req , HttpServletResponse res) {
		
		Map<String,String> map = new HashMap<String, String>();
		map.put("name", "tgr");
		System.err.println("接收到跨域请求");
		return map;
	}
	
	@PostMapping("/async")
	public AsyncBody async(@Valid @RequestBody AsyncBody body) {
		asyncSendSmsService.auditNoticeSms(1);
		return body;
	}

}

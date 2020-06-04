package com.tgr;

import java.util.HashMap;

import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

@SuppressWarnings("unused")
public class WebDriverTest {

	
	@Test
	public void driver() throws InterruptedException {
		WebDriver driver = getDriver();

		// 登录地址
		driver.get("http://home.51cto.com/index?reback=http://www.51cto.com/");
		// 输入账号,按照id查找元素
		// driver.findElement(By.id("loginform-username")).sendKeys("<your email>");
		// 输入密码
		// driver.findElement(By.id("loginform-password")).sendKeys("<your password>");
		// Thread.sleep(5000);
		// 点击登录
		// driver.findElement(By.name("login-button")).click();
		// driver.close();
		int i = 100;
		// for i in range(2,90): #也可以设置一个较大的数，一下到底
		String js = "var q=document.documentElement.scrollTop=0";
		// driver.getWindowHandle()..execute_script(js)
	}

	public WebDriver getDriver() {
		// 设置驱动程序路径
		System.setProperty("webdriver.chrome.driver", "E:\\SeleniumDemo-master\\chromedriver.exe");

		// 首选项
		HashMap<String, Object> opts = new HashMap<String, Object>();
		// 禁止加载图片
		opts.put("profile.managed_default_content_settings.images", 2);
		// 禁止cookies
		opts.put("profile.default_content_settings.cookies", 2);

		ChromeOptions options = new ChromeOptions();
		options.setExperimentalOption("prefs", opts);
		DesiredCapabilities chromeCaps = DesiredCapabilities.chrome();
		chromeCaps.setCapability(ChromeOptions.CAPABILITY, options);

		// 新建一个谷歌浏览器对象（driver）
		@SuppressWarnings("deprecation")
		WebDriver driver = new ChromeDriver(chromeCaps);
		// 通过driver控制浏览器打开链接（url）
		return driver;
	}

}

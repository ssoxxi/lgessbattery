package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LgBatteryController {
	@GetMapping("/")
	public String home() {
		return "/index";
	}
}

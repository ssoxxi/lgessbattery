package lgESSBattery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import lgESSBattery.domain.dto.QnaDto;
import lgESSBattery.service.QnaService;

@Controller
public class QnaController {
	
	@Autowired
	private QnaService qnaService;
	
	@GetMapping("/qna/list")
	public ModelAndView qna(ModelAndView mv) {
		List<QnaDto> qnaList=qnaService.selectList();
		mv.setViewName("/qna/list");
		mv.addObject("qnaList", qnaList);
		return mv;
	}
}

package lgESSBattery.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lgESSBattery.domain.dto.QnaDto;
import lgESSBattery.mapper.QnaMapper;

@Service
public class QnaServiceImpl implements QnaService {

	@Autowired
	private QnaMapper qnaMapper;
	
	@Override
	public List<QnaDto> selectList() {
		return qnaMapper.selectQnaList();
	}


}

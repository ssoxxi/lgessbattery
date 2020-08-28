package lgESSBattery.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import lgESSBattery.domain.dto.QnaDto;


@Mapper
public interface QnaMapper {

	List<QnaDto> selectQnaList();
}

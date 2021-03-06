package lgESSBattery.domain.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data //get/set생성
public class QnaDto {
	//db와 연결할 데이터들
	private int no;
	private String subject;
	private int count;
	private String writer;
	private LocalDateTime reg_date;
	private String user_ip;
	private String content;
	
	//get/set메소드필요 ->@Data 해주면 자동 생성
	
}

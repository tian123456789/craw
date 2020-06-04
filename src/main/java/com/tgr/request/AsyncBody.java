package com.tgr.request;

import javax.validation.constraints.NotEmpty;

import com.tgr.validator.MyValidatorAnnotation;

import lombok.Data;

@Data
public class AsyncBody {

	@MyValidatorAnnotation(value = {"1" , "2" , "3"} , message = "错误值")
	private String flg;
	
	@NotEmpty
	private String name;
}

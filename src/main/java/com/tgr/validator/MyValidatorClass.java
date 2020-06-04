package com.tgr.validator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class MyValidatorClass implements ConstraintValidator<MyValidatorAnnotation, Object> {
	
	private String[] values;
	
	@Override
	public void initialize(MyValidatorAnnotation myValidatorAnnotation) {
		this.values = myValidatorAnnotation.value();
	}
	
	@Override
	public boolean isValid(Object value, ConstraintValidatorContext context) {
		boolean isValid = false;
		
		if(values == null) {
			isValid = true;
		}
		
		for(int i = 0 ; i < values.length ; i++) {
			if(values[i].equals(String.valueOf(value))) {
				isValid = true;
				break;
			}
		}
		
		return isValid;
	}

	

}

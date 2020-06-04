package com.tgr.validator;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD , ElementType.PARAMETER ,ElementType.METHOD})
@Constraint(validatedBy = MyValidatorClass.class)
public @interface MyValidatorAnnotation {

	String[] value() default {};
	
	String message() default "校验未通过";

	Class<?>[] groups() default {};
	
	Class<? extends Payload>[] payload() default {};
}

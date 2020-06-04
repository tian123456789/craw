package com.tgr.spider.util;

import java.io.IOException;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class StringToArraySerializer extends JsonSerializer<String> {

	@Override
	public void serialize(String value, JsonGenerator generator, SerializerProvider provider)
			throws IOException, JsonProcessingException {
		value = (value == null || value.trim().length() == 0) ? "" : value;
		String[] values = value.split(",");
		generator.writeObject(values);
	}
}
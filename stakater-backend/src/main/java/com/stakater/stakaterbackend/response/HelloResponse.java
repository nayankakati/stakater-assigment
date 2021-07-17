package com.stakater.stakaterbackend.response;

public class HelloResponse {
    private String name;

    public HelloResponse(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

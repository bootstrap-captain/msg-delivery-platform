package com.hsbc.wsit.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/pod/status")
@Slf4j
@CrossOrigin
@RequiredArgsConstructor
public class PodStatusController {

    @GetMapping("/test")
    public String test(){
        return "success";
    }
}

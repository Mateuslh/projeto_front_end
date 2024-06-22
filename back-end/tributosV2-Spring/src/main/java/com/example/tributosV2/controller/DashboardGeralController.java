package com.example.tributosV2.controller;

import com.example.tributosV2.model.Dashboard.DashboardGeral;
import com.example.tributosV2.service.DashboardGeralService;
import lombok.AllArgsConstructor;
import org.springframework.cglib.core.Local;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/dashboardGeral")
@AllArgsConstructor
public class DashboardGeralController {

    protected DashboardGeralService dashboardGeralService;

    @GetMapping
    ResponseEntity<DashboardGeral> get(@RequestParam(required = false) Integer anoBase,
                                       @RequestParam(required = false) Integer anosAtras){

        if(anoBase == null){
            anoBase = LocalDate.now().getYear();
        }
        if(anosAtras == null){
            anosAtras = 5;
        }

        return ResponseEntity.ok().body(dashboardGeralService.getDashboardGeral(anoBase,anosAtras));
    }
}
